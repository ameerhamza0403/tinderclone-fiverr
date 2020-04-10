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

import EditProfile from '../EditProfileInfo/index'
import styles from './styles'
import MessagesScreen from '../MyMessagesScreen/index'
// onPress={this.props.navigation.navigate('Messages')}
export default class MatchScreen extends React.Component {



  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity>

          <View style={{marginTop:70 , width:210,height:60,borderColor:'#d1cfcf',borderWidth:2,alignItems:'center',justifyContent:'center'}}>
<View>

  <Text style={{fontSize:18,color:'#d1cfcf'}}>
    Messages
  </Text>
</View>



        </View>         
          </TouchableOpacity>
   
        <View style={{marginTop:70 , width:210,height:60,borderColor:'#d1cfcf',borderWidth:2,alignItems:'center',justifyContent:'center'}}>
<View>

  <Text style={{fontSize:18,color:'#d1cfcf'}}>
    Feed
  </Text>
</View>



        </View>
        </View>


        <View>

        <View style={styles.profile_pic_container}>
        <Image source={{uri: 'https://avatars0.githubusercontent.com/u/7205900?s=400&v=4'}} 
        style={styles.profile_pic_style} />


<View style={{position: 'absolute', left: 60, top: 250,height:200,width:300,alignContent:'center',justifyContent:'center',alignItems:'center'}}>
                  <Text style={{color:'#FF4A00FF',fontSize:40}}>
Its a 

                  </Text>

                  <Text style={{fontSize:60,color:'#FF4A00FF',fontWeight:'bold'}}>
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
                    source={require('../../../assests/images/heart.png')}
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




// const messages = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}>
//         <Stack.Screen name="Home" component={MatchScreen} />

//         <Stack.Screen name="Messages" component={MessagesScreen} />


//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default messages;
