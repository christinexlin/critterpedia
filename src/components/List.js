import React, {Component} from 'react';
import Fish from './Fish';
import './List.css';

class List extends Component {

    filterbyRarity = item => {
        if (this.props.rarity === 'All') {
            return true;
        } else {
            return this.props.rarity === item.availability.rarity;
        }
    }

    filterbySize = item => {
        if (this.props.size === 'All') {
            return true;
        }
        switch (this.props.size) {
            case 'Smallest':
                return item.shadow === 'Smallest (1)';
            case 'Small':
                return item.shadow === 'Small (2)';
            case 'Medium':
                return item.shadow === 'Medium (3)' || item.shadow === 'Medium (4)' || item.shadow === 'Medium with fin (4)';
            case 'Large':
                return item.shadow === 'Large (5)';
            case 'Largest':
                return item.shadow === 'Largest (6)' || item.shadow === 'Largest with fin (6)';
            default:
                return true;
        }
    }

    filterbyLocation = item => {
        if (this.props.location === 'All') {
            return true;
        } else if (this.props.location === 'River') {
            return item.availability.location.includes('River');
        } else if (this.props.location === 'Pond') {
            return item.availability.location.includes('Pond');
        } else if (this.props.location === 'Sea') {
            return item.availability.location.includes('Sea');
        } else {
            return item.availability.location === this.props.location;
        }
    }

    filterbySearch = item => {
        return item.name["name-USen"].toLowerCase().includes(this.props.filterText.toLowerCase());
    }

    filterbyHemisphere = item => {
        if (item.availability.isAllYear) {
            return true;
        }
        var date = new Date();
        var currMonth = date.getMonth() + 1;
        if (this.props.hemisphere === 'All') {
            return true;
        } else if (this.props.hemisphere === 'Northern') {
            return item.availability["month-array-northern"].includes(currMonth);

        } else {
            return item.availability["month-array-southern"].includes(currMonth);
        }
    }

    filterbyRarityGroup = item => {
        if (this.props.rarityArray === ['Common','Uncommon']) {
            return true;
        } else {
            return this.props.rarityArray.includes(item.availability.rarity);
        }
    }

    render() {
        let results;
        let myList = this.props.items.filter(this.filterbySearch).filter(this.filterbyRarity)
        .filter(this.filterbyLocation).filter(this.filterbySize).filter(this.filterbyHemisphere);

        if (this.props.price === 'Ascending') {
            myList.sort((a, b) => {return Number(a.price) - Number(b.price)});
            console.log('hello');
        } else if (this.props.price === 'Descending') {
            myList.sort((a, b) => {return Number(b.price) - Number(a.price)});
        }

        if (myList.length === 0) {
            results = (
                <div className="row">
                <h2>No results available. Try another search?</h2>
                </div>
            );
        } else {
            results =
            <div className="row" id="list">
            {myList.map(item => {
                return <div><Fish fish={item} key={item["file-name"]}/></div>
            })}
            </div>;
        }

        return results;
    }
}

export default List;
