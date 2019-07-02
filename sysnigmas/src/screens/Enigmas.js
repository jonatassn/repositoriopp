
// adb kill-server
// adb start-server

import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View, 
  ImageBackground, 
  TextInput, 
  Button,
  ActivityIndicator } from 'react-native';



class Enigmas extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	codigo: 0,
    	loading: false,
    	dados_api: 0,
    	error: false

    }
  
  }

  onChange(key, value) {
  	this.setState({
  		[key]: value,
  	});
  }

  onPress() {

    const url = "http://jonatassn.servegame.com/api/sysnigmas/enigma/" + this.state.codigo;

    this.setState({ loading : true });

    setTimeout(() => {

      axios.get(url)
      	.then( response => {
      		alert(response.data);
      	}).catch(error => {
      		this.setState({
      			carregando: false,
      			error : true
      		});
      	});
   
  	}
  }

  render() {
    return (
      <View style={styles.container}>
      	<Text>Insira o Código do Enigma</Text>

        <TextInput 
        	style={styles.input}
        	placeholder="Código"
        	value={this.state.codigo}
        	maxLength={8}
        	onChangeText={ (value) => this.onChange('codigo', value)}
        />
        <View style={{ margin: 2 }}>
	        <Button 
	          title="Buscar"
	          onPress={ () => { this.onPress() } }
	          color="#4A6C41"
	        />
	    </View>

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

export default Enigmas;