import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import {size} from '../../helpers/devices';
import * as Statics from '../../helpers/statics';
import Setting from '../../../assests/images/setting.png';

import Edit from '../../../assests/images/edit.png';

import Camera from '../../../assests/images/camera.png';
import ProfileSwiper from '../MyProfileScreen/profile_swiper.js';
import SettingsScreen from '../SettingsScreen/index';
import EditProfile from '../EditProfileInfo/index';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class Profile extends Component {
  renderProfilePicContainer() {
    return (
      <View style={styles.profile_pic_container}>
        <Image
          source={{
            uri:
              'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F18.jpg?alt=media&token=53ca5d9c-0c62-48bf-b167-681d0de05bd4',
          }}
          style={styles.profile_pic_style}
        />
        <Text style={styles.profile_name_style}>Ebigs </Text>
        <Text style={styles.description}>
          Salsa dance instructor at Studio Xyz ,{' '}
        </Text>
      </View>
    );
  }

  renderNavigationContainer() {
    return (
      <View style={styles.navigation_container}>
        <View style={styles.navigation_inner_container}>
          <TouchableOpacity
            style={styles.button_container}
            onPress={() => this.props.navigation.navigate('Settings')}>
            <Image source={Setting} style={styles.button_style} />
          </TouchableOpacity>
          <Text style={styles.button_text_style}>Settings</Text>
        </View>
        <View style={styles.seperator_style} />
        <View style={styles.navigation_inner_container}>
          <TouchableOpacity style={styles.button_container}>
            <Image source={Camera} style={styles.button} />
          </TouchableOpacity>
          <Text style={styles.button_text_style}>Media</Text>
        </View>
        <View style={styles.seperator_style} />

        <View style={styles.navigation_inner_container}>
          <TouchableOpacity
            style={styles.button_container}
            onPress={() => this.props.navigation.navigate('EditProfile')}>
            <Image source={Edit} style={styles.button_style} />
          </TouchableOpacity>
          <Text style={styles.button_text_style}>Edit</Text>
        </View>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop: 20}}>
          <View style={styles.bottom_rounded_border_style} />
          <View style={styles.profile_container}>
            {this.renderProfilePicContainer()}
            {this.renderNavigationContainer()}
          </View>
          <View style={styles.bottom_rounded_style} />
        </View>
        <View style={styles.footer}>
          <ProfileSwiper />

          <View style={styles.tinder_plus_button_container}>
            <TouchableOpacity style={styles.tinder_plus_button_style}>
              <Text style={styles.tinder_button_text_style}>Hobby Finder</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(244,246,251)',
  },
  //-----------------PROFILE PICTURE CONTAINER--------------//
  profile_pic_container: {
    marginTop: size(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile_pic_style: {
    width: size(120),
    height: size(120),
    borderRadius: size(120) / 2,
  },
  profile_name_style: {
    fontSize: size(20),
    fontWeight: 'bold',
    marginTop: size(10),
  },

  description: {
    fontSize: size(16),
    fontWeight: '600',
    marginTop: size(10),
  },
  //------------------NAVIGATION CONTAINER----------------//
  navigation_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: size(40),
    marginVertical: size(10),
  },
  navigation_inner_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  seperator_style: {
    width: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#d4d6db',
  },
  button_container: {
    alignItems: 'center',
    padding: 15,
    borderRadius: 30,
    backgroundColor: '#f4f6fb',
  },

  button: {
    width: size(35),
    height: size(35),
    resizeMode: 'contain',
  },
  button_style: {
    width: size(30),
    height: size(30),
    resizeMode: 'contain',
    tintColor: '#d4d6db',
  },
  button_text_style: {
    fontSize: size(16),
    fontWeight: '600',
    color: '#d4d6db',
    marginTop: size(5),
  },
  //-----------------PROFILE CONTAINER-------------------//
  profile_container: {
    width: Statics.DEVICE_WIDTH,
    height: Statics.DEVICE_WIDTH / 1.2,
    backgroundColor: 'white',
  },
  bottom_rounded_style: {
    width: 74,
    height: 64,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: -50,
    left: 160,
    borderRadius: 35,
    transform: [{scaleX: 6}, {scaleY: 2}],
  },
  bottom_rounded_border_style: {
    width: 74,
    height: 64,
    backgroundColor: 'rgb(209,215,223)',
    position: 'absolute',
    bottom: -51,
    left: 160,
    borderRadius: 35,
    transform: [{scaleX: 6}, {scaleY: 2}],
  },
  //--------------------------Footer----------------------//
  footer: {
    marginTop: size(100),
    height: size(200),
  },
  tinder_plus_button_container: {
    width: Statics.DEVICE_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinder_plus_button_style: {
    width: Statics.DEVICE_WIDTH / 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: size(13),
    backgroundColor: 'white',
    borderRadius: 25,
    shadowColor: '#ddd',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  tinder_button_text_style: {
    color: 'rgb(251,91,77)',
    fontSize: size(16),
    fontWeight: 'bold',
  },
});

const myStack = createStackNavigator({
  Home: {
    screen: Profile,
    navigationOptions: {
      header: null,
    },
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      header: null,
    },
  },
  EditProfile: {
    screen: EditProfile,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(myStack);
