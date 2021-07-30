import React from "react";
import { User } from "../models/Model";
import {Link} from "react-router-dom";

export class NavBar extends React.Component<{user:User|undefined},{}>{
    render(){

        let loginLogOut:any;
        if(this.props.user){
            loginLogOut=<Link to='/logout'>{this.props.user.userName}</Link>
        }else{
            loginLogOut=<Link to='/login'>Login</Link>
        }

        return(
            <div className="navbar">
                Welcome to the Home page
                <Link to='/'>Home</Link>
                <Link to='/profile'>Profile</Link>
                {loginLogOut}
            </div>
        );
    }
}
