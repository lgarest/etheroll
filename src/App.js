import React, { Component } from 'react';
import './App.css';
import Headers from './components/Headers';
import Footers from './components/Footers';
import PlaceBet from './components/PlaceBet';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Headers />
        <div>
          <PlaceBet />
        </div>
        <Footers />
      </div>
    );
  }
}

export default App;