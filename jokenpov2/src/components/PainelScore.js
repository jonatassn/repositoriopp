import React, {Component} from 'react';
import {View, Text, StyleSheet, PixelRatio} from 'react-native';

class PainelScore extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.text} >{this.props.score}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
       container: {
           backgroundColor: 'blue',
           width: PixelRatio.getPixelSizeForLayoutSize(20),
            alignItems: 'center',
           borderRadius: 8,
       },
       text: {
            fontWeight: 'bold',
           fontSize: 20,
           color: '#FFFFFF',
       },
});

export default PainelScore;
