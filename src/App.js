import React, { Component } from 'react';
import Header from './Components/Header/Header';
import './App.css';
import Board from './Components/Board/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Board />
      </div>
    );
  }
}

export default App;
