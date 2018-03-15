import React from 'react';

export default class NavItem extends React.PureComponent {
  render() {
    return (
      <div className="NavBarItem">
        <NavLink exact to="/">Home</NavLink>
      </div>
    );
  }
}