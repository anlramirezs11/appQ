/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  ImageBackground,
  Text,
  StyleSheet,
} from 'react-native';

// Screens
import Main from './src/app/containers/main'

//Componentes
import Header from './src/app/components/header'
import Footer from './src/app/components/footer'
import Map from './src/app/components/map'
import Notification from './src/app/components/notification'


const App: () => React$Node = () => {
  return (
    <Main>
      <ImageBackground source={require('./src/assets/image/background-main.png')} style={styles.image}>
        <Header />
        <Map />
        <Notification/>
        <Footer />
      </ImageBackground>

    </Main>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});

export default App;
