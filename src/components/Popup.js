import React, {Component} from 'react';
import './List.css';
import { Modal, Image, Button } from "react-bootstrap";

class Popup extends Component {

    rangeToMonth = (range) => {
        if (range.includes('-') === false) {
            return this.numToMonth(range);
        } else if (range.includes('&')) {
            range = range.split('&');
            let rangeOne = range[0].split('-');
            let rangeTwo = range[1].split('-');
            return this.numToMonth(rangeOne[0]) + '-' + this.numToMonth(rangeOne[1]) + ', ' + this.numToMonth(rangeTwo[0]) + '-' + this.numToMonth(rangeTwo[1]);
        } else {
            range = range.split('-');
            return this.numToMonth(range[0]) + '-' + this.numToMonth(range[1]);
        }
    }

    numToMonth = (number) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return months[number - 1];
    }

    render() {
        let critter;

        let northernMonths;
        let southernMonths;
        if (this.props.critter.availability.isAllYear === false) {
            northernMonths = this.rangeToMonth(this.props.critter.availability["month-northern"]);
            southernMonths = this.rangeToMonth(this.props.critter.availability["month-southern"]);
        } else {
            northernMonths = 'All year';
            southernMonths = 'All year';
        }

        let time;
        if (this.props.critter.availability.isAllDay === false) {
            time = this.props.critter.availability.time;
        } else {
            time = 'All day';
        }

        let fishSize;
        if (this.props.type === 'fish') {
            fishSize = this.props.critter.shadow;
            fishSize = fishSize.substring(0, fishSize.length - 3);

            critter = (
                <Modal size="lg" centered="true" show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Body>
                <div className="container">
                <div className="row critter-popup">
                    <div className="col-lg-5">

                        <Image alt={this.props.critter["file-name"]} src={this.props.critter["image_uri"]} className="popup-image"/>
                    </div>

                    <div className="col-lg-7">
                    <div className="header">
                        <h4>{this.props.critter.name["name-USen"].toUpperCase()}</h4>
                        <p className="subtitle">{this.props.critter["catch-phrase"]}</p>
                    </div>

                        <div className="row description">
                            <div className="col-xs-4">
                                <p id="label">LOCATION</p>
                                <p id="label">RARITY</p>
                                <p id="label">SIZE</p>
                                <p id="label">PRICE</p>
                                <p id="label">NORTHERN</p>
                                <p id="label">SOUTHERN</p>
                                <p id="label">TIME</p>
                            </div>
                            <div className="col-xs-8">
                                <p>{this.props.critter.availability.location}</p>
                                <p>{this.props.critter.availability.rarity}</p>
                                <p>{fishSize}</p>
                                <p>{this.props.critter.price} (Nook), {this.props.critter["price-cj"]} (CJ)</p>
                                <p>{northernMonths}</p>
                                <p>{southernMonths}</p>
                                <p>{time}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row notes">
                        <p>{this.props.critter["museum-phrase"]}</p>
                    </div>
                </div>
                </div>
                <div className="row">
                <Button id="close-button" onClick={this.props.handleClose}>CLOSE</Button>
                </div>
                </Modal.Body>
            </Modal>
            );
        }
        else {
            critter = (
                <Modal size="lg" centered="true" show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Body>
                <div className="container">
                <div className="row critter-popup">
                    <div className="col-lg-5">

                        <Image alt={this.props.critter["file-name"]} src={this.props.critter["image_uri"]} className="popup-image"/>
                    </div>

                    <div className="col-lg-7">
                    <div className="header">
                        <h4>{this.props.critter.name["name-USen"].toUpperCase()}</h4>
                        <p className="subtitle">{this.props.critter["catch-phrase"]}</p>
                    </div>

                        <div className="row description">
                            <div className="col-xs-4">
                                <p id="label">LOCATION</p>
                                <p id="label">RARITY</p>
                                <p id="label">PRICE</p>
                                <p id="label">NORTHERN</p>
                                <p id="label">SOUTHERN</p>
                                <p id="label">TIME</p>
                            </div>
                            <div className="col-xs-8">
                                <p>{this.props.critter.availability.location}</p>
                                <p>{this.props.critter.availability.rarity}</p>
                                <p>{this.props.critter.price} (Nook), {this.props.critter["price-flick"]} (Flick)</p>
                                <p>{northernMonths}</p>
                                <p>{southernMonths}</p>
                                <p>{time}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row notes">
                        <p>{this.props.critter["museum-phrase"]}</p>
                    </div>
                </div>
                </div>
                <div className="row">
                <Button id="close-button" onClick={this.props.handleClose}>CLOSE</Button>
                </div>
                </Modal.Body>
            </Modal>
            );
        }

        return critter;
    }
}

export default Popup;
