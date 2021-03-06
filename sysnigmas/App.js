
// adb kill-server
// adb start-server

import { createStackNavigator } from 'react-navigation';
import React, {Component} from 'react';

import {View, Text} from 'react-native';

import Login from './src/screens/Login';
import Enigmas from './src/screens/Enigmas';
import Enigma from './src/screens/Enigma';

export default createStackNavigator(
  {
    'Main' : {
        screen : Login
    },
    'Enigmas' : {
      screen : Enigmas,
      navigationOptions : ( {navigation} ) => {
        const nome = 'ENIGMAS';

        return ({ 
          title : nome
        });
      }
    },
    'Enigma' : {
        screen : Enigma,
        navigationOptions : ( {navigation} ) => {
            const nome = 'RESPOSTAS';

            return ({
                title : nome
            });
        }
    }
  },
  {
    navigationOptions : {
      headerTintColor : 'black',
      headerStyle : {
        backgroundColor : '#E8E8E7',
      },
      headerTitleStyle : {
        fontSize : 26,
        color : 'black',
        alignSelf: 'center',
        paddingLeft: 5,
      }
    }
  }
);

/*export default createStackNavigator(
  {
    'Main' : {
        screen : Login
    },
    'Contato' : {
      screen : Enigmas,
      navigationOptions : ( {navigation} ) => {
        const nome = 'ENIGMAS';

        return ({ 
          title : nome 
        });
      }
    } 
  },
  {
    navigationOptions : {
      title : 'Contatos',
      headerTintColor : 'black',
      headerStyle : {
        backgroundColor : '#E8E8E7',
      },
      headerTitleStyle : {
        fontSize : 26,
        color : 'black',
        alignSelf: 'center',
        paddingLeft: 5,
      }
    }
  }
);
*/
