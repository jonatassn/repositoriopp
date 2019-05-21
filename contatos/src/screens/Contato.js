
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import call from 'react-native-phone-call';

import Info from '../components/Info';
import UpperCase from '../util/UpperCase';

export default class Contato extends Component {

  render() {

    const { pessoa } = this.props.navigation.state.params;

    const phoneNr = {
      number: pessoa.phone,
      prompt: false,
    }

    return (
        <View style={styles.container}>
            <View style={styles.img}>
              <Image
                source={{ uri : pessoa.picture.large }}
                style={styles.avatar}
              />
            </View>  
            <View style={styles.info}>
              <Info label="E-mail:" content={ pessoa.email } />
              <Info label="Tel.:" content={ pessoa.phone } />
              <Info label="Cel.:" content={ pessoa.cell } />
              <Info label="Cidade:" content={ UpperCase(pessoa.location.city) } />
              <Info label="Estado:" content={ UpperCase(pessoa.location.state) } />
              <Info label="Nacionalidade:" content={ pessoa.nat } />
            </View>
            <TouchableOpacity onPress={() => { call(phoneNr).catch(console.error); }}>
              <Image 
                source={ require('../img/call_icon.png') } 
                style={{ width: 72, height: 72, alignSelf: 'center' }} 
              />
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  img: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  info : {
    backgroundColor : 'white',
    marginTop : 15,
    marginBottom: 8,
    elevation : 1,
  },
  avatar : {
    aspectRatio : 1,
    borderRadius : 30,
  }
});
