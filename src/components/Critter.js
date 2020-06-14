import React, {Component} from 'react';
import './List.css';
import { Card, Image } from "react-bootstrap";
import Popup from './Popup';

class Critter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: false
        }
    }

    onOpenPopup = () => {this.setState({popup: true});}
    onClosePopup = () => {this.setState({popup: false});}

    render() {
        return (
            <div>
            <Card tag="a" onClick={this.onOpenPopup}
            className={this.props.type === 'fish' ? null : 'card-bug'}
            >
                <Image className={this.props.type === 'fish' ? 'fish-image' : 'bug-image'}
                width={this.props.type === 'fish' ? '200px' : '170px'}
                alt={this.props.critter["file-name"]}
                src={this.props.critter["image_uri"]}/>
                <h6 className="critter-name">{this.props.critter.name["name-USen"].toUpperCase()}</h6>
            </Card>

            {this.state.popup ?
                <div className="popupback">
                    <Popup
                    critter={this.props.critter}
                    show={this.state.popup}
                    handleClose={this.onClosePopup}
                    type={this.props.type}
                    />
                </div> : null}
            </div>
        )
    }
}

export default Critter;
