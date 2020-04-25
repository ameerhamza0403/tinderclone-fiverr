import React, {Component} from 'react';
import { Button, View, Text,StatusBar,Image,ScrollView} from 'react-native';

import styles from './style'
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
  } from 'react-native-indicators';




export default class SplashScreen extends Component {


  componentDidMount(){

    console.disableYellowBox=true
  }
    render (){

    return (
        <ScrollView>
 <View style={styles.SplashContaner}>
          <StatusBar
            backgroundColor="#FF4A00FF"
            barStyle="light-content"></StatusBar>
          <View style={{marginTop:0,width:150 ,height:200}}>
            <Image  style={styles.logo} source={require('../../../assests/images/fireicon.png')}/>
          </View>
  
          <View style={styles.textCon}>
            <Text style={styles.text}> HobbyFinder  </Text>
          </View>
  
      
            <View style={styles.BottomContainer}>
             <SkypeIndicator color="white"/>
            </View>
          
        </View>
        </ScrollView>
       
      );
  
    }


}