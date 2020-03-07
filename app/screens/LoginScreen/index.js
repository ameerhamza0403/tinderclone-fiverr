import * as React from 'react';

import AppIntroSlider from 'react-native-app-intro-slider';
import { StyleSheet, View, Text, Image,AsyncStorage, StatusBar,ScrollView,Dimensions,TouchableHighlight, ImageBackground } from 'react-native';
import styles from './style'


export default class LoginScreen extends React.Component{
    
    render (){
        return (
      
      <ScrollView>
          <StatusBar
            backgroundColor="#FF655B"
            barStyle="light-content"></StatusBar>
          <View style={styles.mainContainer}>
<View
style={{flexDirection:'column',width:Dimensions.get('window').width,backgroundColor:'#FF655B', height:Dimensions.get('window').height,flex: 1,resizeMode: 'stretch'}}


>

    <View style={{flexDirection:'row' ,alignItems:'center',alignSelf:'center',justifyContent:'center',flex:5}}>
        <Image
        style={styles.fireImage}
        source={require ('../../../assests/images/fireicon.png')}
        />

<Text style={styles.logoText}>

    Tinder
</Text>

    </View>

    <View style={{ width:'80%',alignSelf:'center',alignContent:'center',alignItems:'center',justifyContent:'center',height:100,marginTop:0}}>

        <Text style={styles.bottomText}>

            By tapping Log in , you agree with our Terms of Service and Privacy Policy
        </Text>
    </View>

    <View style={styles.buttonContainer}>
        
<View   style={styles.roundBtn} >
          
          <TouchableHighlight style={{alignItems:'center', }}>
            <View >
            <Text style={{color:'white' , fontSize:17,}}>
        Login with Facebook
          </Text>
            </View>
      
          </TouchableHighlight>
                        
                       </View>


                       <View   style={styles.roundBtn} >
          
          <TouchableHighlight style={{alignItems:'center', }}>
            <View >
            <Text style={{color:'white' , fontSize:16,}}>
        Login with Phone Number
          </Text>
            </View>
          
                     
          
            
          </TouchableHighlight>
                        
                       </View>


    </View>
    
<View style={{flex:2,marginTop:50,alignItems:'center'}}>
  <TouchableHighlight>
  <Text style={styles.registerText}>

Trouble Logging in ? Want to Register?
</Text>

  </TouchableHighlight>
 
</View>
                            
                         
              
                        
              </View>

          </View>


      </ScrollView>

  );
    }
}