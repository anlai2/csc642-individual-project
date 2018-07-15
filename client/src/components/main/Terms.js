import React, { Component } from 'react';
import Footer from '../layout/Footer';
class Terms extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>CSC 642 Summer 2018 Individual Assignment Andy Lai</h2>
        </header>
        <div className="col-md-12">
          <h3 className="display-4 text-center mb-4 mt-4">
            Terms and Conditions
          </h3>
          <h5>We will never share your information with anyone.</h5>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Terms;
