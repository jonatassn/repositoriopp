import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/*
const Line = props => {
    const { label, conteudo } = props;
*/

// OUTRA MANEIRA DE IMPLEMENTAR - Passagem de Parâmetro
const Line = ({ label = "??", content = "??"}) => {
    return (
        <View style={style.main}>
            <Text style={[
                style.texto,
                style.label,
                label.length > 8 ? {fontSize: 13} : null
              ]}>{ label }</Text>

            <Text style={[style.text, {flex: 3}]}>{ content }</Text>
        </View>
    );
}

const style = StyleSheet.create({

    main : {
        flexDirection : 'row',
        marginLeft: 10,
        paddingBottom : 1,
    },
    text : {
        alignSelf : 'center',
        color : 'black',
        fontSize : 16,
        paddingLeft : 7,
    },
    label : {
        flex : 1,
        fontWeight : 'bold',
    },
});

export default Line;