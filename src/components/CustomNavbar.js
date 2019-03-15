import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './CustomNavbar.css';
class CustomNavbar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            clicked: false,
        };
    }


    handleClick() {
        this.setState({"clicked": !this.state.clicked});
    }




    render() {
        // var className = this.state.clicked ? 'navbar-toggle' : 'base-state';
        return (
            
            <nav class="navbar">
                <span className="navbar-toggle" id="js-navbar-toggle" onClick={this.handleClick}>
                    <FontAwesomeIcon icon={faCoffee} />
                </span>
                {/* <a href="#" class="logo">Ernest.</a> */}
                <NavLink exact to="/" className="logo">Ernest.</NavLink>
                <ul className={`main-nav ${this.state.clicked ? 'active' : ''}`} id="js-menu">
                    <li><NavLink exact to="/" className="nav-links">Home</NavLink></li>
                    <li><NavLink exact to="/articles" className="nav-links">Articles</NavLink></li>
                </ul>
            </nav>

        );
    }
}

export default CustomNavbar;