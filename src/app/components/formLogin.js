import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-paper';

class FormLogin extends Component {
  state = {};
  fieldRef = React.createRef();

  render() {
    return (
      <View style={styles.input}>
        <TextInput label="Email" value={this.state.text} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    width: 250,
  },
});

export default FormLogin;
