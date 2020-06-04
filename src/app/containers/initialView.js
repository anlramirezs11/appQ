import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, Image, View} from 'react-native';
import {Button} from 'react-native-paper';

class InitialView extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../../assets/image/background-initial-view.png')}
        style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.title}>App-Q</Text>
          <Image
            style={styles.logo}
            source={require('../../assets/image/logo.png')}
          />
          <View style={styles.containerButtons}>
            <Button
              mode="contained"
              color={'#ffffff'}
              style={styles.buttonSecond}
              onPress={() => console.log('asdasdasd')}>
              Login
            </Button>
            <Button
              mode="contained"
              color={'#ffffff'}
              style={styles.buttonPrimary}
              onPress={() => console.log('asdasdasd')}>
              Signup
            </Button>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#ffffff',
    marginVertical: 45,
    fontFamily: 'Roboto',
    letterSpacing: 6,
    fontStyle: 'italic',
  },
  logo: {
    marginTop: 50,
  },
  containerButtons: {
    marginTop: 140,
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  buttonPrimary: {
    width: 100,
    backgroundColor: '#00dd95',
  },

  buttonSecond: {
    width: 100,
  },
});

export default InitialView;
