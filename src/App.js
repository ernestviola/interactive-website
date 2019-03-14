import React, { Component } from 'react';
import './App.css';
import CustomNavbar from './components/CustomNavbar'
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
      <CustomNavbar />
      <Routes />
      </div>
    );
  }
}

export default App;
