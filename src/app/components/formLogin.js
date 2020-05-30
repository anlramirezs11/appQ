import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class FormLogin extends Component {
  fieldRef = React.createRef();

  render() {
    return (
      <View style={styles.input}>
        <Text>asdas</Text>
        <View>
          <Button onPress={this.onSubmit} title="submit" />
        </View>
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
