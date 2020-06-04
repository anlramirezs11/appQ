import React, {Component} from 'react';
//Containers
import Main from './containers/main';
import Login from './containers/login';
import SingUp from './containers/singUp';
import InitialView from './containers/initialView';

class AppLayout extends Component {
  render() {
    return (
      // <Main />
      <InitialView />
    );
  }
}

export default AppLayout;
