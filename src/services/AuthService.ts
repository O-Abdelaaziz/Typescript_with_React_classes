import { User } from "../models/Model";

export class AuthService{
    public async login(username:string,password:string):Promise<User|undefined>{
        if(username==='abdelaaziz' && password==='123456'){
            return{
                userName:username,
                email:'abdelaaziz@gmail.com'
            }
        }else{
            return undefined;
        }
    }
}