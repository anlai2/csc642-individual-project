import React, { Component } from 'react';
import { Marker } from 'google-maps-react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../layout/Footer';
import MapComponent from '../map/Map';
import { convertAddress } from '../../actions/authActions';
import Geocode from 'react-geocode';

class Verify extends Component {
  //TODO: this.state = { user: {}} and uncomment componentWillMount for production.
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ user: nextProps.auth.user });
  }

  componentDidMount() {
    if (_.isEmpty(this.props.auth.user)) {
      this.props.history.push('/register');
      return;
    } else {
      console.log('YOU FILLED IT OUT WOOHOO');
      this.setState({ user: this.props.auth.user });
    }
  }

  render() {
    console.log(this.state);
    console.log(this.props);

    const {
      firstName,
      lastName,
      address,
      zipcode,
      education,
      income,
      phone,
      email
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
                <MapComponent
                  google={this.props.google}
                  markerPosition={{
                    lat:
                      this.state.user.latlng === undefined
                        ? 37.7212
                        : this.state.user.latlng.lat,
                    lng:
                      this.state.user.latlng === undefined
                        ? -122.476844
                        : this.state.user.latlng.lng
                  }}
                  center={{
                    lat:
                      this.state.user.latlng === undefined
                        ? 37.7212
                        : this.state.user.latlng.lat,
                    lng:
                      this.state.user.latlng === undefined
                        ? -122.476844
                        : this.state.user.latlng.lng
                  }}
                  zoom={15}
                  onClick={this.onMapClicked}
                />
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
  { convertAddress }
)(Verify);
