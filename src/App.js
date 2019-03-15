import React, { Component } from 'react';
import './App.css';
import CustomNavbar from './components/CustomNavbar'
import Routes from './Routes';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

class App extends Component {
  render() {
    return (
      <div className="App">
      <CustomNavbar />
      <div className="content">
      <Routes />
      </div>
      
      </div>
    );
  }
}

export default App;
