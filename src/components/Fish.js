import React, {Component} from 'react';
import './List.css';
import { Card, Image, Badge } from "react-bootstrap";
import bells from './coin.png'

class Fish extends Component {

    render() {
        let fishSize = this.props.fish.shadow;
        return (
            <Card>
            <Card.Header className="cardheader">{this.props.fish.name["name-USen"]}</Card.Header>
            <Card.Body>
                <Image width="200px" alt={this.props.fish["file-name"]} src={this.props.fish["image_uri"]}/>
                <p><img width="15px" alt="price" src={bells}/>{this.props.fish.price}</p>
                <Badge className="badge" variant="primary" id={this.props.fish.availability.rarity}>{this.props.fish.availability.rarity}</Badge>
                <Badge className="badge" variant="primary" id={this.props.fish.availability.location}>{this.props.fish.availability.location}</Badge>
                <Badge className="badge" variant="primary" id={fishSize.substring(0, fishSize.length - 4)}>{fishSize.substring(0, fishSize.length - 3)}</Badge>
             </Card.Body>
            </Card>
        )
    }
}

export default Fish;

//<Card.Text className="catchphrase">{this.props.fish["catch-phrase"]}</Card.Text>
