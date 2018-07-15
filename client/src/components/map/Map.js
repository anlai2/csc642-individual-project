import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapComponent extends Component {
  componentWillMount() {
    console.log(this.props);
  }
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={13}
        initialCenter={this.props.center}
      >
        <Marker
          position={{
            lat: this.props.markerPosition.lat,
            lng: this.props.markerPosition.lng
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAv3zg5iVWUsWLoAcsDO1-DqyWlcPsAHow'
})(MapComponent);
