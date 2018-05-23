import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';
import logo from './logo.svg';

export default class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            Pages: [
                { 'PageName': `Home` },
                { 'PageName': `Contact` },
                { 'PageName': `Whatever` },
            ],
            activeIndex: 0
        }
    }

    render() {
        let NavLinks =
            this.state.Pages.map(function (varNavLink, index) {
                return (
                    <li key={`listItem${index}`}>
                        <NavLink to={`/${varNavLink.PageName}`}
                            activeClassName="selected"
                            key={`NavBarItem${varNavLink.PageName}`}>
                            {varNavLink.PageName}
                        </NavLink>
                    </li>
                )
            }
            )
        return (
            <div className="NavBar">
                <div>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="GregsColumn">
                    <div>
                        Greg <span className="NavBarSpan">Slavens</span>
                    </div>
                    <div>
                        {NavLinks}
                    </div>
                </div>
            </div>
        );
    }
}