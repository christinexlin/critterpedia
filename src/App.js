import React, {Component} from 'react';
import FilteredList from './components/FilteredList';
import './components/List.css';
import Image from 'react-bootstrap/Image';
import blathers from './components/blathers.png';

class App extends Component {
    state = {
        fish: []
    }

    componentDidMount(){
        fetch('https://acnhapi.com/v1a/fish/')
        .then(res => {return res.json();})
        .then(json => {this.setState({ fish: json });})
        .catch(error => {console.log(error);});
    }

    render() {
        return (
        <div id="app" className="container-fluid">
        <div id="header" className="row">
            <h1 id="title">Blather's Critterpedia</h1>
        </div>
        {/*}
        <div id="header" className="row">
            <h2 id="intro">What do you want to learn about today?</h2>
        </div>
        */}
        <FilteredList items={this.state.fish}/>
         </div>
        );
    }
}

export default App;
