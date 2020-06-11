import React, { Component } from 'react';
import { DropdownButton, Dropdown, Button, ButtonGroup } from "react-bootstrap";
import './List.css';
import { FaFish, FaBug, FaRegSadCry, FaRegSmile } from 'react-icons/fa';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleFilterText = this.handleFilterText.bind(this);
        this.handleRarity = this.handleRarity.bind(this);
        this.handleLocation = this.handleLocation.bind(this);
        this.handleSize = this.handleSize.bind(this);
        this.handleResetSearch = this.handleResetSearch.bind(this);
    }

    handleFilterText(event) {
        this.props.onFilterTextChange(event.target.value.trim().toLowerCase());
    }

    handleRarity = (eventKey) => {
        this.props.onRarityChange(eventKey);
    }

    handleLocation(eventKey) {
        this.props.onLocationChange(eventKey);
    }

    handleSize(eventKey) {
        this.props.onSizeChange(eventKey);
    }

    handleResetSearch() {
        this.props.onResetSearch();
    }

    handleHemisphere = (eventKey) => {this.props.onHemisphereChange(eventKey);}

    handlePrice = (eventKey) => {this.props.onPriceChange(eventKey);}

    handleMonth = (eventKey) => {
        if (this.props.hemisphere === 'All') {
            alert("Select a hemisphere first!");
        }
        this.props.onMonthChange(eventKey);
    }

    render() {

        return (
            <div>

            <div className="row filter-bar" style={{width: '65%', margin: 'auto'}}>

            <div className="col-lg-6">
                    <ButtonGroup>
                    <div className="face">{this.props.type === 'fish' ? <FaRegSmile /> : <FaRegSadCry />}</div>
                    <h6 id="type">type:</h6>
                    <Button
                    style={{borderRadius: '0px'}}
                    active={this.props.type === 'fish' ? true : false}
                    onClick={this.props.onFishType}><FaFish className='icon'/> fish
                    </Button>
                    <Button
                    active={this.props.type === 'bugs' ? true : false}
                    onClick={this.props.onBugType}><FaBug size='0.9em' className='icon'/> bugs
                    </Button>
                    </ButtonGroup>
            </div>

                    <div className="col-lg-6">
                    <input type="text" placeholder="search" value={this.props.filterText} onChange={this.handleFilterText}/>
                    </div>

            </div>


            <div className="row filter-bar">
            <DropdownButton title="rarity">
            <Dropdown.Item eventKey="All" onSelect={this.handleRarity}>all</Dropdown.Item>
              <Dropdown.Item eventKey="Common" onSelect={this.handleRarity}>common</Dropdown.Item>
              <Dropdown.Item eventKey="Uncommon" onSelect={this.handleRarity}>uncommon</Dropdown.Item>
              <Dropdown.Item eventKey="Rare" onSelect={this.handleRarity}>rare</Dropdown.Item>
              <Dropdown.Item eventKey="Ultra-rare" onSelect={this.handleRarity}>ultra-rare</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title="hemisphere">
                <Dropdown.Item eventKey="Northern" onSelect={this.handleHemisphere}>northern</Dropdown.Item>
                <Dropdown.Item eventKey="Southern" onSelect={this.handleHemisphere}>southern</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title="month">
                <Dropdown.Item eventKey="1" onSelect={this.handleMonth}>january</Dropdown.Item>
                <Dropdown.Item eventKey="2" onSelect={this.handleMonth}>february</Dropdown.Item>
                <Dropdown.Item eventKey="3" onSelect={this.handleMonth}>march</Dropdown.Item>
                <Dropdown.Item eventKey="4" onSelect={this.handleMonth}>april</Dropdown.Item>
                <Dropdown.Item eventKey="5" onSelect={this.handleMonth}>may</Dropdown.Item>
                <Dropdown.Item eventKey="6" onSelect={this.handleMonth}>june</Dropdown.Item>
                <Dropdown.Item eventKey="7" onSelect={this.handleMonth}>july</Dropdown.Item>
                <Dropdown.Item eventKey="8" onSelect={this.handleMonth}>august</Dropdown.Item>
                <Dropdown.Item eventKey="9" onSelect={this.handleMonth}>september</Dropdown.Item>
                <Dropdown.Item eventKey="10" onSelect={this.handleMonth}>october</Dropdown.Item>
                <Dropdown.Item eventKey="11" onSelect={this.handleMonth}>november</Dropdown.Item>
                <Dropdown.Item eventKey="12" onSelect={this.handleMonth}>december</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title="sort by price">
                <Dropdown.Item eventKey="Ascending" onSelect={this.handlePrice}>lowest to highest</Dropdown.Item>
                <Dropdown.Item eventKey="Descending" onSelect={this.handlePrice}>highest to lowest</Dropdown.Item>
            </DropdownButton>

            <Button variant="outline-primary" id="resetbutton" onClick={this.handleResetSearch}>reset search</Button>
            </div>

    </div>
        );
    }
}

export default SearchBar;
