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
            <div className="row">

            <div className={this.props.selectedMenu === 'rarity' ? 'selectedMenu' : 'hidden-menu'}>
            <ToggleButtonGroup type="checkbox" defaultValue={[]} onChange={this.onRarityChange}>
                <ToggleButton value="Common">COMMON</ToggleButton>
                <ToggleButton value="Uncommon">UNCOMMON</ToggleButton>
                <ToggleButton value="Rare">RARE</ToggleButton>
                <ToggleButton value="Ultra-rare">ULTRA-RARE</ToggleButton>
            </ToggleButtonGroup>
            </div>

            <div className={this.props.selectedMenu === 'month' ? 'selectedMenu' : 'hidden-menu'}>
            <ToggleButtonGroup type="checkbox" defaultValue={[]} onChange={this.onMonthChange}>
                <ToggleButton value={1}>JAN</ToggleButton>
                <ToggleButton value={2}>FEB</ToggleButton>
                <ToggleButton value={3}>MAR</ToggleButton>
                <ToggleButton value={4}>APR</ToggleButton>
                <ToggleButton value={5}>MAY</ToggleButton>
                <ToggleButton value={6}>JUNE</ToggleButton>
                <ToggleButton value={7}>JULY</ToggleButton>
                <ToggleButton value={8}>AUG</ToggleButton>
                <ToggleButton value={9}>SEP</ToggleButton>
                <ToggleButton value={10}>OCT</ToggleButton>
                <ToggleButton value={11}>NOV</ToggleButton>
                <ToggleButton value={12}>DEC</ToggleButton>
            </ToggleButtonGroup>
            </div>

            </div>
        );
    }
}

export default FilterMenu;
