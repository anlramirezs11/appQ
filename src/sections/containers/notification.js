import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

class Notification extends Component {
    render() {
        return (
            <View>

                <Text style={styles.text}>Chapinero es la localidad más contaminada</Text>
                <Text style={styles.text}>Engativá es la localidad menos contaminada</Text>
                <Text style={styles.text}>Notificacion 3</Text>
                <Text style={styles.text}>Notificacion 4</Text>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    text:{
        textAlign: 'center' ,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#ffffff',
        margin: 10,
    }
});

export default Notification;