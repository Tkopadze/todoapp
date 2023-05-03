
import './nav.css';
import React from 'react';


class NavBar extends React.Component {
  render() {
    return (
      <div>
        <div className="navBar">
          <h1 className="toDoList">TO DO</h1>
          <div className="login">
          <h3 className="name">{this.props.name}</h3>
          <img className="photo" src={this.props.photo} alt="User Photo" />
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;





