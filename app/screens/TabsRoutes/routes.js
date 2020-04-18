import React from 'react';  
import {createAppContainer} from 'react-navigation';  
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';  
import HomeScreen from "../MyProfile/index";  
import ProfileScreen from "../SwipeProfileScreen/index";  
import SettingScreen from "../EditProfileInfo/index";  
  
const AppNavigator = createMaterialTopTabNavigator(  
    {  
        Home: HomeScreen,  
        Profile: ProfileScreen,  
        Settings: SettingScreen,  
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