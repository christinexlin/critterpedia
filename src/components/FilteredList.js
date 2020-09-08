import React, {Component} from 'react';
import SearchBar from './SearchBar';
import List from './List';
import SavedList from './SavedList';
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
            month: [],
            savedList: [],
        };
    }

    handleFilterText = (filterText) => {this.setState({ filterText: filterText} );}
    handleRarity = (rarity) => {this.setState({rarity: rarity});}
    handleMonth = (month) => {this.setState({month: month});}
    handleType = (type) => {this.props.handleType(type)}
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

    handleAdd = (name) => {
        var newList = this.state.savedList;
        newList.push(name);
        this.setState({savedList: newList});
    }

    render() {
        return (
        <div className="filtered-list">
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
            <SavedList items={this.state.savedList} />
            <List
                items={this.props.items}
                filterText={this.state.filterText}
                rarity={this.state.rarity}
                hemisphere={this.state.hemisphere}
                type={this.props.type}
                month={this.state.month}
                price={this.state.price}
                handleAdd={this.handleAdd}
                handleDelete={(name) => {this.props.handleDelete(name)}}
            />
        </div>
        );
    }
}

export default FilteredList;
