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
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MessagesScreen from '../MyMessagesScreen/index'
import FeedsScreen from '../FeedsScreen/index'
// onPress={this.props.navigation.navigate('Messages')}
export default class MatchScreen extends React.Component {



  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity 
           onPress={() => this.props.navigation.navigate('Messages')}
          >

          <View style={{marginTop:70 , width:210,height:60,borderColor:'#d1cfcf',borderWidth:2,alignItems:'center',justifyContent:'center'}}>
<View>

  <Text style={{fontSize:18,color:'#d1cfcf'}}>
    Messages
  </Text>
</View>



        </View>         
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => this.props.navigation.navigate('Feeds')}>
          <View style={{marginTop:70 , width:210,height:60,borderColor:'#d1cfcf',borderWidth:2,alignItems:'center',justifyContent:'center'}}>
<View>

  <Text style={{fontSize:18,color:'#d1cfcf'}}>
    Feed
  </Text>
</View>



        </View>
          </TouchableOpacity>
   
 
        </View>


       
        
      </View>
      </ScrollView>
    );
  }
}

// class Feeds extends React.Component{
//   render(){
//     return(
//       <FeedsScreen/>
//     )
//   }


// }

// class Messages extends React.Component{

//   render(){
//     return(
//       <MessagesScreen/>
//     )
//   }
// }


// const messages = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}>
//         <Stack.Screen name="Home" component={MatchScreen} />

//         <Stack.Screen name="Messages" component={Messages} />
//         <Stack.Screen name="Feeds" component={Feeds} />


//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default messages;


// const LoginStack = createStackNavigator({

//   Home: {
//     screen: MessagesScreen,
//     navigationOptions: {
//       header: null,
     
//     },
   
//   },

//   Feeds: {
//     screen: Feeds,
//     navigationOptions: {
//       header: null,
     
//     },
   
//   },



// });


//   export default createAppContainer(LoginStack);


