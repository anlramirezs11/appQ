import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button, Paragraph} from 'react-native-paper';

class FormLogin extends React.Component {
  state = {
    email: '',
    password: '',
  };
  render() {
    return (
      <View style={styles.view}>
        <Paragraph style={styles.paragraph}>
          Gracias por usar App-Q, una app ára informar el esatdo del aire en la
          ciudad de Bogotá
        </Paragraph>
        <TextInput
          label="Correo Electrónico"
          onChangeText={email => (this.state.email = email)}
        />
        <TextInput
          label="Contraseña"
          secureTextEntry={true}
          onChangeText={password => (this.state.password = password)}
          style={{marginTop: 15}}
        />
        <Button
          mode="contained"
          color={'#ffffff'}
          style={styles.buttonPrimary}
          onPress={() => console.log(this.state.password)}>
          Login
        </Button>
        <Button mode="contained" color={'#ffffff'} style={styles.buttonSecond}>
          Volver
        </Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    width: 250,
    paddingVertical: 15,
  },
  paragraph: {
    color: '#ffffff',
    fontSize: 18,
    marginVertical: 15,
  },
  buttonPrimary: {
    width: 150,
    marginHorizontal: 50,
    marginTop: 85,
    backgroundColor: '#00dd95',
  },

  buttonSecond: {
    width: 150,
    marginHorizontal: 50,
    marginTop: 20,
  },
});

export default FormLogin;
