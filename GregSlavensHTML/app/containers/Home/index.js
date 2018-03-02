/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import NavBar from 'components/NavBar'

import './style.css';
import './styleM.css';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Greg Slavens" meta={[ { name: 'description', content: `A Greg Slavens is a self taught front/back-end developer who is attantive to detail and is passionate about learning new things.  Also He's for hire` }]}/>
        <NavBar/>
      </div>
    );
  }
}
