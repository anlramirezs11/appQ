import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

class Map extends Component {
    render() {
        return (
            <View>
                <Text style={styles.title}>Mapa de Bogotá</Text>
                <View style={styles.map}>
                    <Text>asdafaf</Text>
                </View>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: 270,
        backgroundColor: '#ff0000'
    },
    title:{
        textAlign: 'center' ,
        fontWeight: 'bold',
        fontSize: 28,
        color: '#ffffff',
        marginTop: 50,
        marginBottom: 35,
        fontFamily: 'Roboto',
        letterSpacing: 3,
        textTransform: 'uppercase'
    }
});

export default Map;