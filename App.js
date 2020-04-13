/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

// Screens
import Main from './src/screens/containers/main'

//Componentes
import Header from './src/sections/components/header'
import Footer from './src/sections/components/footer'


const App: () => React$Node = () => {
  return (
    <Main>
      <Header/>
      <Text>Mapa</Text>
      <Text>Sección de notificaciones</Text>
      <Text>Footer</Text>
      <Footer />
    </Main>
  );
};

export default App;
