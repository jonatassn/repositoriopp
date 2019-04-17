import React, {Component} from 'react';
import {TouchableOpacity, Image, StyleSheet, View, PixelRatio} from 'react-native';

class TouchableVs extends Component {
    constructor(props){
        super(props);
    }

    img = {
        rock: require('../img/pedra_vs.png'),
        scissor: require('../img/tesoura_vs.png'),
        spock: require('../img/spock_vs.png'),
        lizard: require('../img/lagarto_vs.png'),
        paper: require('../img/papel_vs.png'),
    };

    onPress(imagevs){
        return this.props.vsOnPress(imagevs);
    };

	render() {
	    if(this.props.imagevs === 0) {
            return(
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this.onPress(0)}>
                        <Image style={styles.img} source={this.img.rock}/>
                    </TouchableOpacity>
                </View>
            );
        }else if(this.props.imagevs === 1) {
            return(
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this.onPress(1)}>
                        <Image style={styles.img} source={this.img.scissor}/>
                    </TouchableOpacity>
                </View>
            );
        }else if(this.props.imagevs === 2) {
            return(
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this.onPress(2)}>
                        <Image style={styles.img} source={this.img.spock}/>
                    </TouchableOpacity>
                </View>
            );
        }else if(this.props.imagevs === 3) {
            return(
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this.onPress(3)}>
                        <Image style={styles.img} source={this.img.lizard}/>
                    </TouchableOpacity>
                </View>
            );
        }
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.onPress(4)}>
                    <Image style={styles.img} source={this.img.paper}/>
                </TouchableOpacity>
            </View>
        );



	}
}

const styles = StyleSheet.create({
	container: {
	},
	img: {
		width: PixelRatio.getPixelSizeForLayoutSize(30),
		height: PixelRatio.getPixelSizeForLayoutSize(30),
	},
});

export default TouchableVs;
