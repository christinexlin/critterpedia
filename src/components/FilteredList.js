import React, {Component} from 'react';
import SearchBar from './SearchBar';
import List from './List';
import './List.css';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            rarity: 'All',
            location: 'All',
            size: 'All',
            hemisphere: 'All',
            price: '',
            popup: false,
            month: ''
        };
    }

    handleFilterText = (filterText) => {this.setState({ filterText: filterText} );}

    handleRarity = (rarity) => {this.setState({rarity: rarity});}

    handleLocation = (location) => {this.setState({ location: location });}
    handleSize = (size) => {this.setState({ size: size });}
    handleHemisphere = (hemisphere) => {this.setState({ hemisphere: hemisphere});}
    handlePrice = (price) => {this.setState({ price: price });}

    handleResetSearch = () => {
        this.setState({
            filterText: '',
            rarity: 'All',
            location: 'All',
            size: 'All',
            hemisphere: 'All',
            price: '',
            popup: false,
            month: ''
        });
    }

    handleMonth = (month) => {
        this.setState({month: month});
    }

    render() {
        return (
        <div>
            <SearchBar
                filterText={this.state.filterText}
                onFilterTextChange={this.handleFilterText}
                rarity={this.state.rarity}
                onRarityChange={this.handleRarity}
                onRarityGroupChange={this.handleRarityGroup}
                location={this.state.location}
                onLocationChange={this.handleLocation}
                size={this.state.size}
                onSizeChange={this.handleSize}
                onResetSearch={this.handleResetSearch}
                hemisphere={this.state.hemisphere}
                onHemisphereChange={this.handleHemisphere}
                onPriceChange={this.handlePrice}
                onFishType={this.props.handleFishType}
                onBugType={this.props.handleBugType}
                type={this.props.type}
                onMonthChange={this.handleMonth}
                month={this.state.month}
            />
            <List
                items={this.props.items}
                filterText={this.state.filterText}
                rarity={this.state.rarity}
                rarityArray={this.state.rarityArray}
                location={this.state.location}
                size={this.state.size}
                hemisphere={this.state.hemisphere}
                price={this.state.price}
                openPopup={this.onOpenPopup}
                type={this.props.type}
                month={this.state.month}
            />
        </div>
        );
    }
}

export default FilteredList;
