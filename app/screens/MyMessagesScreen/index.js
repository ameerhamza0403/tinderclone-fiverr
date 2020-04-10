import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
  Dimensions,
  TextInput
} from 'react-native';





import Icon from 'react-native-vector-icons/MaterialIcons'
import EditProfile from '../EditProfileInfo/index'
import styles from './styles'
export default class MessagesScreen extends Component {



  render() {
    return (
      <ScrollView>
      <View style={styles.container}>

      <View style={[styles.MainContainer,{width:'100%',
        height:Dimensions.get('window').height}]}>
          
          
          <View style={{flexDirection:'row',width:'100%',height:50}}>
          <View style={{width:'80%',marginTop:0,height:40,marginLeft:3,marginBottom:0,flexDirection:'row',marginTop:10}}>
         <Icon name="search" size={28} color="#FF4A00FF"  style={{marginRight:3,marginTop:5}} />
          

           <TextInput
           placeholder='Search Matches'
           placeholderTextColor='#d1cfcf'
           style={{width:'60%',height:40,color:'white',}}/>
         
<View style={{marginLeft:110,marginTop:8}}>
  
<Text style={{ fontSize: 15, fontWeight: 'bold', color: '#d1cfcf' }}>
  Search
</Text>
</View>

         </View>
         


</View>
<View style={{marginTop:30,marginLeft:15,flexDirection:'row'}}>

  <Text style={{color:'red',fontSize:16}}>
    New Matches 
  </Text>
  <Text style={{backgroundColor:'red',color:'white',width:20,height:20,textAlign:'center',borderRadius:30,marginLeft:3,marginTop:2}}>
    1
  </Text>
</View>

<View style={{marginTop:50,width:60,height:50,alignItems:'center',justifyContent:'center',marginLeft:30}}>


    <Image style={{height:90,width:90,borderRadius:60}}
    source={{uri: "https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F10.jpg?alt=media&token=4e953cbc-de3f-41e8-ada4-9739dd2f8508"}}/>
    <Text style={{fontWeight:'bold',fontSize:15,}}>
      Shauna
    </Text>
  </View>


  <View style={{position:'relative',marginTop:50,marginLeft:18}}>
  <Text style={{fontSize:17,color:'red',fontWeight:'bold'}}>
    Messages
  </Text>
</View>

</View>

        
      </View>
      </ScrollView>
    );
  }
}




