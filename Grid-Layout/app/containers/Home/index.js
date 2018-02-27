/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import  Grid from 'components/Grid';

import './style.css';
import './styleM.css';

export default class Home extends React.PureComponent {

constructor() {
  super();
  this.state = {
    images: [
      "PopCorn By its Lonesome - Caramel" + ".jpg",
      "PopCorn By its Lonesome - Cheese - Bifurcated" + ".jpg",
      "PopCorn By its Lonesome - Cheese" + ".jpg",
      "PopCorn By its Lonesome - Plain - Inside Look at Furls" + ".jpg",
      "PopCorn By its Lonesome - Plain" + ".jpg"
    ]
  }
}

  render() {
    return (
      <div className="container">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
          <Grid />
      </div>
    );
  }
}
