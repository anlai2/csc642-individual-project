import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../layout/Footer';
class Verify extends Component {
  //TODO: this.state = { user: {}} and uncomment componentWillMount for production.
  constructor() {
    super();
    this.state = {
      user: {
        firstName: 'Andy',
        lastName: 'Lai',
        address: '1839 33rd Ave',
        zipcode: '94122',
        education: 'Graduate Studies',
        income: 'Greater than 100K',
        phone: '4155729973',
        email: 'anlaics2@gmail.com'
      }
    };
  }
  // componentWillMount() {
  //   console.log(this.props);
  //   if (_.isEmpty(this.props.auth.user)) {
  //     this.props.history.push('/register');
  //   } else {
  //     console.log('YOU FILLED IT OUT WOOHOO');
  //     this.setState({ user: this.props.auth.user });
  //   }
  // }

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
              <div className="col-md-12 m-auto">
                <h3 className="display-4 text-center mb-4 mt-4">
                  Verification Page
                </h3>
                <div className="card card-body bg-light mb-3">
                  <div className="row">
                    <div className="col-md-6">
                      <h3>
                        Name: {firstName} {lastName}
                      </h3>
                      <br />
                      <h3>Education: {education}</h3>
                      <br />
                      <h3>
                        Address: {address} {zipcode}
                      </h3>
                    </div>
                    <div className="col-md-6 d-none d-md-block">
                      <h3>Email: {email}</h3>
                      <br />
                      <h3>Phone Number: {phone}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
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
