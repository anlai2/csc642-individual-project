import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Register from './components/main/Register';
import Home from './components/main/Home';
import Verify from './components/main/Verify';
import Invalid from './components/main/Invalid';
class App extends Component {
  render() {
    return (
      <Provider store={configureStore}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/verify" component={Verify} />
              <Route exact path="*" component={Invalid} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
