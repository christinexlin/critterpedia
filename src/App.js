import React, {Component} from 'react';
import FilteredList from './components/FilteredList';
import './components/List.css';
import { Button, Modal } from "react-bootstrap";

class App extends Component {
    state = {
        fish: [],
        bugs: [],
        type: 'bugs',
        about: false
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

    handleType = () => {this.state.type === 'fish' ?
    this.setState({type: 'bugs'}) : this.setState({type: 'fish'})
    }

    handleAbout = () => {
        this.setState({about: !this.state.about});
    }

    render() {
        return (
        <div>
            <div className="about">
                <Button className={this.state.about ? 'hidden-page' : null} id='about-button' onClick={this.handleAbout}>ABOUT</Button>
                <div className={this.state.about ? 'about-page' : 'hidden-page'}>
                    <div className="about-div">
                        <p id="credit">by <a href="https://www.christine-lin.com/">christine lin</a></p>
                        <p className="subtitle" id="site-description">an unofficial field guide to bugs and fish in Animal Crossing New Horizons</p>
                        <p id="credit">questions or feedback?</p>
                        <p>talk to me on <a href="https://twitter.com/christinexlin">twitter</a>!</p>
                    </div>
                    <Button id="home-button" onClick={this.handleAbout}>BACK HOME</Button>
                </div>
            </div>

            <div className={this.state.about ? 'hidden-page' : "container app"}>
                <div className="row" id="header">
                    <h1 id="title">BLATHER'S CRITTERPEDIA</h1>
                </div>
                <FilteredList
                type={this.state.type}
                items={this.state.type === 'fish' ? this.state.fish : this.state.bugs}
                handleType={this.handleType}
                />
                <div id="footer">
                </div>
            </div>
         </div>
        );
    }
}

export default App;
