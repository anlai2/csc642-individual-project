import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import Register from './components/Register';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Route exact path="/" component={Register} />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
