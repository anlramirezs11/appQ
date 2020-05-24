import react, {Component} from 'react';
import {ImageBackground, Text, StyleSheet} from 'react-native';

//Componentes
import Header from './components/header';
import Footer from './components/footer';
import Map from './components/map';
import Notification from './components/notification';
import Main from './containers/main';
class AppLayout extends Component {
  render() {
    return (
      <Main>
        <ImageBackground
          source={require('./assets/image/background-main.png')}
          style={styles.image}>
          <Header />
          <Map />
          <Notification />
          <Footer />
        </ImageBackground>
      </Main>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default AppLayout;
