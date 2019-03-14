import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './CustomNavbar.css';
class CustomNavbar extends Component {
    render() {
        return (
            <div>
                <ul className="nav">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink exact to="/articles">Articles</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default CustomNavbar;