import React from "react";
import { Link } from "react-router-dom";
import { User, UserAttribyte } from "../models/Model";
import { AuthService } from "../services/AuthService";

interface ProfileProps{
    user:User|undefined,
    authService:AuthService
}
interface ProfileState{
    userAttribute:UserAttribyte[]
}

export class Profile extends React.Component<ProfileProps,ProfileState>{
    render(){
        let profileSpace;
        if(this.props.user){
           profileSpace= <h3>Hello {this.props.user.userName}</h3>
        }else{
            profileSpace=<div> Please <Link to='login'>Login</Link></div>
        }
        return(
            <div>
                Welcome to the profile page
                {profileSpace}
            </div>
        );
    }
}
