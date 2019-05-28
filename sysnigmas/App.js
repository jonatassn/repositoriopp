
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

import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      login: "",
      senha: "",
      loading: false,
      user : [],
    };
  }

  onChange(key, value) {
    this.setState({
      [key] : value,
    })
  }

  onPress() {

    const dados = {
      login: this.state.login,
      senha: this.state.senha,
    };

    this.setState({ loading : true });

    setTimeout(() => {

      axios({ 
          method: 'post', 
          url: 'http://www.gileduardo.com.br/react/api_charadas/rest.php/auth',
          data: dados,
          headers:{
            "Content-Type": "application/json" 
          }, 
        }).then(response => {

          if(response.data.id < 0) {
            alert(response.data.nome)  
            this.setState({
              login : "",
              senha : "",
            })  
          }
          else {
            alert('[OK] Autenticação efetuada com sucesso!')   
          }
          
          this.setState({ loading : false });

        }).catch(error => {
          alert("[ERROR] Houve um problema ao acessar a API!");
          this.setState({ loading : false });
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
        <View>
          <TextInput
            style={ styles.input }
            placeholder = 'usuario'
            value = { this.state.login }
            maxLength={15} 
            onChangeText = { (value) => this.onChange('login', value) }
          />
          <TextInput
            style={ styles.input }
            placeholder = 'senha'
            value = { this.state.senha }
            maxLength={15} 
            onChangeText = { (value) => this.onChange('senha', value) }
            secureTextEntry={true}
          />
          <View style={{ margin: 2 }}>
            <Button 
              title="Autenticar"
              onPress={ () => { this.onPress() } }
              color="#4A6C41"
            />
          </View>
        </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground 
          source={ require('./src/img/sysnigma_ico.png') } 
          style={{width: '100%', height: '100%'}}>
            <Text style={[styles.text, {fontSize: 36}]}>Sysnigmas </Text>
            <Text style={[styles.text, {fontSize: 24}]}>Mobile </Text>
            <View style={styles.footer}>
              { this.renderLoad() }
            </View>
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
