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
import Main from './src/screens/containers/main'

//Componentes
import Header from './src/sections/components/header'
import Footer from './src/sections/components/footer'
import Map from './src/sections/containers/map'
import Notification from './src/sections/containers/notification'


const App: () => React$Node = () => {
  return (
    <Main>
      <ImageBackground source={require('./assets/image/background-main.png')} style={styles.image}>
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
