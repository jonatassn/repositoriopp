import React from 'react';
import {View, Text, StyleSheet,PixelRatio} from 'react-native';

const Footer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{'\u00A9'} 2019, Jonatas Silveira</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000077',
        width: '100%' ,
        flexDirection: 'column',
        height: PixelRatio.getPixelSizeForLayoutSize(16),
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: '#FFFFFF',
    },
});

export default Footer;
