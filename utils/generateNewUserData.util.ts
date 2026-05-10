export function generateNewUserData(){
    
    const data = new Date();
    const userName = data.getTime().toString();
    const userEmail = data.getTime().toString();

    return {
        userName: userName,
        userEmail: userEmail + '@test.com'
    }
}