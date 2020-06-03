import React, { Component } from 'react';
import { DropdownButton, Dropdown, Button, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import './List.css';

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

    handleRarity(eventKey) {
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

    handleRarityGroup = (valueArray) => {this.props.onRarityGroupChange(valueArray);}

    render() {

        return (
            <div>
            <div className="row" id="searchdiv">

<input id="searchbar" type="text" placeholder="Search" value={this.props.filterText} onChange={this.handleFilterText}/>
</div>
            <div className="row" id="buttonbar">
            <DropdownButton title="Rarity" id="dropdown-basic-button">
              <Dropdown.Item eventKey="All" onSelect={this.handleRarity}>All</Dropdown.Item>
              <Dropdown.Item eventKey="Common" onSelect={this.handleRarity}>Common</Dropdown.Item>
              <Dropdown.Item eventKey="Uncommon" onSelect={this.handleRarity}>Uncommon</Dropdown.Item>
              <Dropdown.Item eventKey="Rare" onSelect={this.handleRarity}>Rare</Dropdown.Item>
              <Dropdown.Item eventKey="Ultra-rare" onSelect={this.handleRarity}>Ultra-rare</Dropdown.Item>
            </DropdownButton>
{/*
            <ToggleButtonGroup  type="checkbox" onChange={this.handleRarityGroup}>
            <ToggleButton  className="filterButtons" value="Common">Common</ToggleButton>
            <ToggleButton className="filterButtons" value="Uncommon">Uncommon</ToggleButton>
            </ToggleButtonGroup>
*/}
            <DropdownButton title="Location" id="dropdown-basic-button">
              <Dropdown.Item eventKey="All" onSelect={this.handleLocation}>All</Dropdown.Item>
              <Dropdown.Item eventKey="River" onSelect={this.handleLocation}>River</Dropdown.Item>
              <Dropdown.Item eventKey="Pond" onSelect={this.handleLocation}>Pond</Dropdown.Item>
              <Dropdown.Item eventKey="Sea" onSelect={this.handleLocation}>Sea</Dropdown.Item>
              <Dropdown.Item eventKey="Pier" onSelect={this.handleLocation}>Pier</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title="Size" id="dropdown-basic-button">
            <Dropdown.Item eventKey="All" onSelect={this.handleSize}>All</Dropdown.Item>
              <Dropdown.Item eventKey="Smallest" onSelect={this.handleSize}>Smallest</Dropdown.Item>
              <Dropdown.Item eventKey="Small" onSelect={this.handleSize}>Small</Dropdown.Item>
              <Dropdown.Item eventKey="Medium" onSelect={this.handleSize}>Medium</Dropdown.Item>
              <Dropdown.Item eventKey="Large" onSelect={this.handleSize}>Large</Dropdown.Item>
              <Dropdown.Item eventKey="Largest" onSelect={this.handleSize}>Largest</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title="Hemisphere" id="dropdown-basic-button">
                <Dropdown.Item eventKey="All" onSelect={this.handleHemisphere}>All</Dropdown.Item>
                <Dropdown.Item eventKey="Northern" onSelect={this.handleHemisphere}>Northern</Dropdown.Item>
                <Dropdown.Item eventKey="Southern" onSelect={this.handleHemisphere}>Southern</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title="Sort by price" id="dropdown-basic-button">
                <Dropdown.Item eventKey="Ascending" onSelect={this.handlePrice}>Lowest to highest</Dropdown.Item>
                <Dropdown.Item eventKey="Descending" onSelect={this.handlePrice}>Highest to lowest</Dropdown.Item>
            </DropdownButton>

            <Button variant="outline-primary" id="resetbutton" onClick={this.handleResetSearch}>Reset Search</Button>
</div>
             </div>
        );
    }
}

export default SearchBar;
