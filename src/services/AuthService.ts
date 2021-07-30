import { UserAttribute } from './../models/Model';
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

    public async getUserAttributes(user: User):Promise<UserAttribute[]>{
        const result: UserAttribute[] = [];
        result.push({
            Name: 'description',
            Value: 'Best user ever!'
        });
        result.push({
            Name: 'job',
            Value: 'Engineer'
        });
        result.push({
            Name: 'age',
            Value: '25'
        });
        result.push({
            Name: 'experience',
            Value: '3 years'
        });
        return result
    }
}