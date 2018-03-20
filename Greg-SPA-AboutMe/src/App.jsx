import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router'

import './App.css';

import logo from './logo.svg';
import NavBar from './NavBar.jsx';

const Home = () => (
    <div>
        <h1 id="gregsH1">Greg Slavens ... some background</h1>
        <blockquote id="blqMyInfo" class="quotez">
            "I was born a poor bla... wait a minute, I think that"s
            from the movie "The Jerk"!?
          <br /> <br />
            OK, OK now for the real deal.  I was born, raised
            and most likely, will die in Augusta, GA.  I attended
            Westside High School, Augusta College (yes, it"s still
            called that in my world), and the Clubhou.se"s Code Boot Camp.
          <br /> <br />
            I have worked for 4 companies in my career, so job hopping
            is not an issue for me.
          <br /> <br />
            The first was the Medical College of Georgia (yes, it"s still
                called that in my world), CallingPost.com, SRNS,
                and Macuch Steel.
        </blockquote>
    </div >
);

const Contact = () => (
    <div>
        <h1>Feel free to email me anytime:</h1>
        <a href="mailto:gslaven@comcast.net">gslaven@comcast.net</a>
    </div >
);

const App = () => (
    <div id="root" className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <NavBar />
        </header>
        <Fade>
            <Router>
                <div>
                    <Switch>
                        <Route path="/Home" component={Home} />
                        <Route path="/Contact" component={Contact} />
                        <Route component={Home} />
                    </Switch>
                </div>
            </Router>
        </Fade>
        <p className="App-intro">
        </p>
    </div>
);

export default App;


/*
  <Route path='/' component={App}>
     <IndexRoute exact path="/home" component={Home} />
     <Route path='contact' component={Contact} />
     <Route path='*' component={Home} />
 </Route>

import { Switch, Route } from 'react-router'

<Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/:user" component={User} />
    <Route component={NoMatch} />
</Switch> 

*/

