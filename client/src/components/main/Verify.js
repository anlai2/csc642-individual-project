import React, { Component } from 'react';
import _ from 'lodash';
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
      this.props.history.push('/register');
    } else {
      console.log('YOU FILLED IT OUT WOOHOO');
      this.setState({ user: this.props.auth.user });
    }
  }

  render() {
    console.log(this.state);

    const {
      firstName,
      lastName,
      address,
      zipcode,
      education,
      income,
      phone,
      email,
      password,
      password2,
      terms,
      recaptcha
    } = this.state.user;

    return (
      <div className="App">
        <header className="App-header">
          <h2>CSC 642 Summer 2018 Individual Assignment Andy Lai</h2>
          <h2>Results Verification Page Andy Lai</h2>
        </header>
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h3 className="display-4 text-center mb-4 mt-4">
                  Verification Page
                </h3>
                <div className="card card-body bg-light mb-3">
                  <div className="row">
                    <div className="col-lg-6 col-md-4 col-8">
                      <h3>
                        Name: {firstName} {lastName}
                      </h3>
                      <h3>
                        Address: {address} {zipcode}
                      </h3>
                    </div>
                    <div className="col-md-4 d-none d-md-block">
                      <h3>Email: {email}</h3>
                      <h3>Phone Number: {phone}</h3>
                    </div>
                  </div>
                </div>
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
