import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button, Paragraph} from 'react-native-paper';

class FormSingUp extends React.Component {
  state = {
    email: '',
    password: '',
  };
  render() {
    return (
      <View style={styles.view}>
        <TextInput
          label="Nombres y Apellidos"
          onChangeText={fullName => (this.state.fullName = fullName)}
        />
        <TextInput
          label="Correo Electrónico"
          onChangeText={email => (this.state.email = email)}
          style={{marginTop: 8}}
        />
        <TextInput
          label="Contraseña"
          secureTextEntry={true}
          onChangeText={password => (this.state.password = password)}
          style={{marginTop: 8}}
        />
        <TextInput
          label="Contraseña"
          secureTextEntry={true}
          onChangeText={password => (this.state.password2 = password)}
          style={{marginTop: 8}}
        />
        <Button
          mode="contained"
          color={'#ffffff'}
          style={styles.buttonPrimary}
          onPress={() => console.log(this.state.password)}>
          Registrarse
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
    marginTop: 65,
    backgroundColor: '#00dd95',
  },

  buttonSecond: {
    width: 150,
    marginHorizontal: 50,
    marginTop: 20,
  },
});

export default FormSingUp;
