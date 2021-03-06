import { Component } from "react";
import genericImage from '../../assets/generic-image.jpg';
import './SpaceComponent.css';

interface SpaceComponentProps{
    id:string,
    name:string,
    location:string,
    photoUrl?:string,
    reserveSpace:(id:string)=>void
}

export class SpaceComponent extends Component<SpaceComponentProps>{

    private renderImage(){
        if (this.props.photoUrl) {
            return <img src={this.props.photoUrl} alt=''/>
        } else {
            return <img src={genericImage} alt=''/>
        }
    }

    render(){
        return(
            <div className='spaceComponent'>
                {this.renderImage()}<br />
                <label className='spaceId'> {this.props.id} </label><br />
                <label className='name'> {this.props.name} </label><br />
                <label className='location'> {this.props.location} </label><br />
                <button onClick={()=>this.props.reserveSpace(this.props.id)}>Reserve</button>
            </div>
        );
    }

}