import React from "react";
import { Link } from "react-router-dom";
import { User, UserAttribute } from "../models/Model";
import { AuthService } from "../services/AuthService";

interface ProfileProps{
    user:User|undefined,
    authService:AuthService
}
interface ProfileState{
    userAttributes:UserAttribute[]
}

export class Profile extends React.Component<ProfileProps,ProfileState>{
    state: ProfileState = {
        userAttributes: []
    }
    
    async componentDidMount(){
        if (this.props.user) {
            const userAtrs = await this.props.authService.getUserAttributes(this.props.user);
            this.setState({
                userAttributes: userAtrs
            })
        }
    }
    
    private renderUserAttributes(){
        const rows = []
        for (const userAttribute of this.state.userAttributes) {
            rows.push(<tr key={userAttribute.Name}>
                <td>{userAttribute.Name}</td>
                <td>{userAttribute.Value}</td>
            </tr>)

        }
        return <table>
            <tbody>
                {rows}
            </tbody>
        </table>
    }

    
    render(){
        let profileSpace;
        if(this.props.user){
           profileSpace= <div>
               <h3>Hello {this.props.user.userName}</h3>
               here are your attributes:
               {this.renderUserAttributes()}
               </div>
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
