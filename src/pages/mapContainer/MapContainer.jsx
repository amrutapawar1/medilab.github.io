import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const getStyle = (width) => {
  return {
    width: '100%',
    height: '100%',
    zIndex: '0'
  }
}
const mapStyles = {
  width: '100%',
  height: '100%',
  zIndex: '0',
};

class MapContainer extends Component {
  render() {
    return (
      <Map
        containerStyle={mapStyles}
        google={this.props.google}
        zoom={13}
        centerAroundCurrentLocation={true}
        initialCenter={{
          lat: 18.626772,
          lng: 73.744164
        }}
        visible={true}>
        <Marker onClick={this.onMarkerClick}> name={'Current location'} </Marker>
      </Map>
    );
  }
}
const DisplayMap = GoogleApiWrapper({
  apiKey: 'AIzaSyDLDsPjHArDgR0UNIf13r56TC3mydGBMJ0'
})(MapContainer);

export default DisplayMap;