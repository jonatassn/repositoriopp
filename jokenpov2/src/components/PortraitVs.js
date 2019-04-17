import React, {Component} from 'react';
import {View, Image, StyleSheet,PixelRatio} from 'react-native';

class PortraitVs extends Component {
    constructor(props) {
        super(props);
    }

    img = {
        rock: require('../img/pedra_vs.png'),
        scissor: require('../img/tesoura_vs.png'),
        spock: require('../img/spock_vs.png'),
        lizard: require('../img/lagarto_vs.png'),
        paper: require('../img/papel_vs.png'),
    };

	render() {
	    if(this.props.pick === 0) {
            return (
                <View>
                    <Image style={styles.img} source={this.img.rock} />
                </View>
            );
        }else if(this.props.pick === 1) {
            return (
                <View>
                    <Image style={styles.img} source={this.img.scissor} />
                </View>
            );
        }else if(this.props.pick === 2) {
            return (
                <View>
                    <Image style={styles.img} source={this.img.spock} />
                </View>
            );
        }else if(this.props.pick === 3) {
            return (
                <View>
                    <Image style={styles.img} source={this.img.lizard} />
                </View>
            );
        }
        return (
            <View>
                <Image style={styles.img} source={this.img.paper} />
            </View>
        );

	}
}

const styles = StyleSheet.create({
	img: {
		width: PixelRatio.getPixelSizeForLayoutSize(48),
		height: PixelRatio.getPixelSizeForLayoutSize(48),
	},
});

export default PortraitVs;
