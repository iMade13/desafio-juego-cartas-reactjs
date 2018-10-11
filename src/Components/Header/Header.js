import React, {Component} from 'react';
import '../Header/Header.css';


class Header extends Component {
  render(){
    return (
      <header>
        <div className="title d-flex justify-content-center">
          <h1>Juego de Memoria de Cartas</h1>
        </div>
        <div>
          <button className="btn-restart btn btn-dangerous">
            Restart
          </button>
        </div>
        <div className="attempts">
          <span>Attempts</span>  
        </div>
      </header>
    )
  }
}

export default Header;