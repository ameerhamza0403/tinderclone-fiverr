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
                 Event Dutch
                </Text>

                <Text
                  style={[
                    styles.des,
                    {color: '#626262', height: 40, marginTop: 7},
                  ]}>
                  You just got an event partner
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
                 Chat
                </Text>

                <Text
                  style={[
                    styles.des,
                    {color: '#626262', height: 40, marginTop: 7},
                  ]}>
                  Someone wants to chat
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
                  Chat Likes
                </Text>

                <Text
                  style={[
                    styles.des,
                    {color: '#626262', height: 40, marginTop: 7},
                  ]}>
                Someone liked how you chat 
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
                  Event Attendance
                </Text>

                <Text
                  style={[
                    styles.des,
                    {color: '#626262', height: 40, marginTop: 7},
                  ]}>
                 Someone just joined an event
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
