import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class HeaderBar extends React.Component {

  render() {
    return (
       <View style={styles.main}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
              source={ require('../img/contato_icon.png') }
              style={{ width: 42, height: 42 }}
          />
        </View>
        <View style={{flex: 4, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
          <Text style={{ fontSize: 21, fontWeight: '900', color: '#000000' }}>APP: CONTATOS</Text>
          <Text style={{ fontSize: 14, fontWeight: '900', color: '#000000' }}>Axios</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
          <Image
              source={ require('../img/contato_icon.png') }
              style={{ width: 42, height: 42 }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  main: {
    flexDirection: 'row',
    height: '10%',
    backgroundColor: '#E8E8E7',
    justifyContent: 'center', 
    alignItems: 'center',
    borderBottomColor: '#B3AEAE',
    shadowOpacity: 1, 
    shadowColor: 'black', 
    shadowOffset: {
            width: 0,
            height: 10
    },
    elevation: 10,
  },
});