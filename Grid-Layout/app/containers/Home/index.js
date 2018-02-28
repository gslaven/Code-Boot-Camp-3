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

  render() {
    return (
      <div className="container">
        <Helmet title="PopCorn Time Machine" meta={[ { name: "description", content: "An attempt to leverage the computing power of the devices " +
                  "we carry around with us everday to remove the phrase 'BURNT  PopCorn'"  +
                  "from the world's lexicon."}]}/>
          <Grid />
      </div>
    );
  }
}
