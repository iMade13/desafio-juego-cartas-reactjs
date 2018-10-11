import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Board from './Components/Board/Board';
import buildCard from './Components/Utils/buildCards';

//Style
import './App.css';

const getInitialState = () => {
  const naipe = buildCard();
  return {
    naipe,
    pairSelected: [],
    comparison: false
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Board 
           card={this.state.naipe}
           pairSelected={this.state.pairSelected}
           cardSelection={(card) => this.cardSelection(card)}
           />
      </div>
    );
  }

  cardSelection(card) {
    if (
      this.state.comparison ||
      this.state.pairSelected.indexOf(card) > -1 ||
      card.guessedCard
    ){
      return;
    }

    const pairSelected = [...this.state.pairSelected, card];
    this.setState({
      pairSelected 
    })

  }
}

export default App;
