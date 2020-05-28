import * as React from 'react';
import {
  StyleSheet,
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
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from 'react-native';


import styles from './style';


export default class NotificationSettings extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {switchValue: false, sliderValue: 1};
  toggleSwitch = value => {
    //onValueChange of the switch this function will be called
    this.setState({switchValue: value});
    //state changes according to switch
    //which will result in re-render the text
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <StatusBar backgroundColor="#FF4A00FF" barStyle="light-content" />

          <View style={[styles.viewContainer]}>
            <View
              style={{
                marginTop: 8,
                backgroundColor: 'white',
                flexDirection: 'row',
                width: '100%',
              }}>
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={[
                    styles.heading,
                    {color: '#626262', height: 20, marginTop: 7},
                  ]}>
                  New Matches
                </Text>

                <Text
                  style={[
                    styles.des,
                    {color: '#626262', height: 40, marginTop: 7},
                  ]}>
                  You just got new matches !
                </Text>
              </View>

              <View style={{alignItems: 'flex-end', marginTop: 10, flex: 1}}>
                <Switch
                  trackColor={{true: 'red', false: 'grey'}}
                  style={{marginTop: 0}}
                  onValueChange={this.toggleSwitch}
                  value={this.state.switchValue}
                />
              </View>
            </View>

            <View
              style={{
                marginTop: 8,
                backgroundColor: 'white',
                flexDirection: 'row',
                width: '100%',
              }}>
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={[
                    styles.heading,
                    {color: '#626262', height: 20, marginTop: 7},
                  ]}>
                  Messages
                </Text>

                <Text
                  style={[
                    styles.des,
                    {color: '#626262', height: 40, marginTop: 7},
                  ]}>
                  Someone sent you a new message
                </Text>
              </View>

              <View style={{alignItems: 'flex-end', marginTop: 10, flex: 1}}>
                <Switch
                  trackColor={{true: 'red', false: 'grey'}}
                  style={{marginTop: 0}}
                  onValueChange={this.toggleSwitch}
                  value={this.state.switchValue}
                />
              </View>
            </View>

            <View
              style={{
                marginTop: 8,
                backgroundColor: 'white',
                flexDirection: 'row',
                width: '100%',
              }}>
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={[
                    styles.heading,
                    {color: '#626262', height: 20, marginTop: 7},
                  ]}>
                  Messages Likes
                </Text>

                <Text
                  style={[
                    styles.des,
                    {color: '#626262', height: 40, marginTop: 7},
                  ]}>
                  Someone liked your message
                </Text>
              </View>

              <View style={{alignItems: 'flex-end', marginTop: 10, flex: 1}}>
                <Switch
                  trackColor={{true: 'red', false: 'grey'}}
                  style={{marginTop: 0}}
                  onValueChange={this.toggleSwitch}
                  value={this.state.switchValue}
                />
              </View>
            </View>

            <View
              style={{
                marginTop: 8,
                backgroundColor: 'white',
                flexDirection: 'row',
                width: '100%',
              }}>
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={[
                    styles.heading,
                    {color: '#626262', height: 20, marginTop: 7},
                  ]}>
                  Super Likes
                </Text>

                <Text
                  style={[
                    styles.des,
                    {color: '#626262', height: 40, marginTop: 7},
                  ]}>
                  You have been Super Liked! Swipe to know by whom
                </Text>
              </View>

              <View style={{alignItems: 'flex-end', marginTop: 10, flex: 1}}>
                <Switch
                  trackColor={{true: 'red', false: 'grey'}}
                  style={{marginTop: 0}}
                  onValueChange={this.toggleSwitch}
                  value={this.state.switchValue}
                />
              </View>
            </View>

            <View
              style={{
                marginTop: 8,
                backgroundColor: 'white',
                flexDirection: 'row',
                width: '100%',
              }}>
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={[
                    styles.heading,
                    {color: '#626262', height: 20, marginTop: 7},
                  ]}>
                  Top Picks
                </Text>

                <Text
                  style={[
                    styles.des,
                    {color: '#626262', height: 40, marginTop: 7},
                  ]}>
                  Your daily top picks are ready
                </Text>
              </View>

              <View style={{alignItems: 'flex-end', marginTop: 10, flex: 1}}>
                <Switch
                  trackColor={{true: 'red', false: 'grey'}}
                  style={{marginTop: 0}}
                  onValueChange={this.toggleSwitch}
                  value={this.state.switchValue}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
