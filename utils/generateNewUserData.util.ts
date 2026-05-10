import { User } from "../types/user";

export const usersArr: User[] = []

export function generateNewUserData(){
    
    const data = new Date();
    const userName = data.getTime().toString();
    const userEmail = data.getTime().toString();

    usersArr.unshift({
        userName: userName,
        userEmail: userEmail + '@test.com',
        userPassword: userName
    })

    return usersArr
}