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
          <View style={{flex:4,alignItems:'center',justifyContent:'center'}}>
           <Text style={{fontSize:40,color:'#FF4A00FF',fontWeight:'bold',fontStyle:'italic'}}>
             Hobby Dutch
           </Text>
          </View>
  
          
      
            <View style={styles.BottomContainer}>
              
             <SkypeIndicator color="#FF4A00FF"/>
            </View>
          
        </View>
        </ScrollView>
       
      );
  
    }


}