import React, {Component} from 'react';
import FilteredList from './components/FilteredList';
import ScrollToTop from './components/ScrollToTop';
import './components/List.css';

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

    handleType = (type) => {this.setState({type: type})
    }

    handleAbout = () => {
        this.setState({about: !this.state.about});
    }

    render() {
        return (
        <div>
            <div className="container-fluid app">
                <FilteredList
                type={this.state.type}
                items={this.state.type === 'fish' ? this.state.fish : this.state.bugs}
                handleType={this.handleType}
                />
                <div id="footer">
                </div>
                <ScrollToTop />
            </div>
         </div>
        );
    }
}

export default App;
