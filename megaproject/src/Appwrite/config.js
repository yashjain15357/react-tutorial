// Import configuration and required Appwrite modules
import conf from "../conf/conf.js";
import { Client, Databases, ID, Storage, Query } from "appwrite";

// Class to handle database and storage services using Appwrite
export class databaseServices {
    client = new Client(); // Initialize Appwrite client
    databases; // Placeholder for database service
    bucket; // Placeholder for storage bucket service

    // Constructor to configure Appwrite client and initialize services
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Set Appwrite API endpoint
            .setProject(conf.appwriteProjectId); // Set Appwrite project ID
        this.databases = new Databases(this.client); // Initialize database service
        this.bucket = new Storage(this.client); // Initialize storage service
    }

    // Async function to create a new post
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            // Create a new document in the specified database and collection
            return await this.databases.createDocument(
                conf.appwriteDatabase, // Database ID
                conf.appwriteCollectionId, // Collection ID
                slug, // Document ID (slug)
                {
                    title, // Post title
                    content, // Post content
                    featuredImage, // Featured image URL
                    status, // Post status (e.g., active, draft)
                    userId // User ID of the post creator
                }
            );
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error); // Log error
        }
    }

    // Async function to update an existing post
    async updatepost(slug, { title, content, featuredImage, status }) {
        try {
            // Update the document with the given slug
            return await this.databases.updateDocument(
                conf.appwriteDatabase, // Database ID
                conf.appwriteCollectionId, // Collection ID
                slug, // Document ID (slug)
                {
                    title, // Updated title
                    content, // Updated content
                    featuredImage, // Updated featured image
                    status // Updated status
                }
            );
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error); // Log error
        }
    }

    // Async function to delete a post by its slug
    async deletepost(slug) {
        try {
            // Delete the document with the given slug
            await this.databases.deleteDocument(
                conf.appwriteDatabase, // Database ID
                conf.appwriteCollectionId, // Collection ID
                slug // Document ID (slug)
            );
            return true; // Return true if successful
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error); // Log error
            return false; // Return false if an error occurs
        }
    }

    // Async function to get a post by its slug
    async getPost(slug) {
        try {
            // Fetch the document with the given slug
            return await this.databases.getDocument(
                conf.appwriteDatabase, // Database ID
                conf.appwriteCollectionId, // Collection ID
                slug // Document ID (slug)
            );
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error); // Log error
        }
    }

    // Async function to get all posts with a specific query (e.g., active status)
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            // Fetch all documents matching the query
            return await this.databases.listDocuments(
                conf.appwriteDatabase, // Database ID
                conf.appwriteCollectionId, // Collection ID
                queries // Query to filter documents
            );
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error); // Log error
            return false; // Return false if an error occurs
        }
    }

    // Async function to upload a file to the storage bucket
    async uploadFile(file) {
        try {
            // Upload the file to the specified bucket
            return await this.bucket.createFile(
                conf.appwiteBuckeid, // Bucket ID
                ID.unique(), // Unique file ID
                file // File to upload
            );
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error); // Log error
        }
    }

    // Async function to delete a file from the storage bucket
    async deleteFile(fileId) {
        try {
            // Delete the file with the given file ID
            return await this.bucket.deleteFile(
                conf.appwiteBuckeid, // Bucket ID
                fileId // File ID
            );
            return true; // Return true if successful
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error); // Log error
            return false; // Return false if an error occurs
        }
    }

    // Function to get a preview URL for a file
    filePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwiteBuckeid, // Bucket ID
            fileId // File ID
        );
    }
}

// Export an instance of the databaseServices class for use throughout the application
export const dataServices = new databaseServices();