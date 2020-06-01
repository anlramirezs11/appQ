import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, Image, View} from 'react-native';
import FormLogin from '../components/formLogin';

class Login extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../../assets/image/background-login.png')}
        style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.title}>Bienvenido</Text>
          <Image
            source={require('../../assets/image/user-circle-solid.png')}
            style={styles.icon}
          />
          <FormLogin />
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
    fontSize: 28,
    color: '#ffffff',
    marginBottom: 15,
    fontFamily: 'Roboto',
    letterSpacing: 4,
    textTransform: 'uppercase',
  },
  icon: {
    marginTop: 50,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default Login;
