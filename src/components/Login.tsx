import React, { SyntheticEvent } from "react";
import { AuthService } from "../services/AuthService";

interface LoginProps{
    authService:AuthService
}

interface LoginState{
    userName:string,
    password:string,
    loginAttenpted:boolean,
    loginSuccessfull:boolean
}

interface customEvent{
    target: HTMLInputElement
}
export class Login extends React.Component<LoginProps,LoginState>{

    state:LoginState={
        userName:'',
        password:'',
        loginAttenpted:false,
        loginSuccessfull:false
    }

    private setUserName(event:customEvent){
        this.setState({userName:event.target.value});
    }

    private setPassword(event:customEvent){
        this.setState({password:event.target.value});
    }

    private async handelSubmit(event:SyntheticEvent){
        event.preventDefault();
        const result=await this.props.authService.login(
            this.state.userName,
            this.state.password
        )

        if(result){
            console.log(result);
        }else{
            console.log('no result found');
            
        }
    }

    render(){
        return(
            <div> 
                <h2>Please Login !!</h2>
                <form onSubmit={e=> this.handelSubmit(e)}>
                    <input onChange={e=>this.setUserName(e)} type="text" value={this.state.userName} name="username" id="username" /><br />
                    <input onChange={e=>this.setPassword(e)} type="password" value={this.state.password} name="password" id="password" /><br />
                    <button type="submit">login</button>
                </form>
            </div>
        );
    }
}