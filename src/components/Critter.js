import React, {Component} from 'react';
import './List.css';
import { Button, Card, Image } from "react-bootstrap";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import Popup from './Popup';

class Critter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: false,
            saved: false,
        }
    }

    onOpenPopup = () => {this.setState({popup: true});}
    onClosePopup = () => {this.setState({popup: false});}

    handleSave = () => {
        let name = this.props.critter.name["name-USen"];
        if (this.state.saved === false) {
            this.setState({saved: !this.state.saved});
            this.props.handleAdd(name);
        }
    }

    render() {
        return (
            <div>
            <div className='critter-card'>
            <Card tag="a" onClick={this.onOpenPopup}
            className={this.props.type === 'fish' ? null : 'card-bug'}
            >
                <Image className={this.props.type === 'fish' ? 'fish-image' : 'bug-image'}
                width={this.props.type === 'fish' ? '200px' : '170px'}
                alt={this.props.critter["file-name"]}
                src={this.props.critter["image_uri"]}/>
                <div className="critter-name">
                <h6>{this.props.critter.name["name-USen"]}</h6>
                </div>
            </Card>
            <Button
            variant='light' disabled={this.state.saved ? true : false} onClick={this.handleSave}>
            {this.state.saved ? <h6><MdFavorite/> SAVED</h6> :
                <h6><MdFavoriteBorder/> SAVE</h6>}
            </Button>
            </div>

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
