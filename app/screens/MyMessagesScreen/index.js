import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {size} from '../../helpers/devices';
import * as Statics from '../../helpers/statics';
import Chat from '../ChatScreen/index'

import EditProfile from '../EditProfileInfo/index';
import styles from './styles';
 class MyMessagesScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              width: Statics.DEVICE_WIDTH,
              height: Statics.DEVICE_HEIGHT / 15,
            }}>
            <View
              style={{
                flex: 2,
                width: Statics.DEVICE_WIDTH / 1.2,
                marginTop: 0,
                height: Statics.DEVICE_HEIGHT / 10,
                marginLeft: size(3),
                marginBottom: 0,
                flexDirection: 'row',
                marginTop: size(10),
              }}>
              <Icon
                name="search"
                size={28}
                color="#FF4A00FF"
                style={{marginRight: 3, marginTop: 5}}
              />

              <TextInput
                placeholder="Search Matches"
                placeholderTextColor="#d1cfcf"
                style={{
                  width: Statics.DEVICE_WIDTH / 2,
                  height: Statics.DEVICE_HEIGHT / 18,
                  color: '#ABABAB',
                }}
              />

              <View style={{marginLeft: size(110), marginTop: size(8)}}>
                <Text
                  style={{
                    fontSize: size(15),
                    fontWeight: 'bold',
                    color: '#d1cfcf',
                  }}>
                  Search
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: size(30),
              marginLeft: size(15),
              flexDirection: 'row',
              width: Statics.DEVICE_WIDTH,
              height: Statics.DEVICE_HEIGHT / 28,
            }}>
            <Text style={{color: 'red', fontSize: size(16)}}>New Matches</Text>
            <Text
              style={{
                backgroundColor: 'red',
                color: 'white',
                width: 20,
                height: 20,
                textAlign: 'center',
                borderRadius: 30,
                marginLeft: 3,
                marginTop: 2,
              }}>
              1
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Chat')}>
            <View
              style={{
                marginTop: 50,
                width: 60,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 30,
              }}>
              <Image
                style={{
                  height: Statics.DEVICE_HEIGHT / 9,
                  width: Statics.DEVICE_WIDTH / 5,
                  borderRadius: size(60),
                }}
                source={{
                  uri:
                    'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F10.jpg?alt=media&token=4e953cbc-de3f-41e8-ada4-9739dd2f8508',
                }}
              />
              <Text
                style={{
                  width: Statics.DEVICE_WIDTH / 5,
                  fontWeight: 'bold',
                  marginLeft:30,
                  fontSize: size(14),
                }}>
              Shahbaz
              </Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              position: 'relative',
              marginTop: size(50),
              marginLeft: size(18),
            }}>
            <Text
              style={{fontSize: size(17), color: 'red', fontWeight: 'bold'}}>
              Messages
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

// MessagesScreen.navigationOptions={
//   tabBarIcon:({tintColor, focused})=>(
//       <Icon
//           name={focused ? 'rocketchat' : 'rocketchat'}
//           color={tintColor}
//           size={20}
//       />
//   )
// }

const myStack = createStackNavigator({

  Home: {
    screen: MyMessagesScreen,
    navigationOptions: {
      header: null,

    },

  },
  Chat: {
    screen: Chat,
    navigationOptions: {
      header: null,

    },
  },

});

export default createAppContainer(myStack);
