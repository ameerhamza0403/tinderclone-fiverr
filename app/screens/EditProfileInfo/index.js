
import * as React from 'react';
import { StyleSheet,
     View,
      Text, 
      Image,
      AsyncStorage, 
      StatusBar,
      ScrollView,
      Dimensions,
      Button,
      TextInput,
      Switch,
      TouchableHighlight} from 'react-native';

import styles from './style'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Card} from "native-base";

export default class EditProfileInfo extends React.Component{
    state = {switchValue:false}
    toggleSwitch = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({switchValue: value})
        //state changes according to switch
        //which will result in re-render the text
     }
    render () {

    return (
      
        <ScrollView
        >
             <View style={styles.mainContainer}>
             <StatusBar
            backgroundColor="#FF655B"
            barStyle="light-content"></StatusBar>
                 <View style={{width:'100%',height:55,backgroundColor:'#FF655B',alignItems:'center'}}>
                 <Text style={styles.headerText}>
                         Edit My Profile Info
                     </Text>

                 </View>
                 <View style={styles.viewContainer}>
                     <Text style={styles.heading}>
                         Company
                     </Text>
<View style={{marginTop:8,backgroundColor:'white'}}>

                     <TextInput style={styles.textInput}
                     placeholder="Add Company">
   
                     </TextInput>

                     
</View>
                
          
                 </View>
                 <View style={styles.viewContainer}>
                     <Text style={styles.heading}>
                        School
                     </Text>
<View style={{marginTop:8,backgroundColor:'white'}}>

                     <TextInput style={styles.textInput}
                     placeholder="Add School">
   
                     </TextInput>

                     
</View>
                
          
                 </View>
                 <View style={styles.viewContainer}>
                     <Text style={styles.heading}>
                        Living in
                     </Text>
<View style={{marginTop:8,backgroundColor:'white'}}>

                     <TextInput style={styles.textInput}
                     placeholder="Add City">
   
                     </TextInput>

                     
</View>

                
          
                 </View>
                 <View style={styles.viewContainer}>
                     <Text style={styles.heading}>
                        Show my Instagram Photos
                     </Text>
<View style={{marginTop:8,backgroundColor:'white'}}>

                   
<Text style={[styles.heading,{color:'#C16574',height:40,marginTop:7}]}>
                        Connect Instagram
                     </Text>       
</View>
                
          
                 </View>
                 <View style={styles.viewContainer}>
                     <Text style={styles.heading}>
                       My Anthem
                     </Text>
<View style={{marginTop:8,backgroundColor:'white'}}>

                     <TextInput style={styles.textInput}
                     placeholder="Choose an anthem">
   
                     </TextInput>

                     
</View>

                
          
                 </View>
                 <View style={styles.viewContainer}>
                     <Text style={[styles.heading,{color:'#ABABAB',fontSize:16,padding:12}]}>
                        Choose how you share your Spotify Anthem on Feed in Settings
                     </Text>

                
          
                 </View>
                 <View style={[styles.viewContainer,{marginTop:15}]}>
                     <Text style={styles.heading}>
                       My Top Spotify Artists
                     </Text>
<View style={{marginTop:8,backgroundColor:'white',alignItems:'center'}}>
<Text style={[styles.heading,{color:'#C16574',height:40,marginTop:7,fontWeight:'bold'}]}>
                       Add Spotify to Your Profile
                     </Text>   

                     
</View>

                
          
                 </View>
                 <View style={styles.viewContainer}>
                     <Text style={[styles.heading,{color:'#ABABAB',fontSize:16,padding:10}]}>
                        Choose how you share your Top Spotify Artists on Feed in Settings
                     </Text>

                
          
                 </View>
                 <View style={[styles.viewContainer,{marginTop:0}]}>
                     <Text style={styles.heading}>
                      I am
                     </Text>
<View style={{marginTop:8,backgroundColor:'white'}}>

                     <TextInput style={styles.textInput}
                     placeholder="Add Gender">
   
                     </TextInput>

                     
</View>

                
          
                 </View>
                 <View style={styles.viewContainer}>
                     <Text style={styles.heading}>
                     Sexual Orientation
                     </Text>
<View style={{marginTop:8,backgroundColor:'white'}}>

                     <TextInput style={styles.textInput}
                     placeholder="Add Sexual Orientation">
   
                     </TextInput>

                     
</View>

                
          
                 </View>
                 <View style={styles.viewContainer}>
                     <Text style={styles.heading}>
                     Control Your Profile
                     </Text>
<View style={{marginTop:8,backgroundColor:'white',flexDirection:'row',width:'100%'}}>
                  
<Text style={[styles.heading,{color:'#626262',height:40,marginTop:7}]}>
                      Don't Show My Age
                     </Text>  
                     
                     <View style={{alignItems:'flex-end',marginTop:10,flex:1}}> 
                     <Switch
                       trackColor={{true: 'red', false: 'grey'}}
          style={{marginTop:0}}
          onValueChange = {this.toggleSwitch}
          value = {this.state.switchValue}/>
                     </View>
                     
       
                     
</View>


                
          
                 </View>
                 <View style={[styles.viewContainer,{marginTop:0}]}>
                    
<View style={{marginTop:8,backgroundColor:'white',flexDirection:'row',width:'100%'}}>
                  
<Text style={[styles.heading,{color:'#626262',height:40,marginTop:7}]}>
                    Make My Distance Invisible
                     </Text>  
                     
                     <View style={{alignItems:'flex-end',marginTop:10,flex:1}}> 
                     <Switch
                      trackColor={{true: 'red', false: 'grey'}}
          style={{marginTop:0}}
          onValueChange = {this.toggleSwitch}
          value = {this.state.switchValue}/>
                     </View>
                     
       
                     
</View>


                
          
                 </View>
               
                
      </View>
   
   
         </ScrollView>
    );
   
    
}
}