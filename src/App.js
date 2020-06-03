import React, {Component} from 'react';
import FilteredList from './components/FilteredList';
import './components/List.css';
import Image from 'react-bootstrap/Image'

class App extends Component {
    state = {
        fish: []
    }

    componentDidMount(){
        fetch('http://acnhapi.com/v1a/fish/')
        .then(res => {return res.json();})
        .then(json => {this.setState({ fish: json });})
        .catch(error => {console.log(error);});
    }

    render() {
        return (
        <div id="site">
        <div id="app" class="container-fluid">
        <div id="header" class="row">
            <h1 id="title">Blather's Critterpedia</h1>
        </div>
        <div id="header" class="row">
            <h2 id="intro">What do you want to learn about today?</h2>
        </div>
        <div class="row">
            <FilteredList items={this.state.fish}/>
         </div>
         </div>
         </div>
        );
    }
}

export default App;
