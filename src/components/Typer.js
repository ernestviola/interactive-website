import React, { Component } from 'react';

class Typer extends Component {
    static defaultProps = {
        heading:'',
        dataText: []
    };

    constructor(props) {
        super (props);

        this.state = {

        }
    }

    componentDidMount() {
        this.handleType();
    }

    handleType = () => {
        const { dataText } = this.props;
    }
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Typer;