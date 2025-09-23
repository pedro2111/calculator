import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { styles } from './Estilo';

const Button = ({ children, onPress, customStyle }) => {
    return (
        <TouchableOpacity style={[styles.button,customStyle]} onPress={onPress}>
            <Text style={[styles.buttonText]}>{children}</Text>
        </TouchableOpacity>
    )

}

const stylesss = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        borderColor: '#888',
        borderWidth: 2,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',


    }
}
)

export default Button;
