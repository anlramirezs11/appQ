import React, {Component} from 'react';
import {Alert} from 'react-native';

//Containers
import Main from './containers/main';
import Login from './containers/login';
import SingUp from './containers/singUp';
import InitialView from './containers/initialView';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
import initialState from '../assets/data/initialState.json';
import motoringNetwork from '../assets/data/motoringEstation.json';
import Geolocation from '@react-native-community/geolocation';
import {request, PERMISSIONS} from 'react-native-permissions';

const store = createStore(reducer, initialState);
class AppLayout extends Component {
  componentDidMount() {
    this.requestLocationPermission();
    store.dispatch({
      type: 'SET_STATION_LOCATIONS',
      payload: motoringNetwork,
    });
  }
  requestLocationPermission = async () => {
    var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    if (response === 'granted') {
      this.locateCurrentPosition().then(res =>
        store.dispatch({
          type: 'SET_USER_LOCATION',
          payload: res,
        }),
      );
    }
  };
  locateCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => {
          var userLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.2,
            longitudeDelta: 0.3,
          };
          resolve(userLocation);
        },
        error => reject(error.message),
      );
    });
  };

  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default AppLayout;
