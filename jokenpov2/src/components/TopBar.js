import React, {Component} from 'react';
import {Text, View, StyleSheet, PixelRatio,TouchableOpacity, Image } from 'react-native';

class TopBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity onPress={() => this.props.gameOnPress()}>
                        <Text style={styles.game}>
                            GAME
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.props.resetOnPress()}>
                        <Image source={require('../img/reset.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000077',
        width: '100%' ,
        flexDirection: 'row',
        height: PixelRatio.
            getPixelSizeForLayoutSize(16),
        justifyContent: 'space-between',
    },
    game: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
    }
});

export default TopBar
