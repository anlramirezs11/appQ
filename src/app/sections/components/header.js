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

function Header(props) {
    return (
        <View style={styles.Header}>
            <TouchableOpacity onPress={() => Alert.alert('Acción Atras')}>
                <Image source={require('../../../assets/image/back.png')} style={styles.icons} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Header: {
        padding: 5,
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
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

export default Header;
