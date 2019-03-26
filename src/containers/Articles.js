import React, { Component } from 'react';
import marked from 'marked';
// import * as blogs from '../../_posts/blog';

class Articles extends Component {
    constructor(props) {
        super(props);
    }    

    // componentDidMount() {
    //     console.log(blogs);
    // }

    render() {
        return (
            <div>
                This is where all of the articles are located
            </div>
        );
    }
}

export default Articles;