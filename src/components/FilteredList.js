import React, {Component} from 'react';
import SearchBar from './SearchBar';
import List from './List';
import './List.css';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            rarity: [],
            hemisphere: 'Northern',
            price: '',
            popup: false,
            month: []
        };
    }

    handleFilterText = (filterText) => {this.setState({ filterText: filterText} );}
    handleRarity = (rarity) => {this.setState({rarity: rarity});}
    handleMonth = (month) => {this.setState({month: month});}
    handleType = () => {this.props.handleType()}
    handlePrice = (price) => {this.setState({ price: price });}
    switchHemisphere = () => {
        if (this.state.hemisphere === 'Northern') {
            this.setState({hemisphere: 'Southern'});
        } else {
            this.setState({hemisphere: 'Northern'});
        }
    }

    handleResetSearch = () => {
        this.setState({
            filterText: '',
            rarity: [],
            price: '',
            popup: false,
            month: []
        });
    }

    render() {
        return (
        <div>
            <SearchBar
                onFilterTextChange={this.handleFilterText}
                onRarityChange={this.handleRarity}
                onHemisphereChange={this.switchHemisphere}
                onTypeChange={this.handleType}
                onMonthChange={this.handleMonth}
                onResetSearch={this.handleResetSearch}
                onPriceChange={this.handlePrice}
                type={this.props.type}
                hemisphere={this.state.hemisphere}
            />
            <List
                items={this.props.items}
                filterText={this.state.filterText}
                rarity={this.state.rarity}
                hemisphere={this.state.hemisphere}
                type={this.props.type}
                month={this.state.month}
                price={this.state.price}
            />
        </div>
        );
    }
}

export default FilteredList;
