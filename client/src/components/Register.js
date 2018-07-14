import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import TextFieldGroup from './common/TextFieldGroup';
import Footer from './layout/Footer';

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
      recaptcha: false,
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
          <h1>CSC 642 Summer 2018 Individual Assignment Andy Lai</h1>
        </header>
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h3 className="display-4 text-center mb-4 mt-4">
                  Registration Form
                </h3>
                <p className="d-block pb-3">* = required fields</p>
                <form onSubmit={this.onSubmit}>
                  <div className="row">
                    <div className="col">
                      <TextFieldGroup
                        placeholder="* First Name"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.onChange}
                        error={errors.firstName}
                      />
                    </div>
                    <div className="col">
                      <TextFieldGroup
                        placeholder="* Last Name"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.onChange}
                        error={errors.lastName}
                      />
                    </div>
                  </div>
                  <hr />
                  <div className="form-group">
                    <TextFieldGroup
                      placeholder="* Address"
                      name="address"
                      value={this.state.address}
                      onChange={this.onChange}
                      error={errors.address}
                    />
                  </div>
                  <div className="form-group">
                    <TextFieldGroup
                      placeholder="* Zipcode"
                      name="zipcode"
                      value={this.state.zipcode}
                      onChange={this.onChange}
                      error={errors.zipcode}
                    />
                  </div>
                  <hr />
                  <div className="form-group">
                    <TextFieldGroup
                      placeholder="Education"
                      name="education"
                      value={this.state.education}
                      onChange={this.onChange}
                      error={errors.education}
                    />
                  </div>
                  <div className="form-group">
                    <TextFieldGroup
                      placeholder="Income"
                      name="income"
                      value={this.state.income}
                      onChange={this.onChange}
                      error={errors.income}
                    />
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col">
                      <TextFieldGroup
                        placeholder="* Phone Number"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.onChange}
                        error={errors.phone}
                      />
                    </div>
                    <div className="col">
                      <TextFieldGroup
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        error={errors.email}
                      />
                    </div>
                  </div>
                  <hr />
                  <div className="form-group">
                    <TextFieldGroup
                      placeholder="* Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      error={errors.password}
                    />
                  </div>
                  <div className="form-group">
                    <TextFieldGroup
                      placeholder="* Confirm Password"
                      name="password2"
                      value={this.state.password2}
                      onChange={this.onChange}
                      error={errors.password2}
                    />
                  </div>
                  <ReCAPTCHA
                    ref="recaptcha"
                    sitekey="6LdA7GMUAAAAANYVPP-K1G8PQu-yjMtYp5yE3MGG"
                    onChange={() => this.setState({ recaptcha: true })}
                  />
                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Register;
