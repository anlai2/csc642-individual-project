import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';
import { connect } from 'react-redux';
import { registerUser } from '../actions/authActions';
import TextFieldGroup from './common/TextFieldGroup';
import SelectListGroup from './common/SelectListGroup';
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
      terms: false,
      recaptcha: false,
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      zipcode: this.state.zipcode,
      education: this.state.education,
      income: this.state.income,
      phone: this.state.phone,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      terms: this.state.terms,
      recaptcha: this.state.recaptcha
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    console.log(this.state);
    const { errors } = this.state;

    const educationOptions = [
      { label: 'Select Education', value: 0 },
      { label: 'High School', value: 'High School' },
      { label: 'College', value: 'College' },
      { label: 'Graduate Studies', value: 'Graduate Studies' },
      { label: 'PHD', value: 'PHD' }
    ];

    const incomeOptions = [
      { label: 'Select Income', value: 0 },
      { label: 'Less than $50K', value: '< $50K' },
      { label: '$50 - $100K', value: '$50 - $100K' },
      { label: 'Greater than $100K', value: '> $100K' }
    ];

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
                  Registration Form
                </h3>
                <small className="d-block pb-3">* = required fields</small>
                <form noValidate onSubmit={this.onSubmit}>
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
                  <br />
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
                  <br />
                  <div className="form-group">
                    <SelectListGroup
                      placeholder="Education"
                      name="education"
                      value={this.state.education}
                      onChange={this.onChange}
                      options={educationOptions}
                      error={errors.education}
                    />
                  </div>
                  <div className="form-group">
                    <SelectListGroup
                      placeholder="Income"
                      name="income"
                      value={this.state.income}
                      onChange={this.onChange}
                      options={incomeOptions}
                      error={errors.income}
                    />
                  </div>
                  <br />
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
                  <br />
                  <div className="form-group">
                    <small
                      id="passwordHelpInline"
                      className="text-muted float-left"
                    >
                      Password must be 6-30 characters long.
                    </small>
                    <TextFieldGroup
                      placeholder="* Password"
                      name="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      error={errors.password}
                    />
                  </div>
                  <div className="form-group">
                    <TextFieldGroup
                      placeholder="* Confirm Password"
                      name="password2"
                      type="password"
                      value={this.state.password2}
                      onChange={this.onChange}
                      error={errors.password2}
                    />
                  </div>
                  <div className="form-group float-left">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      onClick={() =>
                        this.setState({ terms: !this.state.terms })
                      }
                      id="defaultCheck1"
                      checked={this.state.terms}
                    />
                    <label className="form-check-label">
                      I agree to the terms and conditions.
                    </label>
                    <hr />
                    <ReCAPTCHA
                      ref="recaptcha"
                      sitekey="6LdA7GMUAAAAANYVPP-K1G8PQu-yjMtYp5yE3MGG"
                      onChange={() => this.setState({ recaptcha: true })}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn btn-primary btn-block mt-6"
                    />
                  </div>
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
