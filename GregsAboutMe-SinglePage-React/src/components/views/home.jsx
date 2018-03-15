import React, { Component } from "react";
import { browserHistory } from 'react-router';
import NavBar from '../tools/NavBar';

export default class Home extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
      <div id="home">
        <NavBar />
        Home Page Stuff.
      </div>
    );
  }
}
