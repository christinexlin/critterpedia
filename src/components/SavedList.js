import React, { Component } from "react";
import './List.css';
import { MdFavorite } from "react-icons/md";

class SavedList extends Component {
  render() {
      let listItems;
      if (this.props.items.length === 0) {
          listItems = (
              <p>No saved critters</p>
          );
      } else {
          listItems = (
          <ul>
              {this.props.items.map(item => {
                  return (
                      <li>{item}</li>
                  )
              })}
          </ul>)
      }
    return (
    <div className="saved-list">
        <h6>Favorites</h6>
        {listItems}
     </div>
    );
  }
};

export default SavedList;
