import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Timer from './timeincrim'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
    <Timer />
        </header>
      </div>
    );
  }
}

export default App;
