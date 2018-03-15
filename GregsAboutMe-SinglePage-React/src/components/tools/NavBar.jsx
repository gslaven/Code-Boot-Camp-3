import React, { Component } from "react";
import NavBarItem from '../tools/NavBarItem';

export default class NavBar extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      Pages: [
        `Home`, `Contact`
      ],
      activeIndex: 0
    }
  }

  render() {
    return (
      <div className="NavBar">
        This is the Nav Bar
             Greg <span className="NavBarSpan">Slavens</span>
        {this.state.Pages.map((item, index) =>
          (
            <NavBarItem className="NavBarItem" key={`listItem${index}`}>
              {item}
            </NavBarItem>
          ))}
      </div>
    );
  }
}
