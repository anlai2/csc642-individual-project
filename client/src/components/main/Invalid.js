import React, { Component } from 'react';
import Footer from '../layout/Footer';
class Invalid extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>CSC 642 Summer 2018 Individual Assignment Andy Lai</h2>
        </header>
        <h1 className="display-4">Page Not Found</h1>
        <p>Sorry, this page does not exist</p>
        <button
          onClick={() => this.props.history.push('/')}
          type="button"
          className="btn btn-info btn-lg"
        >
          Go Home
        </button>
        <Footer />
      </div>
    );
  }
}

export default Invalid;
