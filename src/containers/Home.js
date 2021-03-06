import React, { Component } from 'react';
import Typist from 'react-typist';
import './Home.css';


class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="container">
                    <div className="text-box">
                        <Typist avgTypingDelay={10} blink={true} >
                        Hey my name is Ernest and this is my Website.
                        <Typist.Backspace count={"Hey my name is Ernest and this is my Website.".length} delay={700} avgTypingDelay={20}/>
                        I enjoy programming as well as reading self improvement books.
                        <Typist.Backspace count={"I enjoy programming as well as reading self improvement books.".length} delay={800} avgTypingDelay={20}/>
                        I also really like tennis.
                        <Typist.Backspace count={"I also really like tennis.".length} delay={700} avgTypingDelay={20}/>
                        If you're looking for a software solution then I'm the man for you. You can email me <a href="mailto:ernest.viol@gmail.com">here</a>.
                        </Typist>
                    </div>
                    
                </div>
                
            </div>
        );
    }
}

export default Home;