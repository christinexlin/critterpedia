import React, {Component} from 'react';
import FilteredList from './components/FilteredList';
import './components/List.css';
import { MdFavorite } from 'react-icons/md';

class App extends Component {
    state = {
        fish: [],
        bugs: [],
        type: 'bugs'
    }

    componentDidMount(){
        fetch('https://acnhapi.com/v1a/fish/')
        .then(res => {return res.json();})
        .then(json => {this.setState({ fish: json });})
        .catch(error => {console.log(error);});

        fetch('https://acnhapi.com/v1a/bugs/')
        .then(res => {return res.json();})
        .then(json => {this.setState({ bugs: json });})
        .catch(error => {console.log(error);});
    }

    handleFishType = () => {this.setState({type: 'fish'});}
    handleBugType = () => {this.setState({type: 'bugs'});}

    render() {
        return (
        <div className="container app">
            <div className="row" id="header">
                <h1 id="title">blather's critterpedia</h1>
            </div>

            <FilteredList
            type={this.state.type}
            items={this.state.type === 'fish' ? this.state.fish : this.state.bugs}
            handleFishType={this.handleFishType}
            handleBugType={this.handleBugType}
            />

            <div className="row" id="footer">
                <div className="row" style={{margin:'auto'}}>
                    <h6>made with <MdFavorite/> by <a href="https://twitter.com/christinexlin">christine lin</a></h6>
                </div>
                <div className="row">
                    <p class="catchphrase">an unofficial field guide to bugs and fish in Animal Crossing New Horizons</p>
                </div>
            </div>

         </div>
        );
    }
}

export default App;
