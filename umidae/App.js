/**
  * INSTALAÇÃO AXIOS
  * $ npm install axios --save
*/

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import axios from 'axios';
import MonitoringTable from './src/components/MonitoringTable';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class App extends Component{

  constructor(props) {
    super(props);

    this.state = {
        dados: [],
        dados_api : [],
        total: 5,
        temperatura: "",
        umididade: "",
        carregando : false,
        error : false
    };
  }

  async onPress() {

    if(this.state.temperatura != "" && this.state.umidade != "") {

      const dados = {
        temp: this.state.temperatura,
        umid: this.state.umidade,
      };

      axios({ 
          method: 'post', 
          url: 'http://gileduardo.com.br/react/api/rest.php',
          headers:{
            "Content-Type": "application/json" 
          }, 
          data: dados
        }).then(response => {
          
          // Recarrega os dados do Monitoramento
          this.setState({ carregando : true });
          setTimeout(() => {
            const url = 'http://gileduardo.com.br/react/api/rest.php/' + this.state.total;
            axios.get(url)
            .then(response => {
                this.setState({
                    dados : response.data,
                    carregando : false
                });
            }).catch(error => {
                this.setState({
                    carregando : false,
                    error : true
                });
            });
          }, 1000);

        }).catch(error => {
          alert('Houve um erro inesperado!!!');
        });
    }
  }

  onChange(key, value) {
    this.setState({
      [key] : value,
    })
  }

  componentDidMount() {

    this.setState({ carregando : true });

    const url = 'http://gileduardo.com.br/react/api/rest.php/' + this.state.total;

    setTimeout(() => {
      // Dados Básicos da API
      axios.get('http://gileduardo.com.br/react/api/rest.php')
        .then(response => {
            this.setState({
                dados_api : response.data,
            });
        }).catch(error => {
            this.setState({
                carregando : false,
                error : true
            });
        });
        // Dados do Monitoramento - Temperatura e Umidade
        axios.get(url)
        .then(response => {
            this.setState({
                dados : response.data,
                carregando : false
            });
        }).catch(error => {
            this.setState({
                carregando : false,
                error : true
            });
        });
      }, 1000);
    }

  render() {
    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Header</Title>
                </Body>
                <Right />
            </Header>
            <Content>
                <Text>
                    This is Content Section
                </Text>
            </Content>
            <Footer>
                <FooterTab>
                    <Button full>
                        <Text>Footer</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBF4BF',
  },
  welcome: {
    fontSize: 16,
    color: '#48824E',
    margin: 2,
  },
  input : {
      paddingLeft : 5,
      paddingRight : 5,
      paddingBottom : 10,
      fontSize : 18,
      fontWeight : 'bold',
  }
});
