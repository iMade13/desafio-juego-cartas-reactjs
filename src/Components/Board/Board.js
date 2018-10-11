import React, { Component } from 'react';
import Cards from '../Cards/Cards';

//Style
import './Board.css'

class Board extends Component {
  render(){
    return (
      <div className="board"> 
      {
        this.props.card
        .map((card) => <Cards image={card.image}/>)
      }
      </div>
    )
  }
}

export default Board;