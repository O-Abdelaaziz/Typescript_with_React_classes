import React, { SyntheticEvent } from "react";
import { User } from "../models/Model";
import { AuthService } from "../services/AuthService";
import  history from "../utils/hostory";
interface LoginProps{
    authService:AuthService,
    setUser:(user:User)=>void
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
        this.setState({loginAttenpted:true});
        const result=await this.props.authService.login(
            this.state.userName,
            this.state.password
        )

        if(result){
            this.setState({loginSuccessfull:true});
            this.props.setUser(result);
            history.push('/profile');
            console.log(result);
        }else{
            console.log('no result found');
            
        }
    }

    render(){

        let loginMessage:any;
        if(this.state.loginAttenpted){
            if(this.state.loginSuccessfull){
                loginMessage=<label>login success</label>
            }else{    
                loginMessage=<label>login field</label>
            }
        }
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