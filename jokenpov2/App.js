/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Image, View, PixelRatio, Button} from 'react-native';
import Header from "./src/components/Header";
import TouchableVs from "./src/components/TouchableVs";
import PortraitVs from "./src/components/PortraitVs";
import TopBar from "./src/components/TopBar";
import PainelScore from "./src/components/PainelScore";
import Footer from "./src/components/Footer";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            headerimg: 0,
            playerpick: 0,
            androidpick: 0,
            playerscore: 0,
            androidscore: 0,
        };
    }


    toogleHeaderImg() {
        if(this.state.headerimg === 0) {
            this.setState({
               headerimg: 1,
            });
        }
        else {
            this.setState({
                headerimg: 0,
            });
        }
    }

    setPlayerPick(pick) {
        this.setState({
           playerpick: pick,
        });
        this.rollAndroidPick(2);

    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    setAndroidPick() {
        this.setState({
            androidpick: Math.floor(Math.random() * 5),
        });
    }

    async rollAndroidPick(times) {
        var a, b;
        for(a = 0 ; a<times; a++) {
            for (b = 0; b < 5; b++) {
                this.setState({
                    androidpick: Math.floor(Math.random() * 5),
                });
                await this.sleep(60);
            }
        }
        this.setAndroidPick();
        this.setWinner(this.getWinner());
    }

    setWinner(winner){
        if(winner === 1) {
            this.setState({
                playerscore: this.state.playerscore+1,
            });
        }
        else if(winner === 0) {
            this.setState({
                androidscore: this.state.androidscore+1,
            });
        }
    }


    getWinner() {
        if(this.state.playerpick == 0) {
            if(this.state.androidpick == 1 || this.state.androidpick == 3) {
                return 1;
            }
            else if(this.state.playerpick == this.state.androidpick) {
                return 2;
            }
        }
        else if(this.state.playerpick == 1) {
            if(this.state.androidpick == 3 || this.state.androidpick == 4) {
                return 1;
            }
            else if(this.state.playerpick == this.state.androidpick) {
                return 2;
            }
        }
        else if(this.state.playerpick == 2) {
            if(this.state.androidpick == 0 || this.state.androidpick == 1) {
                return 1;
            }
            else if(this.state.playerpick == this.state.androidpick) {
                return 2;
            }
        }
        else if(this.state.playerpick == 3) {
            if(this.state.androidpick == 2 || this.state.androidpick == 4) {
                return 1;
            }
            else if(this.state.playerpick == this.state.androidpick) {
                return 2;
            }
        }
        else if(this.state.playerpick == 4) {
            if(this.state.androidpick == 0 || this.state.androidpick == 2) {
                return 1;
            }
            else if(this.state.playerpick == this.state.androidpick) {
                return 2;
            }
        }
        return 0;

    }

    formatScore(score) {
        if(score<10) {
            return "0" + score;
        }
        return score;
    }

    resetScore() {
        this.setState({
            playerscore: 0,
            androidscore: 0,
            playerpick: 0,
            androidpick: 0,
        });
    }


  render() {
    return (
        <View style={styles.container}>
            <TopBar gameOnPress={() => this.toogleHeaderImg()} resetOnPress={() => this.resetScore()}/>
            <Header imageHeader={this.state.headerimg}/>
            <View style={styles.containervs}>
                <TouchableVs vsOnPress={() => this.setPlayerPick(0)} imagevs={0} style={styles.touchablevs}/>
                <TouchableVs vsOnPress={() => this.setPlayerPick(1)} imagevs={1} style={styles.touchablevs}/>
                <TouchableVs vsOnPress={() => this.setPlayerPick(2)} imagevs={2} style={styles.touchablevs}/>
                <TouchableVs vsOnPress={() => this.setPlayerPick(3)} imagevs={3} style={styles.touchablevs}/>
                <TouchableVs vsOnPress={() => this.setPlayerPick(4)} imagevs={4} style={styles.touchablevs}/>
            </View>
            <View style={styles.containerpainel}>
                <Image style={styles.img} source={require('./src/img/bar_versus2.png')}/>
                <View style={styles.containerarena} >
                    <View style={styles.containerscore} >
                        <PortraitVs pick={this.state.playerpick} />
                        <View style={styles.painelscore}>
                            <PainelScore score={this.formatScore(this.state.playerscore)} />
                        </View>
                    </View>
                    <Image source={require('./src/img/versus.png')}/>
                    <View style={styles.containerscore} >
                        <PortraitVs pick={this.state.androidpick} />
                        <View style={styles.painelscore}>
                            <PainelScore score={this.formatScore(this.state.androidscore)} />
                        </View>
                    </View>
                </View>
            </View>
            <Footer />
            {/*<Button title={"Testa"} onPress={() => alert(this.state.headerimg)}/>*/}
        </View>

    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#6A0099',
        flexDirection: 'column',
        width: '100%',
        display: 'flex',
    },
    containervs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    touchablevs: {
        padding: 4,
    },
    containerpainel: {
        borderWidth: 3,
        borderColor: '#000000',
        width: '98%',
        marginTop: 4,
        marginBottom: 4,
    },
    img: {
        resizeMode: 'stretch',
        width: '100%',
        height: PixelRatio.getPixelSizeForLayoutSize(48),

    },
    containerarena: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
    },
    containerscore: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 4,
    },
    painelscore: {
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
