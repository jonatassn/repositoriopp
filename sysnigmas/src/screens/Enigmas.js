import React, { Component } from 'react';
import {StyleSheet, View, Text, TextInput, Button, ImageBackground} from 'react-native';
import axios from 'axios';

class Enigmas extends Component{
    constructor(props) {
        super(props);
        this.state = {
            codigo : "",
            loading: false,
            error: "",
            acertos: "0",
            status : false,
        }
    }

    onChange(key, value) {
        this.setState({
            [key]: value,
        });
    }

    componentDidMount(){
        this.calcAcertos();

    }

    calcAcertos() {
        const url = "http://jonatassn.servegame.com/api/sysnigmas/respostas/user/" + this.props.navigation.state.params.id;
        setTimeout(() => {
            axios.get(url)
                .then(response => {
                    const respostas = response.data.length;
                    this.setState({
                        acertos : respostas,
                    });
                })
                .catch(() => {

                });
        },1000);
    }



    onPress() {
        const url = "http://jonatassn.servegame.com/api/sysnigmas/enigma/" + this.state.codigo;
        this.setState({ loading : true });

        setTimeout(() => {
            axios.get(url)
                .then(response => {
                    const enigma = response.data;
                    if(enigma[0].id !== 0) {
                        //alert(enigma[0].enigma);
                        if(!this.state.status) {
                            //this.props.navigation.navigate('Enigma',)
                            let dados = {
                                enigma : enigma[0],
                                user : this.props.navigation.state.params.id,
                            };
                            this.props.navigation.navigate('Enigma', {dados});
                        }
                    }
                })
                .catch(() => {

                });
        },1000);

    }

    render() {
        return(
            <View style={styles.container}>
                <ImageBackground
                    source={ require('../img/sysnigma_ico.png') }
                    style={{width: '100%', height: '100%'}}>
                    <Text style={[styles.text, {fontSize: 36, textAlign: 'left'}]}>Acertos </Text>
                    <Text style={[styles.text, {fontSize: 24,  textAlign: 'left'}]}>{this.state.acertos}</Text>

                        <View style={styles.footer}>

                            <Text>{this.state.error}</Text>
                            <Text style={styles.text} >Insira o Código do Enigma</Text>

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
        fontSize: 20,
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

export default Enigmas;
