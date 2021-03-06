/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View,Image,Navigator} from 'react-native';

const Login = require('./src/components/loginView')
const StudentDashboard = require('./src/components/StudentDashboardView')
const AddNewClass = require('./src/components/newClassView')

import Register from './src/components/registration/register';
import Splash from './src/components/neatsplash';


class NeatMobileApp extends Component {
  render() {
    return (

      <Splash duration={3000} backgroundColor={styles.splashContainer}>
        <View style ={styles.container}>

          <Navigator
            initialRoute = {{
              id: 'Login'
            }}
            renderScene = {
              this.navigatorRenderScene
            }
          />
        </View>
      </Splash>
    );
  }

  navigatorRenderScene(route,navigator){
    _navigator = navigator;
    switch(route.id){
      case 'Login':
        return(<Login navigator = {navigator} title = 'Login'/>)
      case 'Register':
        return(<Register navigator = {navigator} title = 'Register'/>)
      case 'StudentDashboard':
        return(<StudentDashboard navigator = {navigator} title = 'StudentDashboard'/>)
      case 'AddNewClass':
        return(<AddNewClass navigator = {navigator} title = 'AddNewClass'/>)
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 10
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
  splashContainer:{
    backgroundColor: 'white'
  }
});

AppRegistry.registerComponent('NeatMobileApp', () => NeatMobileApp);
