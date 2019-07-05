/*
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View, 
  ImageBackground, 
  TextInput, 
  Button,
  ActivityIndicator } from 'react-native';

import axios from 'axios';

export default class Menu extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      loading : false,
      charadas : [],
    };
  }

  onPressChar() {

    /*this.setState({ loading : true });

    setTimeout(() => {    
      axios.get('http://www.gileduardo.com.br/react/api_charadas/rest.php/charadas')
        .then(response => {
            this.setState({ 
              charadas : response.data,
              loading : false
            });

            alert('OK')

        }).catch(error => {
            this.setState({
                loading : false,
            });
            alert('ERROR')
        });
    }, 1000);
  }

  renderLoad() {

    if(this.state.loading) {
      return (
        <View style={ {flex: 1, justifyContent: 'center', paddingBottom: 10} }>
          <ActivityIndicator 
            size = "large" 
            color="#AA0000"
          />
        </View>
      )
    }

    return (
        <View> </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground 
          source={ require('../img/sysnigma_ico.png') } 
          style={{width: '100%', height: '100%'}}>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#4A6C41',
    borderWidth: 3,
    backgroundColor: '#FFF',
  },
  text : {
    fontSize: 36, 
    fontWeight: '900', 
    color: '#4A6C41', 
    paddingLeft: 10,
  },
  footer: {
    position: 'absolute', 
    bottom: 0,
    height: 138,
    width: '96%',
    margin: '2%',
    marginBottom: '10%',
    borderWidth: 3,
    borderColor: '#4A6C41',
    shadowOpacity: 1, 
    shadowColor: 'black', 
    shadowOffset: {
            width: 0,
            height: -10
    },
    elevation: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#4A6C41',
    margin: 2,
    padding: 2,
    color: '#4A6C41'
  },
});
*/
