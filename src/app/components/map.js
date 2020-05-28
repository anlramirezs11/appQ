import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';

class Map extends Component {
  state = {
    motoringNetwork: [
      {
        name: 'Estación Guaymaral',
        description: 'Autopista Norte # 205-59',
        latitude: 4.7837556,
        longitude: -74.04335,
        pollutionLevel: 10,
      },
      {
        name: 'Estación Usaquén',
        description: 'Carrera 7B Bis # 132-11',
        latitude: 4.71035,
        longitude: -74.030417,
        pollutionLevel: 10,
      },
      {
        name: 'Estación Suba',
        description: 'Carrera 111 # 159A-61',
        latitude: 4.7612472,
        longitude: -74.0934611111111,
        pollutionLevel: 10,
      },
      {
        name: 'Estación Bolivia',
        description: 'Avenida Calle 80 # 121-98',
        latitude: 4.7358667,
        longitude: -74.1258833333333,
        pollutionLevel: 6,
      },
      {
        name: 'Estación Las Ferias',
        description: 'Avenida Calle 80 # 69Q-50',
        latitude: 4.6907,
        longitude: -74.0824833333333,
        pollutionLevel: 7,
      },
      {
        name: 'Estación P. Simón Bolívar',
        description: 'Calle 63 # 59A-06',
        latitude: 4.6584667,
        longitude: -74.0839666666666,
        pollutionLevel: 4,
      },
      {
        name: 'Estación Sagrado Corazón',
        description: 'Calle 37 # 8-40',
        latitude: 4.6254861,
        longitude: -74.0669805555555,
        pollutionLevel: 3,
      },
      {
        name: 'Estación Fontibón',
        description: 'Carrera 96G # 17B-49',
        latitude: 4.6701,
        longitude: -74.14155,
        pollutionLevel: 11,
      },
      {
        name: 'Estación Puente Aranda',
        description: 'Calle 10 # 65-28',
        latitude: 4.6317667,
        longitude: -74.1174833333333,
        pollutionLevel: 12,
      },
      {
        name: 'Estación Kennedy',
        description: 'Carrera 80 # 40-55 sur',
        latitude: 4.62505,
        longitude: -74.1613333333333,
        pollutionLevel: 7,
      },
      {
        name: 'Estación Carvajal',
        description: 'Autopista Sur # 63-40',
        latitude: 4.5956167,
        longitude: -74.1485833333333,
        pollutionLevel: 1,
      },
      {
        name: 'Estación Tunal',
        description: 'Carrera 24 # 49-86 sur',
        latitude: 4.576225,
        longitude: -74.1309555555555,
        pollutionLevel: 12,
      },
      {
        name: 'Estación San Cristóbal',
        description: 'Autopista Sur # 63-40',
        latitude: 4.5725528,
        longitude: -74.0838138888888,
        pollutionLevel: 9,
      },
    ],
  };
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
            region={{
              latitude: 4.6997102,
              longitude: -74.091749,
              latitudeDelta: 0.2,
              longitudeDelta: 0.3,
            }}
            showsTraffic={true}>
            {this.state.motoringNetwork.map((marker, index) => (
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

export default Map;
