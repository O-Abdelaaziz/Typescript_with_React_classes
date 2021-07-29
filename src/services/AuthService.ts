import { User } from "../models/Model";

export class AuthService{
    public async login(userName:string,password:string):Promise<User|undefined>{
        if(userName==='abdelaaziz' && password==='123456'){
            return{
                userName:userName,
                email:'abdelaaziz@gmail.com'
            }
        }else{
            return undefined;
        }
    }
}