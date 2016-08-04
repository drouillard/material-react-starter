import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import About from './About';

import { Route, Router, browserHistory } from 'react-router';

class App extends Component {
    render() {
        return (
      <Router history={browserHistory} >
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Router>
    );
    }
}

export default App;
