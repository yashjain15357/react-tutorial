import conf from "../conf/conf.js";
import { Client, Databases, ID, Storage, Query } from "appwrite";
export class databaseServices {
    client = new Client();
    databases;
    bucket;

    // make constructor
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    // make async function to create post
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabase,
                conf.appwriteCollectionId,
                slug,
                // ID.unique(),
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }

            )


        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    // make async function to update post
    async updatepost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabase,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);;
        }
    }

    // make async function to delete post
    async deletepost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabase,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
            return false;
        }
    }

    // get the post by id : slug 
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabase,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }
    // get all the document list the status is active
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabase,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
            return false
        }

        // file upload services
    }
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwiteBuckeid,
                ID.unique(),
                file

            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }
    // delete file services
    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.appwiteBuckeid,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }
    filePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwiteBuckeid,
            fileId
        )
    }
}
export const dataServices = new databaseServices();

// const dataServices= new databaseServices();
// export default dataServices;