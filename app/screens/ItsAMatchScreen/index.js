import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import {size} from '../../helpers/devices';
import * as Statics from '../../helpers/statics';

import AppNavigator from '../MessagesFeedsTabs/routes';
const AppIndex = createAppContainer(AppNavigator);

export default class ItsAMatch extends Component {
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
