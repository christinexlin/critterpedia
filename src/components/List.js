import React, {Component} from 'react';
import Critter from './Critter';
import './List.css';

class List extends Component {

    filterbySearch = item => {
        return item.name["name-USen"].toLowerCase().includes(this.props.filterText.toLowerCase());
    }

    filterbyRarity = item => {
        if (this.props.rarity.length === 0) {
            return true;
        } else {
            return this.props.rarity.includes(item.availability.rarity);
        }
    }

    filterbyMonth = item => {
        let monthArray = this.props.month;
        if (monthArray.length === 0) {
            return true;
        } else {
            if (this.props.hemisphere === 'Northern') {
                for (let i = 0; i < monthArray.length; i++) {
                    if (item.availability["month-array-northern"].includes(monthArray[i])) {
                        return true;
                    }
                }
                return false;
            } else {
                for (let i = 0; i < monthArray.length; i++) {
                    if (item.availability["month-array-southern"].includes(monthArray[i])) {
                        return true;
                    }
                }
                return false;
            }
        }
    }
    handleAdd = name => {
        this.props.handleAdd(name);
    }

    render() {
        let results;
        let myList = this.props.items.sort((a,b) => {
            return a.name["name-USen"].localeCompare(b.name["name-USen"]);
        });

        myList = myList.filter(this.filterbySearch).filter(this.filterbyRarity)
        .filter(this.filterbyMonth);

        if (this.props.price === 'Ascending') {
            myList.sort((a, b) => {return Number(a.price) - Number(b.price)});
            console.log('hello');
        } else if (this.props.price === 'Descending') {
            myList.sort((a, b) => {return Number(b.price) - Number(a.price)});
        }

        if (myList.length === 0) {
            results = (
                <div className="row no-results">
                <h4>NO RESULTS AVAILABLE. TRY AGAIN?</h4>
                </div>
            );
        } else {
            results =
            <div className="row list">
            {myList.map(item => {
                return (
                    <Critter
                    critter={item} key={item.name["name-USen"]} type={this.props.type}
                    handleAdd={this.handleAdd}
                    handleDelete={(name) => {this.props.handleDelete(name)}}
                    />
                )
            })}
            </div>;
        }

        return results;
    }
}

export default List;
