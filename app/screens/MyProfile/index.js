import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
  Share
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import EditProfile from '../EditProfileInfo/index'
import styles from './styles'
export default class Profile extends Component {
  constructor()
  {
      super();

      this.state = 
        { 

          text: 'ProfileLink......'

        }
  }

  ShareMessage=()=>
  {
          Share.share(
          {
              
            message: this.state.text.toString()
          
          }).then(result => console.log(result)).catch(errorMsg => console.log(errorMsg));
  }




  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <View>

        <View style={styles.profile_pic_container}>
        <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F14.jpg?alt=media&token=e87b6e59-c22c-45ab-ba2b-6f48c997d3cc'}} 
        style={styles.profile_pic_style} />
        <View style={{flexDirection:'row'}}>

        <Text style={styles.profile_name_style}>StarLight Dance Studio</Text>

        </View>

        <View style={{marginTop:10}}>
          

          <View style={{flexDirection:'row',width:'100%'}}>
            <Icon name={'event'} size={18} style={styles.detailsIcon}/>
          <Text style={styles.details}>Every Tuesday | 7:00PM</Text>

          </View>

          <View style={{flexDirection:'row',width:'75%'}}>
            <Icon name={'location-pin'} size={18} style={styles.detailsIcon}/>
          <Text style={styles.details}>6506 EL CAJON BLVD # H,SAN DIEGO , CA 92115 </Text>

          </View>
          
</View>
<View style={{height:1,width:'100%',backgroundColor:'#ebebe8',marginTop:20}}>

</View>
<TouchableOpacity  onPress={ this.ShareMessage }>

<View style={{alignItems:'center',width:'100%'}}>

<Text style={styles.share}>SHARE THIS</Text>
<Text style={styles.shareL2}>SEE WHAT A FRIEND THIINKS</Text>

</View>
</TouchableOpacity>


<View style={{height:1,width:'100%',backgroundColor:'#ebebe8',marginTop:10}}></View>


        
      </View>
        
      <View style={styles.tinder_plus_button_container}>
            <TouchableOpacity style={styles.tinder_plus_button_style}>
              <Text style={styles.tinder_button_text_style}>REPORT </Text>
            </TouchableOpacity>
          </View>          
  
        </View>  
        <View style={{height:1,width:'100%',backgroundColor:'#ebebe8',marginTop:0}}></View>
        <View style={{flex:1, justifyContent: 'flex-end',  marginBottom: 20,marginTop:10}}>

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




Profile.navigationOptions={  
  tabBarIcon:({tintColor, focused})=>(  
      <Icon  
          name={focused ? 'user' : 'user'}  
          color={tintColor}  
          size={25}  
      />  
  )  
}  