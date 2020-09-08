import React, { Component } from 'react';
import { Container, Navbar, DropdownButton, Dropdown, Button, ListGroup } from "react-bootstrap";
import './List.css';
import FilterMenu from './FilterMenu';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMenu: 'none',
            key: 1,
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
    handleTypeChange = (eventKey) => {
        this.props.onTypeChange(eventKey);
    }
    handlePrice = (eventKey) => {this.props.onPriceChange(eventKey);}

    handleResetSearch = () => {
        this.props.onResetSearch();
        this.setState({
            key: this.state.key + 1
        });
    }

    render() {
        return (
            <Container fluid>
            <Navbar bg="light" fixed="top" expand="lg">
            <div className="title">
                <h5>Blather's Critterpedia</h5>
            </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                <DropdownButton title="Critter Type">
                    <Dropdown.Item
                    eventKey="bugs" onSelect={this.handleTypeChange}>
                    <span className="emoji" role="img" aria-label="ant">
                    {String.fromCodePoint('0x1F41C')}
                    </span>
                    Bugs
                    </Dropdown.Item>
                    <Dropdown.Item
                    eventKey="fish" onSelect={this.handleTypeChange}>
                    <span className="emoji" role="img" aria-label="ant">
                    {String.fromCodePoint('0x1F41F')}
                    </span>
                    Fish
                    </Dropdown.Item>
                </DropdownButton>

                <DropdownButton title="Hemisphere">
                    <Dropdown.Item
                    eventKey="Northern" onSelect={this.handleHemisphere}>
                    Northern
                    </Dropdown.Item>
                    <Dropdown.Item
                    eventKey="Southern" onSelect={this.handleHemisphere}>
                    Southern
                    </Dropdown.Item>
                </DropdownButton>

                <Button id={this.state.selectedMenu === "rarity" ? 'active-menu' : null} value="rarity"
                onClick={this.onMenuChange}>Rarity</Button>

                <Button id={this.state.selectedMenu === "month" ? 'active-menu' : null}  value="month"
                onClick={this.onMenuChange}>Month</Button>

                <Button id="reset-button" onClick={this.handleResetSearch}>Clear</Button>

                <DropdownButton title="Sort by price">
                    <Dropdown.Item
                    eventKey="Ascending" onSelect={this.handlePrice}>
                    Lowest to highest
                    </Dropdown.Item>
                    <Dropdown.Item
                    eventKey="Descending" onSelect={this.handlePrice}>
                    Highest to lowest
                    </Dropdown.Item>
                </DropdownButton>

                <input type="text" placeholder="Search"
                value={this.props.filterText} onChange={this.handleFilterText}/>

                <div className=" filter-bar top-button-bar">

                <div
                className={this.state.selectedMenu === 'none' ? 'row filter-menu-hidden' : 'filter-bar'}>
                    <FilterMenu
                        selectedMenu={this.state.selectedMenu}
                        onRarityChange={this.handleRarity}
                        onMonthChange={this.handleMonth}
                        key={this.state.key}
                    />
                </div>
    </div>
    </Navbar.Collapse>
            </Navbar>
            </Container>
        );
    }
}

export default SearchBar;
