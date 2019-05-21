
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ActivityIndicator} from 'react-native';

import HeaderBar from '../components/HeaderBar';
import ItemList from '../components/ItemList';

import axios from 'axios';
import ImageView from 'react-native-image-view';

export default class Lista extends Component {

  constructor(props) {
      super(props);

      this.state = {
          contatos : [],
          carregando : false,
          error : false,
          images: [],
          visible: false,
          nome: '',
      };
  }

  componentDidMount() {

    this.setState({ carregando : true });

    setTimeout(() => {
      axios
          .get('https://randomuser.me/api/?nat=br&results=12')
          .then(response => {
              const { results } = response.data;
              this.setState({
                  contatos : results,
                  carregando : false
              });
          }).catch(error => {
            this.setState({
                carregando : false,
                error : true
            });
          });
    }, 1000)
  }

  onPress(pessoa) {

    const images = [{
        source: { uri: pessoa.picture.large },
        width: 240,
        height: 240,
    },];

    this.setState({
      images: images,
      visible: true,
    });
  }

  navigate(pessoa) {
    this.props.navigation.navigate('Contato', {pessoa});
  }


  renderList() {

    if(this.state.carregando) {
      return <ActivityIndicator size = "large" color="#AA0000"/>;
    }
    if(this.state.error) {
      return <Text> Ops!!! Algo deu errado!!!</Text>;
    }
    return (
      <ItemList 
        itens={this.state.contatos} 
        onPress={ (pessoa) => { this.navigate(pessoa) }}
        onPressImg={(pessoa) => { this.onPress(pessoa) }}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.list}>
          { this.renderList() }
        </View>
        <ImageView
          images={this.state.images}
          imageIndex={0}
          isVisible={this.state.visible}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  list: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 1,
  }
});
