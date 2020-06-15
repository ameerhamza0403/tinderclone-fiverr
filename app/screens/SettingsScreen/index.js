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
  Share,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

import styles from './style';

import {Card} from 'native-base';
import Slider from '@react-native-community/slider';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import NotificationScreen from '../NotificationSettingsScreen/index';
import auth from '@react-native-firebase/auth';
import LoginScreen from '../LoginScreen/index';

class SettingsScreen extends React.Component {
  state = {switchValue: false, sliderValue: 1};
  toggleSwitch = value => {
    //onValueChange of the switch this function will be called
    this.setState({switchValue: value});
    //state changes according to switch
    //which will result in re-render the text
  };

  shareMessage = () => {
    Share.share({
      message: 'Test App Link',
    })
      .then(result => console.log(result))
      .catch(errorMsg => console.log(errorMsg));
  };
  logout = () => {
    try {
      auth()
        .signOut()
        .then(() => console.log('User signed out!'));
      this.props.navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <StatusBar backgroundColor="#FF4A00FF" barStyle="light-content" />

          <View style={styles.viewContainer}>
            <View
              style={{
                marginTop: 20,
                marginBottom: 10,
                flexDirection: 'column',
                width: '90%',
                marginLeft: '1%',
              }}>
              <View>
                <View style={{flex: 8, marginTop: 10, marginBottom: 5}}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    Account Settings
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View style={{flex: 10, justifyContent: 'flex-start'}}>
                    <Text style={{fontSize: 17}}>Phone Number</Text>
                  </View>

                  <View
                    style={{
                      flex: 5,
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 16, color: '#ABABAB'}}>
                      +92111232343
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{alignItems: 'center', marginTop: 30}}>
                <Text style={styles.des}>
                  Verify your mobile number to secure your account
                </Text>
              </View>
            </View>

            <View
              style={{
                marginTop: 20,
                marginBottom: 10,
                flexDirection: 'column',
                width: '90%',
                marginLeft: '1%',
              }}>
              <View>
                <View style={{flex: 8, marginTop: 10, marginBottom: 5}}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    Descovery Settings
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View style={{flex: 10, justifyContent: 'flex-start'}}>
                    <Text style={{fontSize: 17}}>Location</Text>
                  </View>

                  <View
                    style={{
                      flex: 5,
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 16, color: '#3483eb'}}>
                      My Current Location
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{alignItems: 'center', marginTop: 30}}>
                <Text style={styles.des}>
                  Change your location to see matches in your area !
                </Text>
              </View>
            </View>

            <View
              style={{
                justifyContent: 'flex-end',
                marginTop: 30,
                marginBottom: 20,
                flexDirection: 'column',
                width: '90%',
                marginLeft: '5%',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 8,
                    marginTop: 10,
                    marginBottom: 5,
                    ali: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    Maximum Distance
                  </Text>
                </View>

                <View style={{flex: 2, marginTop: 10}}>
                  <Text style={{fontSize: 22, color: '#FF4A00FF'}}>9 mi.</Text>
                </View>
              </View>

              <View style={{marginTop: 20, flexDirection: 'row'}}>
                <View style={{flex: 7, marginTop: 5}}>
                  <Slider
                    maximumValue={5}
                    minimumValue={1}
                    activeColor={'#FB6C57'}
                    thumbStyle={{height: 10, width: 10}}
                    step={1}
                    // onValueChange={value => {
                    //   this.setState({
                    //     sliderValue: value,
                    //   });
                    // }}
                    trackStyle={{
                      backgroundColor: '#FF655B',
                      height: 10,
                      borderRadius: 10,
                    }}
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                justifyContent: 'flex-end',
                marginTop: 30,
                marginBottom: 20,
                flexDirection: 'column',
                width: '90%',
                marginLeft: '5%',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 8,
                    marginTop: 10,
                    marginBottom: 5,
                    ali: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    Age Range
                  </Text>
                </View>

                <View style={{flex: 2, marginTop: 10}}>
                  <Text style={{fontSize: 22, color: '#FF4A00FF'}}>20-25</Text>
                </View>
              </View>

              <View style={{marginTop: 20, flexDirection: 'row'}}>
                <View style={{flex: 7, marginTop: 5}}>
                  <Slider
                    maximumValue={5}
                    minimumValue={1}
                    activeColor={'#FB6C57'}
                    thumbStyle={{height: 10, width: 10}}
                    step={1}
                    // onValueChange={value => {
                    //   this.setState({
                    //     sliderValue: value,
                    //   });
                    // }}
                    trackStyle={{
                      backgroundColor: '#FF655B',
                      height: 10,
                      borderRadius: 10,
                    }}
                  />
                </View>
              </View>
              <View style={{marginTop: 10}}>
                <Text style={styles.des}>
                  Hobby Dutch uses these prefreneces to suggest matches !
                </Text>
              </View>
            </View>

            <View style={{flex: 1, marginRight: '1%'}}>
              <View style={styles.itemsContainer}>
                <View
                  style={{
                    marginTop: 8,
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <View style={{marginLeft: '1%'}}>
                    <Text
                      style={[
                        styles.heading,
                        {color: '#626262', height: 40, marginTop: 7},
                      ]}>
                      Show me on Hobby Dutch
                    </Text>

                    <Text />
                  </View>

                  <View
                    style={{alignItems: 'flex-end', marginTop: 10, flex: 1}}>
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
                  <View style={{marginLeft: '1%'}}>
                    <Text
                      style={[
                        styles.heading,
                        {color: '#626262', height: 30, marginTop: 7},
                      ]}>
                      Share My Feed
                    </Text>

                    <Text style={styles.des}>
                      Sharing your social content will greatly increase your
                      chances of receiving messages !
                    </Text>
                  </View>

                  <View
                    style={{alignItems: 'flex-end', marginTop: 10, flex: 1}}>
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
            <View style={{flex: 1}}>
              <View style={styles.itemsContainer}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#FF4A00FF',
                  }}>
                  Notifications
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Notifications')}>
                <View style={styles.itemsContainer}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: '#ABABAB',
                    }}>
                    Push Notifications
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
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
                <View style={{flexDirection: 'row'}}>
                  <View style={[styles.itemsContainer, {flex: 6}]}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      Show Distance in
                    </Text>
                  </View>

                  <View style={{marginTop: 30}}>
                    <View style={{flex: 3}}>
                      <Text style={{fontSize: 22, color: '#FF4A00FF'}}>
                        Miles
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View style={styles.danceBtn}>
                    <TouchableOpacity style={{}}>
                      <View>
                        <Text style={{color: 'white', fontSize: 16}}>
                          Miles
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={[styles.danceBtn, {backgroundColor: 'white'}]}>
                    <TouchableOpacity style={{}}>
                      <View>
                        <Text style={{color: '#000', fontSize: 16}}>Kms</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={{flex: 1}}>
                <View style={styles.itemsContainer}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: '',
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
                <View style={styles.itemsContainer}>
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
                      }}>
                      Help and Support
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{flex: 1}}>
                <View style={styles.itemsContainer}>
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

                        color: '#444544',
                      }}>
                      Community Guidelines
                    </Text>
                  </View>

                  <View style={{flex: 20}}>
                    <Text
                      style={{
                        fontSize: 17,

                        color: '#444544',
                      }}>
                      Safety Tips
                    </Text>
                  </View>
                </View>
              </View>

              <TouchableOpacity onPress={() => this.shareMessage()}>
                <View style={{flex: 1}}>
                  <View style={styles.itemsContainer}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      Share Hobby Dutch
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={{flex: 1}}>
                <View style={styles.itemsContainer}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: '#FF4A00FF',
                    }}>
                    Legal
                  </Text>
                </View>

                <View style={styles.itemsContainer}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: '#ABABAB',
                    }}>
                    Licenses
                  </Text>
                </View>

                <View style={styles.itemsContainer}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: '#ABABAB',
                    }}>
                    Privacy Policy
                  </Text>
                </View>

                <View style={styles.itemsContainer}>
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

          <View
            style={{
              alignItems: 'center',
              marginTop: 0,
              flex: 2,
              marginBottom: 30,
            }}>
            <View style={styles.roundBtn}>
              <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => this.logout()}>
                <View>
                  <Text style={{color: '#000', fontSize: 16}}>Logout</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const notificationStack = createStackNavigator({
  Home: {
    screen: SettingsScreen,
    navigationOptions: {
      header: null,
    },
  },
  Notifications: {
    screen: NotificationScreen,
    navigationOptions: {
      header: null,
    },
  },
  // Login: {
  //   screen: LoginScreen,
  //   navigationOptions: {
  //     header: null,
  //   },
  // },
});

export default createAppContainer(notificationStack);
