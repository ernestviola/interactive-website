import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class CustomNavbar extends Component {
    render() {
        return (
            <div>
                <NavLink exact to="/">Home</NavLink>
            </div>
        );
    }
}

export default CustomNavbar;