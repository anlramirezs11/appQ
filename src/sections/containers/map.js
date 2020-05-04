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
        height: 300,
        backgroundColor: '#ff0000',
    },
    title:{
        textAlign: 'center' ,
        fontWeight: 'bold',
        fontSize: 30,
        color: '#ffffff',
        marginBottom: 40,
    }
});

export default Map;