import React, {Component} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

//Componentes
import Header from '../components/header';
import Footer from '../components/footer';
import Map from '../components/map';
import Notification from '../components/notification';
class Main extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../../assets/image/background-main.png')}
        style={styles.image}>
        <Header />
        <Map />
        <Notification />
        <Footer />
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default Main;
