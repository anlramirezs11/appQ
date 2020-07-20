import React, {Component} from 'react';
//Containers
import Main from './containers/main';
import Login from './containers/login';
import SingUp from './containers/singUp';
import InitialView from './containers/initialView';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
import initialState from '../../initialState.json';

const store = createStore(reducer, initialState);

class AppLayout extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default AppLayout;
