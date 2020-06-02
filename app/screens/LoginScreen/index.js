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
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import DialogProgress from 'react-native-dialog-progress';
import styles from './style';

import RegisterScreen from '../RegistrationScreen/index';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../HomeScreen/index';
import {size} from '../../helpers/devices';
import * as Statics from '../../helpers/statics';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk';

const options = {
  title: 'Signing in .....',
  message: 'Please Wait',
  isCancelable: false,
};

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  
    this.unsubscribe = null;
    this.state = {
      emailInput: '',
      passwordInput: '',
      isLoading: false,
      userType: '',
    };
  }

  componentDidMount() {
    console.disableYellowBox = true;

  
    auth().onAuthStateChanged(user => {
      if (user != null ) {
        console.log(user.uid);

        try {
          database()
            .ref('Users')
            .child(user.uid)
            .set({
              Name: user.displayName,
              Gender: 'Null',
              Email: user.email,
              Password: 'Null',
              Interest: 'Null',
              Occupation: 'Null',
              Phone: user.phoneNumber,
              AccType: 'Trial',
              DOB: 'Null',
            })
            .then(data => {
              DialogProgress.hide();

              //Alert.alert('Registration SuccessFull, You Can Now Login!');
              this.props.navigation.navigate('HomeScreen');
            })
            .catch(error => {
              DialogProgress.hide();
              Alert.alert(error.toString());
            });
        } catch (error) {
          DialogProgress.hide();
          Alert.alert(error.toString());
        }
      } 
    });
  }

  async onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
    console.log('///', result.token);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );
    console.log('//', facebookCredential.token);

    // Sign-in the user with the credential
    auth().signInWithCredential(facebookCredential);
  }

  _validateFunction = async () => {
    DialogProgress.show(options);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const {emailInput, passwordInput} = this.state;

    if (emailInput == '' || reg.test(emailInput) === false) {
      alert('Email is Not Correct');
      DialogProgress.hide();
      return false;
    } else if (passwordInput == '' || passwordInput.length < 6) {
      alert('Please enter Password , More than 6 characters');
      DialogProgress.hide();
      return false;
    } else {
      this._login();
    }
  };
  _login = async () => {
    const date=0;
    DialogProgress.show(options);
    auth()
      .signInWithEmailAndPassword(
        this.state.emailInput,
        this.state.passwordInput,
      )
      .then(res => {
        try {


          database()
          .ref('Users')
          .child(res.user.uid).once("value", snapshot => {
            console.log(snapshot.currentDate)


           // date:snapshot.currentDate

            
           
              
                   
  
  
                  })
          AsyncStorage.setItem('Id', res.user.uid);
          DialogProgress.hide();


         // this.props.navigation.navigate('HomeScreen');
        } catch (error) {
          DialogProgress.hide();
          Alert.alert('Error Occured ! ');
        }
      })
      .catch(function(error) {
        DialogProgress.hide();
        Alert.alert('Invalid Email / Password , Please Try Again');
      });
  };

  render() {
    return (
      <ScrollView>
        <StatusBar backgroundColor="#FF4A00FF" barStyle="light-content" />
        <View style={styles.mainContainer}>
          <View
            style={{
              flexDirection: 'column',
              width: Statics.DEVICE_WIDTH,
              backgroundColor: '#FF4A00FF',
              height: Statics.DEVICE_HEIGHT,
              flex: 1,
              resizeMode: 'stretch',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
                flex: 1,
                marginTop: size(30),
              }}>
              <Text style={styles.logoText}>HobbyFinder</Text>
            </View>

            <View
              style={{
                flex: 2,
                width: Statics.DEVICE_WIDTH / 1.2,
                marginLeft: size(40),
                alignSelf: 'center',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
                marginTop: 0,
              }}>
              <Text style={styles.bottomText}>
                By tapping Log in , you agree with our Terms of Service and
                Privacy Policy
              </Text>
            </View>

            <View style={{flex: 4, width: Statics.DEVICE_WIDTH}}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TextInput
                  clearButtonMode="always"
                  placeholder="Email"
                  placeholderTextColor="#fff"
                  style={styles.textInput}
                  onChangeText={TextInputValue =>
                    this.setState({emailInput: TextInputValue})
                  }
                />
              </View>

              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TextInput
                  clearButtonMode="always"
                  placeholder="Password"
                  secureTextEntry={true}
                  placeholderTextColor="#fff"
                  style={styles.textInput}
                  onChangeText={TextInputValue =>
                    this.setState({passwordInput: TextInputValue})
                  }
                />
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    width: '50%',
                    marginTop: 40,
                    height: 50,
                    flexDirection: 'row',
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => this._validateFunction()}
                    style={{alignItems: 'center', width: '100%'}}>
                    <View
                      style={{
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{color: '#FF4A00FF', fontSize: 15}}>
                        Sign-in
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <View style={styles.roundBtn}>
                <TouchableOpacity
                  style={{alignItems: 'center'}}
                  onPress={() => this.onFacebookButtonPress()}>
                  <View>
                    <Text style={{color: 'white', fontSize: 17}}>
                      Login with Facebook
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.roundBtn}>
                <TouchableOpacity style={{alignItems: 'center'}}>
                  <View>
                    <Text style={{color: 'white', fontSize: 16}}>
                      Login with Phone Number
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{flex: 2, marginTop: 50, alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Register')}>
                <Text style={styles.registerText}>
                  Trouble Logging in ? Want to Register?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const loginStack = createStackNavigator({
  Home: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      header: null,
    },
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(loginStack);
