import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {connect} from 'react-redux';

const data = require('../../assets/data/motoringEstation.json');

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
    this.state = data;
    this.state.initialPosition = {
      latitude: 4.70309,
      longitude: -74.08083333333333,
      latitudeDelta: 0.2,
      longitudeDelta: 0.3,
    };
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
            initialRegion={this.state.initialPosition}
            showsTraffic={true}
            loadingBackgroundColor="#1e5a5a">
            {this.state.motoringNetwork &&
              this.state.motoringNetwork.map((marker, index) => (
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
const mapStateToProps = state => {
  return {
    location: state.initalState.location,
  };
};

export default connect(mapStateToProps)(Map);
