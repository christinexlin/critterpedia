import React, {Component} from 'react';
import Fish from './Fish';

class FishList extends Component {
    render() {
        return (
            <div>
            {this.props.fish.map(fish => {
                return <Fish fish={fish} key={fish["file-name"]}/>
            })}
            </div>
        )
    }
}

export default FishList;
