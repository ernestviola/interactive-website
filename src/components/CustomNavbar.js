import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './CustomNavbar.css';
class CustomNavbar extends Component {
    render() {
        return (
            <div className="navbar">
                
            
            <div className="nav">
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink exact to="/articles">Articles</NavLink></li>
                </ul>
            </div>
            </div>
        );
    }
}

export default CustomNavbar;