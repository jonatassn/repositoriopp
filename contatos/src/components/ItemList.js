import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import Item from './Item';

const ItemList = props => {

    const { itens } = props;

    return (
        <FlatList
            style = { style.main }
            data = { itens }
            renderItem = { ({ item }) => ( 
                <Item 
                    pessoa={ item } 
                    onPress={(pessoa) => props.onPress(pessoa) } 
                    onPressImg={(pessoa) => { props.onPressImg(pessoa) }}
                /> 
            )}
            keyExtractor = { item => item.login.uuid }
        />
    );
};

const style = StyleSheet.create({
    main: {
        backgroundColor : 'white',
    },
});

export default ItemList;