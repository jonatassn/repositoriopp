import React, {Component} from 'react';
import {Image, StyleSheet, PixelRatio, View, Button} from 'react-native';

class Header extends Component {

    constructor(props){
        super(props);
    }
    img = {
        header : require('../img/header_p.png'),
        regra : require('../img/regra.png'),
    };

	render() {
        if(this.props.imageHeader === 0) {
            return(
                <View style={styles.container}>
                    <Image style={styles.img} source={this.img.header}/>
                </View>
            );
        }
        return(
            <View style={styles.container}>
                <Image style={styles.img} source={this.img.regra}/>
            </View>
        );
	}
}

const styles = StyleSheet.create({
	container: {
		borderWidth: 3,
		borderColor: '#000000',
		width: '98%',
		marginTop: 4,
	},
	img: {
		height: PixelRatio.getPixelSizeForLayoutSize(120),
		resizeMode: 'stretch',
		width: '100%',
	},
});

export default Header;
