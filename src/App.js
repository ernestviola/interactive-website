import React, { Component } from 'react';
import './App.css';
import CustomNavbar from './components/CustomNavbar'
import Footer from './components/Footer'
import Routes from './Routes';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

class App extends Component {

  componentDidMount() {
    const script = document.createElement("script");
    
    

    script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
    script.async = true;

    document.body.appendChild(script);
    
  }
  render() {
    return (
      <div className="App">
      <CustomNavbar />
      <div className="content">
      <Routes />
      </div>
      <Footer />
      
      </div>
    );
  }
}

export default App;
