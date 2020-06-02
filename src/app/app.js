import React, {Component} from 'react';
//Containers
import Main from './containers/main';
import Login from './containers/login';
import SingUp from './containers/singUp';


class AppLayout extends Component {
  render() {
    return (
      // <Main />
      <SingUp />
    );
  }
}

export default AppLayout;
