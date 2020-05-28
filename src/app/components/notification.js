import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

class Notification extends Component {
  render() {
    return (
      <View style={styles.notificactions}>
        <View style={styles.notificaction}>
          <Text style={styles.text}>
            Chapinero es la localidad más contaminada
          </Text>
        </View>
        <View style={styles.notificaction}>
          <Text style={styles.text}>
            Engativá es la localidad menos contaminada
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  notificactions: {
    marginTop: 15,
  },
  notificaction: {
    marginVertical: 1,
    marginHorizontal: 20,
    padding: 5,
    backgroundColor: '#1e5a5a',
    borderRadius: 5,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#ffffff',
    margin: 6,
    fontFamily: 'Roboto',
  },
});

export default Notification;
