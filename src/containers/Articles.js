import React, { Component } from 'react';
import marked from 'marked';
// import blog from '../posts/blog/2019-03-25-test.md';

class Articles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            marked : ""
        };
    }   
    
    importAll(r) {
        return r.keys().map(r);
    }

    componentDidMount() {
        // const readmePath = require('../_posts/blog/2019-03-25-test.md');
        // fetch(readmePath)
        // .then(response => {
        //     return response.text()
        // })
        // .then(text => {
        //     this.setState({
        //         markdown: marked(text)
        //     })
        // });
        const blogs = require('../_posts');
        console.log(typeof(blogs));
    }

    render() {
        const {markdown} = this.state;
        return (
            <div>
                {/* <article dangerouslySetInnerHTML={{__html: markdown}}></article> */}
            </div>
        );
    }
}

export default Articles;