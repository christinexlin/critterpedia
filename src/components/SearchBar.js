import React, { Component } from 'react';
import { DropdownButton, Dropdown, Button, ButtonGroup, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import './List.css';
import FilterMenu from './FilterMenu';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMenu: 'none'
        }
    }

    onMenuChange = (event) => {
        this.state.selectedMenu === event.target.value ?
        this.setState({selectedMenu: 'none'}) :
        this.setState({selectedMenu: event.target.value});
    }

    handleFilterText = (event) => {
        this.props.onFilterTextChange(event.target.value.trim().toLowerCase());
    }
    handleRarity = (value) => {
        this.props.onRarityChange(value);
    }
    handleHemisphere = () => {
        this.props.onHemisphereChange();
    }
    handleMonth = (value) => {
        this.props.onMonthChange(value);
    }
    handleTypeChange = () => {
        this.props.onTypeChange();
    }

    render() {
        return (
            <div>


            <div className="row filter-bar top-button-bar">
            <Button onClick={this.handleTypeChange}>
            <span className="emoji" role="img" aria-label="fish">
            {this.props.type === 'fish' ? String.fromCodePoint('0x1F41F') : String.fromCodePoint('0x1F41C')}
            </span>
            {this.props.type.toUpperCase()}
            </Button>

            <Button onClick={this.handleHemisphere} value={this.props.hemisphere}>
            <span className="emoji" role="img" aria-label="ant">
            {String.fromCodePoint('0x1F4CD')}
            </span>
            {this.props.hemisphere.toUpperCase()} HEMISPHERE
            </Button>

            <input type="text" placeholder="SEARCH" value={this.props.filterText} onChange={this.handleFilterText}/>

            </div>

            <div className="row filter-bar">
            <ButtonGroup>
                <Button id={this.state.selectedMenu === "rarity" ? 'active-menu' : null} value="rarity"
                onClick={this.onMenuChange}>RARITY</Button>
                <Button id={this.state.selectedMenu === "month" ? 'active-menu' : null}  value="month"
                onClick={this.onMenuChange}>MONTH</Button>
            </ButtonGroup>
            </div>

            <div
            className={this.state.selectedMenu === 'none' ? 'row filter-menu-hidden' : 'row filter-bar'}>

            <FilterMenu
            selectedMenu={this.state.selectedMenu}
            onRarityChange={this.handleRarity}
            onMonthChange={this.handleMonth}
            />


            </div>
            </div>
        );
    }
}

export default SearchBar;
