import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import Register from './components/main/Register';
import Verify from './components/main/Verify';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Register} />
            <Route exact path="/verify" component={Verify} />
            <div className="container" />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
