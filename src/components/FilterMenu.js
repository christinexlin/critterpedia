import React, { Component } from 'react';
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import './List.css';

class FilterMenu extends Component {
    onRarityChange = (value) => {
        this.props.onRarityChange(value);
    }
    onMonthChange = (value) => {
        this.props.onMonthChange(value);
    }


    render() {
        return (
            <div>
            <div className={this.props.selectedMenu === 'rarity' ? 'selectedMenu' : 'hidden-menu'}>
            <ToggleButtonGroup type="checkbox" defaultValue={[]} onChange={this.onRarityChange}>
                <ToggleButton value="Common">Common</ToggleButton>
                <ToggleButton value="Uncommon">Uncommon</ToggleButton>
                <ToggleButton value="Rare">Rare</ToggleButton>
                <ToggleButton value="Ultra-rare">Ultra-rare</ToggleButton>
            </ToggleButtonGroup>
            </div>

            <div className={this.props.selectedMenu === 'month' ? 'selectedMenu' : 'hidden-menu'}>
            <ToggleButtonGroup type="checkbox" defaultValue={[]} onChange={this.onMonthChange}>
                <ToggleButton value={1}>Jan</ToggleButton>
                <ToggleButton value={2}>Feb</ToggleButton>
                <ToggleButton value={3}>Mar</ToggleButton>
                <ToggleButton value={4}>Apr</ToggleButton>
                <ToggleButton value={5}>May</ToggleButton>
                <ToggleButton value={6}>June</ToggleButton>
                <ToggleButton value={7}>July</ToggleButton>
                <ToggleButton value={8}>Aug</ToggleButton>
                <ToggleButton value={9}>Sep</ToggleButton>
                <ToggleButton value={10}>Oct</ToggleButton>
                <ToggleButton value={11}>Nov</ToggleButton>
                <ToggleButton value={12}>Dec</ToggleButton>
            </ToggleButtonGroup>
            </div>

            </div>
        );
    }
}

export default FilterMenu;
