import {Account, Avatars, Client, Databases, ID, Query} from "react-native-appwrite";
import {CreateUserPrams, SignInParams} from "@/type";

export const appwriteConfig = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    platform: "com.driouech.foodordering",
    databaseId: "6884c8f80023ed25bf52",
    userCollectionId: '6884c930000deec4016e'
}
export const client = new Client();
client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform)
export const account = new Account(client);
export const databases = new Databases(client)

const avatarts = new Avatars(client);
export const createUser = async ({email, password, name} : CreateUserPrams)=>{
    try {
        const newAccount  = await account.create(ID.unique(), email, password, name)
        if(!newAccount) {
            throw Error;
        }
        await signIn({email, password});
        const avatarUrl = avatarts.getInitialsURL(name)
        return await databases.createDocument(appwriteConfig.databaseId, appwriteConfig.userCollectionId, ID.unique(),{accountId: newAccount.$id, email, name,avatar: avatarUrl})
    }catch (e) {
        throw  new Error(e as string);
    }
}

export const signIn = async ({email, password} : SignInParams)=>{
    try{
        const session = await account.createEmailPasswordSession(email, password)

    }catch (e) {
        throw new Error(e as string)
    }
}

export const getCurrentUser = async () =>{
    try{
        const currentAccount = await account.get()
        if (!currentAccount) throw new Error
        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )
        if(!currentUser) throw new Error
        return currentUser.documents[0];
    }catch (e) {
        throw new Error(e as string)
    }
}