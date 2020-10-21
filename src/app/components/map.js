import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    initalLocation: state.initalState,
    stationLocations: state.motoringNetwork,
  };
};
class Map extends Component {
  selectColorMarker(marker) {
    if (marker.pollutionLevel >= 9) {
      return 'purple';
    } else if (marker.pollutionLevel >= 6 && marker.pollutionLevel < 9) {
      return 'tomato';
    } else if (marker.pollutionLevel >= 3 && marker.pollutionLevel < 6) {
      return 'gold';
    }
    return 'green';
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>Mapa de Bogotá</Text>
        <View style={styles.map}>
          <MapView
            style={styles.map}
            ref={map => (this._map = map)}
            showsUserLocation={true}
            followsUserLocation={true}
            userLocationFastestInterval={500}
            initialRegion={this.props.initalLocation}
            showsTraffic={true}
            loadingBackgroundColor="#1e5a5a">
            {this.props.stationLocations &&
              this.props.stationLocations.map((marker, index) => (
                <Marker
                  draggable
                  coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                  }}
                  title={marker.name}
                  description={marker.description}
                  key={index}
                  pinColor={this.selectColorMarker(marker)}
                />
              ))}
          </MapView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 400,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    color: '#ffffff',
    marginTop: 50,
    marginBottom: 15,
    fontFamily: 'Roboto',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
});

export default connect(mapStateToProps)(Map);
