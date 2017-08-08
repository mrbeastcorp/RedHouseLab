import React, { Component } from 'react';
import ScHeader from './ScHeader';

class Header extends Component {
  render() {
    return (
      <ScHeader>
        <img src="http://www.redhouselab.com/img/redhouse-lab-low.png" />
        <ul>
            <li><a href="">menu1</a></li>
            <li><a href="">menu2</a></li>
        </ul>
      </ScHeader>
    );
  }
}

export default Header;
