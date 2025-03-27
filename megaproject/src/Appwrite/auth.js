import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

// AuthServices class handles all authentication-related operations using Appwrite
export class AuthServices {
    client = new Client(); // Initialize the Appwrite client

    constructor() {
        // Configure the Appwrite client with endpoint and project ID
        this.client
            .setEndpoint(conf.appwriteUrl) // Set the Appwrite API endpoint
            .setProject(conf.appwriteProjectId); // Set the Appwrite project ID

        this.account = new Account(this.client); // Initialize the Account service
    }

    // Method to create a new user account
    async createAccount({ email, password, name }) {
        try {
            // Create a new user account with a unique ID, email, password, and name
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // Perform additional actions if account creation is successful
                // call another method
            } else {
                return userAccount; // Return the created account object
            }
        } catch (error) {
            throw error; // Throw an error if account creation fails
        }
    }

    // Method to log in a user with email and password
    async createlogin({ email, password }) {
        try {
            // Create a session for the user using email and password
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error; // Throw an error if login fails
        }
    }

    // Method to get the currently logged-in user's details
    async getCurrentUser() {
        try {
            // Fetch the current user's account details
            return await this.account.get();
        } catch (error) {
            throw error; // Throw an error if fetching user details fails
        }
        return null; // Return null if no user is logged in
    }

    // Method to log out the current user
    async createlogout() {
        try {
            // Delete all sessions for the current user
            this.account.deleteSessions();
        } catch (error) {
            throw error; // Throw an error if logout fails
        }
    }
}

// Create an instance of AuthServices for use throughout the application
const authServices = new AuthServices();

export default authServices; // Export the instance for use in other files