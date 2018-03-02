/**
*
* NavBar
*
*/

import React from 'react';

import NavItem from 'components/NavItem'

import './style.css';
import './styleM.css';

export default class NavBar extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      Pages: [
        `Home`,`Resume`
      ],
      activeIndex: 0
    }
  }

  render() {
    return (
      <div className="navBar">
        Greg <span className="navBarSpan">Slavens</span>
        {this.state.Pages.map((item, index) => (
          <NavItem className="listItem" key={`listItem${index}`}>
          {item}
          </NavItem>
        ))}      </div>
    );
  }
}
