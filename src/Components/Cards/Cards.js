import React, {Component } from 'react';
import FlipCard from 'react-flipcard-2';

//Style
import './Cards.css';

class Cards extends Component{
  render(){
    return (
      <div className="card">
       <FlipCard>
          <div className='backCard'></div>
          <div className='frontCard'>
            <img className="frontCard" src={this.props.image} alt="cards"/>
          </div>
        </FlipCard> 
        
      </div>
    )
  }
}

export default Cards;