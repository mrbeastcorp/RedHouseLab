import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScHeader from './ScHeader';

class Header extends Component {
  render() {
    return (
      <ScHeader>
        <img src="http://www.redhouselab.com/img/redhouse-lab-low.png" />
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/scuola">La scuola</Link></li>
            <li><Link to="/corsi">Corsi</Link></li>
            <li><Link to="/docenti">Docenti</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/stampa">Ufficio stampa</Link></li>
            <li><Link to="/contatti">Dove siamo</Link></li>
        </ul>
      </ScHeader>
    );
  }
}

export default Header;
