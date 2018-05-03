import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group'

import './App.css';

import NavBar from './NavBar.jsx';

const duration = 300;
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opactity: 0,
}
const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
};

 const Home = (props) => (
    <div location={props.location}>
        <h1 id="gregsH1">Greg Slavens ... some background</h1>
        <blockquote id="blqMyInfo" className="quotez">
            "I was born a poor bla... wait a minute, I think that's
            from the movie "The Jerk"!?
            <br /> <br />
            OK, OK now for the real deal.  I was born, raised
            and most likely, will die in Augusta, GA.  I attended
            Westside High School, Augusta College (yes, it's still called that in my world), and the Clubhou.se"s Code Boot Camp.
            <br /> <br />
            I have worked for 4 companies in my career, so job hopping
            is not an issue for me.
            <br /> <br />
            The first was the Medical College of Georgia (yes, it's still
            called that in my world), CallingPost.com, SRNS,
            and Macuch Steel.
            </blockquote>
    </div >
);

const Contact = (props) => (
    <div location={props.location}>
        <h1>Feel free to email me anytime:</h1>
        <a href="mailto:gslaven@comcast.net">gslaven@comcast.net</a>
    </div >
);

const UnknownUrl = (props) => (
    <div location={props.location}>
        <h1>Sorry for the inconvenience., but it appears that you have been
            routed to an invalid link.  We have been alerted to this fact,
            and we will be working on fixing the issue.</h1>
        <a href="/Home">Greg Slavens Home page</a>
    </div >
);

const App = ({ in: inProp }) => {
    return (
        <div id="root" className="App">
            <header className="App-header">
                <NavBar />
            </header>
            <Router>
                <TransitionGroup>
                    <Transition in={inProp}
                        timeout={duration}
                        onEnter={el => console.log('enter', el)}
                        onExit={el => console.log('exit', el)}
                    >
                        {(state) => (
                            <div style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}>
                                <Switch>
                                    <Route exact path="/" component={Home} />
                                    <Route path="/Home" component={Home} />
                                    <Route path="/Contact" component={Contact} />
                                    <Route component={UnknownUrl} />
                                </Switch>
                            </div>
                        )}
                    </Transition>
                </TransitionGroup>
            </Router>
            <p className="App-intro">
            </p >
        </div >
    )
}

export default App;


    /*
<Route path='/' component={App}>
            <IndexRoute exact path="/home" component={Home} />
            <Route path='contact' component={Contact} />
            <Route path='*' component={Home} />
        </Route>

        import {Switch, Route } from 'react-router'
        
<Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/:user" component={User} />
            <Route component={NoMatch} />
        </Switch>

        */