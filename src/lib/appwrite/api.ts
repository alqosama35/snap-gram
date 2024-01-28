import { INewUser } from "@/types";
import { ID } from "appwrite";
import { account } from "./config";

export async function creatUserAccount(user: INewUser) {
    try{
        const newAccount = account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name
        )
    }
    catch(error){
        console.log(error);
    }
    
}