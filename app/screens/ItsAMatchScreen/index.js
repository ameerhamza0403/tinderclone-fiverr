import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar,AsyncStorage} from 'react-native';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import {size} from '../../helpers/devices';
import * as Statics from '../../helpers/statics';

import AppNavigator from '../MessagesFeedsTabs/routes';
import database from '@react-native-firebase/database';
const AppIndex = createAppContainer(AppNavigator);

export default class ItsAMatch extends Component {

  
  async componentDidMount(){
    
    const matched = this.props.navigation.getParam('matchedCard', 0);
    AsyncStorage.setItem('matchedUser', matched);



    
  }


  render() {
    return (
      <View
        style={{width: Statics.DEVICE_WIDTH, height: Statics.DEVICE_HEIGHT}}>
        <StatusBar backgroundColor="#FF4A00FF" barStyle="light-content" />

        <AppIndex />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    paddingHorizontal: size(18),
    paddingTop: size(5),
  },
});
