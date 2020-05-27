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
  TouchableHighlight,
  SafeAreaView,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

import styles from './style';

import {Card} from 'native-base';
import Slider from '@react-native-community/slider';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

export default class EditProfileInfo extends React.Component {
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

          <View style={styles.viewContainer}>
            <View
              style={{
                flex: 6,
                justifyContent: 'flex-end',
                marginTop: 20,
                marginBottom: 10,
                flexDirection: 'column',
                width: '90%',
                marginLeft: '1%',
              }}>
              <View style={{flex: 1}}>
                <View
               style={styles.itemsContainer}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    Payment Account
                  </Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <View style={{flex: 20}}>
                    <Text style={{fontSize: 17}}>Manage Payment Account</Text>
                  </View>

                  <View style={{flex: 1}}>
                    <Icon
                      name={'ios-arrow-forward'}
                      color={'#ababab'}
                      size={25}
                    />
                  </View>
                </View>
              </View>

              <View style={{flex: 1}}>
                <View
              style={styles.itemsContainer}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    Contact us
                  </Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <View style={{flex: 20, alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      Help and Support
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{flex: 1}}>
                <View
                style={styles.itemsContainer}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    Community
                  </Text>
                </View>
                <View style={{marginTop: 0}}>
                  <View style={{flex: 20}}>
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: 'bold',
                        color: '#444544',
                      }}>
                      Community Guidelines
                    </Text>
                  </View>

                  <View style={{flex: 20}}>
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: 'bold',
                        color: '#444544',
                      }}>
                      Safety Tips
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{flex: 1}}>
                <View
                  style={styles.itemsContainer}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: '#FF4A00FF',
                    }}>
                    Legal
                  </Text>
                </View>

                <View
                style={styles.itemsContainer}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: '#ABABAB',
                    }}>
                    Licenses
                  </Text>
                </View>

                <View
               style={styles.itemsContainer}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: '#ABABAB',
                    }}>
                    Privacy Policy
                  </Text>
                </View>

                <View
                style={styles.itemsContainer}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: '#ABABAB',
                    }}>
                    Terms of Services
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{alignItems: 'center', marginTop: 0, flex: 2}}>
            <View style={styles.roundBtn}>
              <TouchableHighlight
                style={{alignItems: 'center'}}
                onPress={() => navigation.navigate('School')}>
                <View>
                  <Text style={{color: '#000', fontSize: 16}}>Logout</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
EditProfileInfo.navigationOptions = {
  tabBarIcon: ({tintColor, focused}) => (
    <Icon
      name={focused ? 'settings' : 'settings'}
      color={tintColor}
      size={25}
    />
  ),
};
