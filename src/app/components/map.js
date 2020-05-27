import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

class Map extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Mapa de Bogotá</Text>
        <View style={styles.map}>
          <MapView
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 270,
    backgroundColor: '#ff0000',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    color: '#ffffff',
    marginTop: 50,
    marginBottom: 35,
    fontFamily: 'Roboto',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
});

export default Map;
