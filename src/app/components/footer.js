//Componente funcional 
import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
    Button,
    TouchableOpacity,
    Alert
} from 'react-native'

function Footer(props) {
    return (
        <SafeAreaView style={styles.footer}>
            <TouchableOpacity onPress={() => Alert.alert('Acción Descargar')}>
                <Image source={require('../../assets/image/descargar.png')} style={styles.icons} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('Acción Ir mapa')}>
                <Image source={require('../../assets/image/mapa.png')} style={styles.mainIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('Acción Ir Perfil')}>
                <Image source={require('../../assets/image/perfil.png')} style={styles.icons} />
            </TouchableOpacity>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#1e5a5a',
        padding: 5,
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        textAlign: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 80,
    },

    icons: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },

    mainIcon: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    }
});

export default Footer;
