import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import { size } from '../../helpers/devices';
import * as Statics from '../../helpers/statics';

import EditProfile from '../EditProfileInfo/index'
import styles from './styles'
import MessagesScreen from '../MyMessagesScreen/index'
// onPress={this.props.navigation.navigate('Messages')}
export default class FeedsScreen extends React.Component {



  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
      

        <View style={{marginTop:size(5)}}>

        <View style={styles.profile_pic_container}>
        <Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F20.jpg?alt=media&token=618db6e6-d986-46b7-a73a-b6f52e6093b8" }} 
        style={styles.profile_pic_style} />


<View style={{position: 'absolute', left: 0, top: 220,height:200,backgroundColor:'rgba(52, 52, 52, 0.8)',width:'100%',height:80,alignContent:'center',justifyContent:'center',alignItems:'center'}}>
                  <Text style={{color:'#FF4A00FF',fontSize:20}}>
Its a 

                  </Text>

                  <Text style={{fontSize:35,color:'#FF4A00FF',fontWeight:'bold'}}>
Match
                  </Text>
                </View>

       <View style={{position: 'absolute', left: 250, top: 430,backgroundColor:'#fff',borderRadius:60,height:65,width:65,alignContent:'center',justifyContent:'center',alignItems:'center'}}>
                  <Image
                    style={styles.iconStyle}
                    source={require('../../../assests/images/heart.png')}
                  />
                </View>

                <View style={{position: 'absolute', left: 330, top: 430,backgroundColor:'#fff',borderRadius:60,height:65,width:65,alignContent:'center',justifyContent:'center',alignItems:'center'}}>
                  <Image
                    style={styles.iconStyle}
                    source={require('../../../assests/images/dislike.png')}
                  />
                </View>
        <View style={{marginTop:10}}>
      

          <View style={{flexDirection:'row',width:'100%'}}>
            <Icon name={'location-pin'} size={18} style={styles.detailsIcon}/>
          <Text style={styles.details}>24 miles away</Text>

          </View>

          <View style={{flexDirection:'row',width:'100%',marginLeft:20}}>

          <Text style={[styles.details,{fontSize:13}]}>20 minutes ago</Text>

          </View>
          
</View>




        
      </View>
      
  
        </View>  
        <View style={{height:1,width:'100%',backgroundColor:'#ebebe8',marginTop:0}}></View>
        <View style={{flex:1, justifyContent: 'flex-end',  marginBottom: 20,marginTop:50}}>

        <View style={styles.navigation_container}>
         <View style={styles.navigation_inner_container}>
           <TouchableOpacity 
             style={styles.button_container}
             // onPress={() => this.pushToScreen('Settings')}
           >
             <Image source={require('../../../assests/images/dislike.png')} style={styles.button_style}/>
           </TouchableOpacity>
          
         </View>
      
         <View style={styles.navigation_inner_container}>
           <TouchableOpacity 
             style={styles.button_container}
             onPress={() => navigation.navigate('EditProfile')}
           >
             <Image source={require('../../../assests/images/star.png')} style={styles.button_style} /> 
           </TouchableOpacity>
        
         </View>
         <View style={styles.navigation_inner_container}>
           <TouchableOpacity 
             style={styles.button_container}
             // onPress={() => this.pushToScreen('Edit')}
           >
             <Image source={require('../../../assests/images/heart.png')} style={styles.button_style} /> 
           </TouchableOpacity>
        
         </View>
       </View>
        </View>

       


        
      </View>
      </ScrollView>
    );
  }
}




