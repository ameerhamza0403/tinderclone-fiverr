import React from 'react';  
import {createAppContainer} from 'react-navigation';  
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';  
import HomeScreen from "../MyProfile/index";  
import Icon from 'react-native-vector-icons/FontAwesome5'
import ProfileScreen from "../SwipeProfileScreen/index";  
import MyMessages from '../MyMessagesScreen/index' 
  
const AppNavigator = createMaterialTopTabNavigator(  
    {  
        Home: {
           screen:HomeScreen,
        
           navigationOptions: {
            tabBarLabel: ({focused, tintColor}) => (
                <Icon  
                         name={focused ? 'user-circle' : 'user-circle'}  
                          color={tintColor}  
                         size={25}  
                   /> 
            )
         }
        
        },
            
            
        Profile:{ 
            
            
            screen:ProfileScreen,
            
            

            navigationOptions: {
                tabBarLabel: ({focused, tintColor}) => (
                    <Icon  
                             name={focused ? 'hotjar' : 'hotjar'}  
                              color={tintColor}  
                             size={25}  
                       /> 
                )
             }
        },Messages: {
            
            
            screen:MyMessages,
        
            navigationOptions: {
                tabBarLabel: ({focused, tintColor}) => (
                    <Icon  
                             name={focused ? 'rocketchat' : 'rocketchat'}  
                              color={tintColor}  
                             size={25}  
                       /> 
                )
             }},  
    },  
    {  
        tabBarOptions: {  
            activeTintColor: '#FF4A00FF',
            inactiveTintColor:'#ABABAB',  
            showIcon: false,  
            showLabel:true,
              
            style: {  
                backgroundColor:'#fff'  
            }  
        },  
    }  
)  
export default createAppContainer(AppNavigator);