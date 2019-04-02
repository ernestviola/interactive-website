import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <span>Ernest Viola {(new Date().getFullYear())}</span>
            </div>
        );
    }
}

export default Footer;