import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import UpperCase from '../util/UpperCase';

const Item = props => {

    return (
            <View style={style.view_item}>
                <TouchableOpacity onPress={ () => { props.onPressImg(props.pessoa) } }>
                    <Image style={style.avatar} source={{ uri : props.pessoa.picture.thumbnail }} />
                </TouchableOpacity>
                <View style={style.text}>
                    <TouchableOpacity onPress={ () => { props.onPress(props.pessoa) } }>
                        <Text style={{fontSize: 21}}>
                             {UpperCase(props.pessoa.name.first)} {UpperCase(props.pessoa.name.last)}
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </View>
    );
}

const style = StyleSheet.create({
    view_item: {
        height : 60,
        borderBottomWidth : 1,
        borderBottomColor : '#000',
        alignItems : 'center',
        flexDirection : 'row',
    },
    text :{
        flex : 10,
        paddingLeft : 12,
    },
    avatar: {
        flex: 2,
        aspectRatio : 1, // não permite que React redimenzione a imagem
        borderRadius : 36,
        margin : 3,
    }
});

export default Item;