import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet, ImageBackground} from 'react-native';
import axios from "axios";

class Enigma extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: 0,
            enigma : [],
            numeroLetras: 0,
            resposta: "",
            status : true,

        }
    }

    componentDidMount(){
        this.carregaEnigma();
    }

    carregaEnigma(){
        const {user} = this.props.navigation.state.params.dados;
        const {enigma} = this.props.navigation.state.params.dados;
        const numeroLetras = enigma.resposta.length;

        this.setState({
            user : user,
            enigma : enigma,
            numeroLetras : numeroLetras,
        });
        this.verifResposta(this.props.navigation.state.params.dados.enigma.id, this.props.navigation.state.params.dados.user);

    }

    verifResposta(enigma, user) {
        const url = "http://jonatassn.servegame.com/api/sysnigmas/enigma/" + enigma + "/user/" + user ;
        const self = this;
        let estado = "";

            axios.get(url)
                .then(response => {
                    estado = response.data.msg;
                    if(estado === true) {
                        self.setState({
                            status: true,
                        });
                    }else {
                        self.setState({
                            status: false,
                        });
                    }
                })
                .catch(() => {});

    }

    navigate(id) {
        this.props.navigation.navigate('Enigmas', {id});
    }

    onChange(key, value) {
        this.setState({
            [key] : value,
        });
    }

    onPress() {
        const resposta = this.state.resposta.toUpperCase();

        const dados = {
            id_user : this.state.user,
            id_enigma : this.state.enigma.id,
        }

        if(resposta == this.state.enigma.resposta) {
            alert("Acertou");
            setTimeout( () => {
                axios({
                    method: 'post',
                    url: 'http://jonatassn.servegame.com/api/sysnigmas/respostas/',
                    data: dados,
                    headers:{
                        "Content-Type": "application/json"
                    },
                }).then(response => {

                    if(response.data.msg == true) {
                        //alert(response.data.msg)
                    }

                }).catch(error => {
                    alert("[ERROR] Houve um problema ao acessar a API!");
                    this.setState({ loading : false });
                });
                this.navigate(this.state.user);
            }, 1000);
        }
        else {
            alert("Errou");
        }

    }

    renderList() {
        if(this.state.status) {
            return(
                <View style={styles.footer}>
                    <Text style={ [styles.text, {fontSize: 20} ]}>Você Já Respondeu Esse enigma</Text>
                </View>
            );
        }
        return(

            <View style={styles.footer}>

                <Text style={ styles.text } >{this.state.enigma.enigma}</Text>
                <Text style={ styles.text }>{this.state.numeroLetras} Letras (sem acentos)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Resposta"
                    value={this.state.codigo}
                    maxLength={this.state.numeroLetras}
                    onChangeText={ (value) => this.onChange('resposta', value)}
                />
                <View style={{ margin: 2 }}>
                    <Button
                        title="ENVIAR"
                        onPress={ () => { this.onPress() } }
                        color="#4A6C41"
                    />
                </View>
            </View>
        );
    }

    render() {
        return(
            <View style={styles.container}>
                <ImageBackground
                    source={ require('../img/sysnigma_ico.png') }
                    style={{width: '100%', height: '100%'}}>
                    {this.renderList()}

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
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '900',
    color: '#4A6C41',
    paddingLeft: 10,
    },
    footer: {
    position: 'absolute',
    bottom: 50,
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
    textAlign: 'center',
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


export default Enigma;
