/**
*
* Grid
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Grid extends React.PureComponent {
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
      <div>
        <div className="grid" >
          {this.state.images.map((image, index) => (
            <div
              className="gridItem" key={`gridItem${index}`}
            >
            <img src={require('../../images/'+image)} className="gridImage"/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
