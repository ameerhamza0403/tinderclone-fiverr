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
import styles from './styles'
export default class Profile extends Component {



  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <View>

        <View style={styles.profile_pic_container}>
        <Image source={{uri: 'https://avatars0.githubusercontent.com/u/7205900?s=400&v=4'}} 
        style={styles.profile_pic_style} />
        <View style={{flexDirection:'row'}}>

        <Text style={styles.profile_name_style}>Shayna,</Text>
        <Text style={styles.profile_age}>25</Text>
        </View>

        <View style={{}}>
          <View style={{flexDirection:'row',width:'100%'}}>
            <Icon name={'graduation'} size={18} style={styles.detailsIcon}/>
          <Text style={styles.details}>University of California , San Diego</Text>

          </View>

          <View style={{flexDirection:'row',width:'100%'}}>
            <Icon name={'user-female'} size={18} style={styles.detailsIcon}/>
          <Text style={styles.details}>Woman</Text>

          </View>

          <View style={{flexDirection:'row',width:'100%'}}>
            <Icon name={'location-pin'} size={18} style={styles.detailsIcon}/>
          <Text style={styles.details}>24 miles away</Text>

          </View>
          
</View>
<View style={{height:1,width:'100%',backgroundColor:'#ebebe8',marginTop:20}}>

</View>

<View style={{alignItems:'center',width:'100%'}}>

<Text style={styles.share}>SHARE SHAYNA'S PROFILE</Text>
<Text style={styles.shareL2}>SEE WHAT A FRIEND THIINKS</Text>

</View>

<View style={{height:1,width:'100%',backgroundColor:'#ebebe8',marginTop:10}}></View>


        
      </View>
        
      <View style={styles.tinder_plus_button_container}>
            <TouchableOpacity style={styles.tinder_plus_button_style}>
              <Text style={styles.tinder_button_text_style}>REPORT SHAYNA</Text>
            </TouchableOpacity>
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
             // onPress={() => this.pushToScreen('Edit')}
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

