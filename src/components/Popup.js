import React, {Component} from 'react';
import './List.css';
import { Modal, Image } from "react-bootstrap";
import { MdLocationOn, MdStar } from 'react-icons/md';
import { FaFish, FaRegSadCry, FaRegSmile } from 'react-icons/fa';

class Popup extends Component {

    rangeToMonth = (range) => {
        if (range.includes('&')) {
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
            let location = this.props.critter.availability.location;
            if (location.includes('when')) {
                location = location.split('(');
                location = location[0];
            }

            critter = (
                <Modal size="lg" centered="true" show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Body>
                <div className="container">
                <div className="row">
                    <div className="col-lg-5 modal-img">
                        <Image alt={this.props.critter["file-name"]} src={this.props.critter["image_uri"]} className="popup-image"/>
                    </div>

                    <div className="col-lg-7">
                    <div className="row header">
                        <h4>{this.props.critter.name["name-USen"].toLowerCase()}</h4>
                    </div>

                    <div className="row header">
                        <p className="catchphrase">{this.props.critter["catch-phrase"]}</p>
                    </div>

                        <div className="row popup-description" id="popup-information">
                        <div className="row popup-info-subrow">
                        <h6 id="popup-header">information</h6>
                        </div>
                        <div className="row popup-info-subrow" id="firstrow">

                            <MdLocationOn/><p className="subtitle">{location}</p>
                            <MdStar/><p className="subtitle">{this.props.critter.availability.rarity}</p>
                            <FaFish/><p className="subtitle">{fishSize}</p>
                            </div>

                        <div className="row popup-info-subrow">
                            <h6>price: </h6>
                            <p className="subtitle">{this.props.critter.price} (Nook), {this.props.critter["price-cj"]} (CJ)</p>
                        </div>
                        <div className="row popup-info-subrow">
                            <h6>northern: </h6><p className="subtitle">{northernMonths}</p>
                        </div>
                        <div className="row popup-info-subrow">
                            <h6>southern: </h6><p className="subtitle">{southernMonths}</p>
                        </div>

                        <div className="row popup-info-subrow">
                        <h6>time: </h6><p className="subtitle"> {time}</p>
                        </div>
                        </div>

                        <div className="row popup-description" id="notes">
                            <h6>blather's notes</h6><FaRegSmile/>
                            <p>{this.props.critter["museum-phrase"]}</p>
                        </div>
                    </div>
                </div>
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
                <div className="row">
                    <div className="col-lg-5 modal-img">
                        <Image alt={this.props.critter["file-name"]} src={this.props.critter["image_uri"]} className="popup-image"/>
                    </div>

                    <div className="col-lg-7">
                    <div className="row header">
                        <h4>{this.props.critter.name["name-USen"].toLowerCase()}</h4>
                    </div>

                    <div className="row header">
                        <p className="catchphrase">{this.props.critter["catch-phrase"]}</p>
                    </div>

                        <div className="row popup-description" id="popup-information">
                        <div className="row popup-info-subrow">
                        <h6 id="popup-header">information</h6>
                        </div>
                        <div className="row popup-info-subrow" id="firstrow">

                            <MdLocationOn/><p className="subtitle">{this.props.critter.availability.location}</p>
                            <MdStar/><p className="subtitle">{this.props.critter.availability.rarity}</p>
                            </div>

                        <div className="row popup-info-subrow">
                            <h6>price: </h6>
                            <p className="subtitle">{this.props.critter.price} (Nook), {this.props.critter["price-flick"]} (Flick)</p>
                        </div>
                        <div className="row popup-info-subrow">
                            <h6>northern: </h6><p className="subtitle">{northernMonths}</p>
                        </div>
                        <div className="row popup-info-subrow">
                            <h6>southern: </h6><p className="subtitle">{southernMonths}</p>
                        </div>

                        <div className="row popup-info-subrow">
                        <h6>time: </h6><p className="subtitle"> {time}</p>
                        </div>
                        </div>

                        <div className="row popup-description" id="notes">
                            <h6>blather's notes</h6><FaRegSadCry/>
                            <p>{this.props.critter["museum-phrase"]}</p>
                        </div>
                    </div>
                </div>
                </div>
                </Modal.Body>
            </Modal>
            );
        }

        return critter;
    }
}

export default Popup;
