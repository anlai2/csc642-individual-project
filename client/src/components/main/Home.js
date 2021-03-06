import React, { Component } from 'react';
import Footer from '../layout/Footer';
class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>CSC 642 Summer 2018 Individual Assignment Andy Lai</h2>
        </header>
        <div className="col-md-9 m-auto">
          <h3 className="display-4 text-center mb-4 mt-4">Home Page</h3>
          <h5>Try these testing links</h5>
          <div className="d-flex justify-content-between">
            <button
              onClick={() => this.props.history.push('/')}
              type="button"
              className="btn btn-secondary btn-lg float-left"
            >
              /
            </button>
            <button
              onClick={() => this.props.history.push('/register')}
              type="button"
              className="btn btn-info btn-lg float-left"
            >
              /register
            </button>
            <button
              onClick={() => this.props.history.push('/terms')}
              type="button"
              className="btn btn-warning btn-lg float-left"
            >
              /terms
            </button>
            <button
              onClick={() => this.props.history.push('/verify')}
              type="button"
              className="btn btn-success btn-lg float-left"
            >
              /verify
            </button>
            <button
              onClick={() => this.props.history.push('/test')}
              type="button"
              className="btn btn-danger btn-lg float-left"
            >
              /404
            </button>
          </div>
          <div className="d-flex justify-content-between">
            <p>Current Page</p>
            <p>Register Page</p>
            <p>Terms Page</p>
            <p>Verify Page (Protected Route)</p>
            <p>404 Page</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
