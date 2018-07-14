import React, { Component } from 'react';
import TextFieldGroup from './common/TextFieldGroup';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      zipcode: '',
      education: '',
      income: '',
      phone: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            CSC 642 Summer 2018 Individual Assignment Andy Lai
          </h1>
        </header>
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h3 className="display-4 text-center mb-4 mt-4">Register</h3>
                <form onSubmit={this.onSubmit}>
                  <div className="row">
                    <div className="col">
                      <TextFieldGroup
                        placeholder="First Name"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.onChange}
                        error={errors.firstName}
                      />
                    </div>
                    <div className="col">
                      <TextFieldGroup
                        placeholder="Last Name"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.onChange}
                        error={errors.lastName}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Email Address"
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Confirm Password"
                      name="password2"
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn btn-info btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
