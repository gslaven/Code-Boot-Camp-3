/**
*
* NavItem
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class NavItem extends React.PureComponent {
  render() {
    return (
      <a className="navBarItem" class="active" href="Home.html">
        This is my NavItem
      </a>
    );
  }
}
