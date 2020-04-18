import React from 'react';  
import {createAppContainer} from 'react-navigation';  
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';  
import HomeScreen from "../MyProfile/index";  
import ProfileScreen from "../SwipeProfileScreen/index";  
import MyMessages from '../MyMessagesScreen/index' 
  
const AppNavigator = createMaterialTopTabNavigator(  
    {  
        Home: HomeScreen,  
        Profile: ProfileScreen,  
            Messages: MyMessages,  
    },  
    {  
        tabBarOptions: {  
            activeTintColor: '#FF4A00FF',
            inactiveTintColor:'#ABABAB',  
            showIcon: true,  
            showLabel:false,
              
            style: {  
                backgroundColor:'#fff'  
            }  
        },  
    }  
)  
export default createAppContainer(AppNavigator);