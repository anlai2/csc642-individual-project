import React, { Component } from 'react';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Verify extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }
  componentWillMount() {
    console.log(this.props);
    if (_.isEmpty(this.props.auth.user)) {
      this.props.history.push('/');
    } else {
      console.log('YOU FILLED IT OUT WOOHOO');
      this.setState({ user: this.props.auth.user });
    }
  }

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <header className="App-header">
          <h2>CSC 642 Summer 2018 Individual Assignment Andy Lai</h2>
        </header>
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h3 className="display-4 text-center mb-4 mt-4">
                  Verification Page
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Verify.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(Verify);
