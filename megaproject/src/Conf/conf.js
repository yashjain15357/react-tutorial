// best practice to store/use environment variables in a separate file
const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwiteBuckeid: String(import.meta.env.VITE_BUCKET_ID),
    appwriteDatabase: String(import.meta.env.VITE_APPWRITE_DATABASE_ID)
}

export default conf