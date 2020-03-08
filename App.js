import 'react-native-gesture-handler';
import SplashScreen from './app/screens/SplashScreen/index.js'
import LoginScreen from './app/screens/RegistrationScreen/index.js';

import React, { Component } from 'react';
import {

  StyleSheet,
  View,
  Text,
  AsyncStorage
 
} from 'react-native';


export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  
  }
  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 3000),
    );
  };
  async componentDidMount() {
   
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });

    }
  }
 render(){
  if (this.state.isLoading) {
    return <SplashScreen />;
   }
  else {
    return (
      <LoginScreen/>
    );
   }
 }
};





