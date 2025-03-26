import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthServices {
    client = new Client
    constructor() {
        this.client
        
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client);

    }
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
            }
            else {
                return userAccount
            }

        } catch (error) {
            throw error;
        }
    }
    async createlogin({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
    }

    async createlogout() {
        try {
            this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authServices = new AuthServices();

export default authServices;