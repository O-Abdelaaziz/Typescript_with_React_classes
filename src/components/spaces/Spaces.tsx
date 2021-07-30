import { Component } from "react";
import { Space } from "../../models/Model";
import { DataService } from "../../services/DataService ";
import { SpaceComponent } from "./SpaceComponent";

interface  SpacesProps{
    dataService: DataService
}

interface SpacesState{
    spaces: Space[]
}

export class Spaces extends Component<SpacesProps, SpacesState>{
    constructor(props: SpacesProps) {
        super(props)
        this.state = {
            spaces: []
        }
        this.reserveSpace = this.reserveSpace.bind(this);
    }

    async componentDidMount() {
        const spaces = await this.props.dataService.getSpaces();
        this.setState({
            spaces: spaces
        });
    }

    private async reserveSpace(spaceId: string) { }

    private renderSpaces() {
        const rows: any[] = []
        for (const space of this.state.spaces) {
            rows.push(
                <SpaceComponent
                    location={space.location}
                    name={space.name}
                    id={space.spaceId}
                    reserveSpace={this.reserveSpace}
                />
            )
        }
    }

    render() {
        return (
            <div>
                <h2>Welcome to the Spaces page!</h2>
                {this.renderSpaces()}
            </div>
        )
    }
}
