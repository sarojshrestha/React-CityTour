import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TouristList';
import TouristList from './components/TouristList';

class App extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <TouristList />
      </React.Fragment>
    );
  }
}

export default App;

