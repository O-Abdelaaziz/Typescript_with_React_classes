import React from "react";
import { AuthService } from "../services/AuthService";

interface LoginProps{
    authService:AuthService
}

interface LoginState{
    username:string,
    password:string,
    loginAttenpted:boolean,
    loginSuccessfull:boolean
}

export class Login extends React.Component<LoginProps,LoginState>{

    state:LoginState={
        username:'',
        password:'',
        loginAttenpted:false,
        loginSuccessfull:false
    }
    render(){
        return(
            <div> 
                <h2>Please Login !!</h2>
                <form action="">
                    <input type="text" value={this.state.username} name="username" id="username" /><br />
                    <input type="password" value={this.state.password} name="password" id="password" /><br />
                    <button type="submit">login</button>
                </form>
            </div>
        );
    }
}