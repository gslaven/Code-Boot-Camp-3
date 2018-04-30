/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app'
});

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group'

import './App.css';

import logo from './logo.svg';
import NavBar from './NavBar.jsx';

const styles = {
    animatedElement: {
        position: 'fixed'
    }
}
const Home = () => (
    <div>
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

const Contact = () => (
    <div>
        <h1>Feel free to email me anytime:</h1>
        <a href="mailto:gslaven@comcast.net">gslaven@comcast.net</a>
    </div >
);

const App = () => {
    return (
        <div id="root" className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <NavBar />
            </header>
            <Router>
                <div>
                    <TransitionGroup>
                        <Transition
                            timeout={1000}
                            onEnter={el => console.log('enter', el)}
                            onExit={el => console.log('exit', el)}
                        >
                            <section style={styles.animatedElement}>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/Home" component={Home} />
                                <Route exact path="/Contact" component={Contact} />
                            </section>
                        </Transition>
                    </TransitionGroup>
                </div>
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