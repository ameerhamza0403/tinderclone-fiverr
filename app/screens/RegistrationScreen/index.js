import * as React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { StyleSheet,
   View, 
   Text,
    Image,
    AsyncStorage, 
    StatusBar,
    ScrollView,
    Dimensions,
    Button,
    TextInput,
    TouchableHighlight} from 'react-native';
    import * as firebase from "firebase";
    import DialogProgress from 'react-native-dialog-progress'
    import LoginScreen from '../LoginScreen/index'


import styles from './style'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import DatePicker from 'react-native-datepicker';
import EditProfileInfo from '../MyProfile/index'
import { Alert } from 'react-native';


class EmailComponent extends React.Component {
  constructor(props) {
    super(props);
    

    console.ignoredYellowBox = [
      'Setting a timer'
      ];

    this.state = {


textInput_Email:'',

 

    }  }

    saveData= async() =>{
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const email=this.state.textInput_Email;
if (email == '' || reg.test(email)=== false)
{
  Alert.alert('Enter Email')
}
else {
try {
  await AsyncStorage.setItem('email', email);
  this.props.navigation.navigate('Password')

}catch (error) {
  // Error retrieving data
  Alert.alert(error.message);
}
}

    }

  render(){
  return (
    <ScrollView>
         <StatusBar
            backgroundColor="#FF4A00FF"
            barStyle="light-content"></StatusBar>
      <View style={styles.mainContainer}>
        <View style={{margin: 50, flex: 2}}>
          <Text style={styles.textStyle}>My</Text>
          <Text style={styles.textStyle}>email is</Text>
        </View>
        <View
          style={{
            flex: 2,
            width: '80%',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 40,
          }}>
          <TextInput
            style={styles.textInput}
            placeholder="Email Address"
            onChangeText={TextInputValue =>
              this.setState({textInput_Email: TextInputValue})
            }
          
            ></TextInput>
        </View>
        <View style={{alignItems: 'center', marginTop: 40, flex: 2}}>
          <View style={styles.roundBtn}>
            <TouchableHighlight
              style={{alignItems: 'center'}}
              onPress={() =>this.saveData()}>
              <View>
                <Text style={{color: 'white', fontSize: 16}}>Continue</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
}


class PasswordComponent extends React.Component {
  constructor(props) {
    super(props);
    

    console.ignoredYellowBox = [
      'Setting a timer'
      ];

    this.state = {


textInput_Password:'',

 

    }  }

    saveData= async() =>{
const password=this.state.textInput_Password;
if (password == '')
{
  Alert.alert('Enter Password')
}
else {
try {
  await AsyncStorage.setItem('password', password);
  this.props.navigation.navigate('Name')

}catch (error) {
  // Error retrieving data
  Alert.alert(error.message);
}
}

    }

  render(){
  return (
    <ScrollView>
         <StatusBar
            backgroundColor="#FF4A00FF"
            barStyle="light-content"></StatusBar>
      <View style={styles.mainContainer}>
        <View style={{margin: 50, flex: 2}}>
          <Text style={styles.textStyle}>Set </Text>
          <Text style={styles.textStyle}>My Password</Text>
        </View>
        <View
          style={{
            flex: 2,
            width: '80%',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 40,
          }}>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={TextInputValue =>
              this.setState({textInput_Password: TextInputValue})
            }
          
            ></TextInput>
        </View>
        <View style={{alignItems: 'center', marginTop: 40, flex: 2}}>
          <View style={styles.roundBtn}>
            <TouchableHighlight
              style={{alignItems: 'center'}}
              onPress={() =>this.saveData()}>
              <View>
                <Text style={{color: 'white', fontSize: 16}}>Continue</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
}
class NameComponent extends React.Component {


  constructor(props) {
    super(props);
    

    console.ignoredYellowBox = [
      'Setting a timer'
      ];

    this.state = {

textInput_Name:'',

 

    }  }

    saveData= async() =>{
      const name=this.state.textInput_Name;
      if (name == '')
      {
        Alert.alert('Enter Name')
      }
      else {
      try {
        await AsyncStorage.setItem('name', name);
        this.props.navigation.navigate('Birthday')
      
      }catch (error) {
        // Error retrieving data
        Alert.alert(error.message);
      }
      }
      
          }
  render (){
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={{margin: 50, flex: 2}}>
          <Text style={styles.textStyle}>My first</Text>
          <Text style={styles.textStyle}>name is</Text>
        </View>
        <View
          style={{
            flex: 2,
            width: '80%',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 40,
          }}>
          <TextInput
            style={styles.textInput}
            placeholder="First Name"
            
            onChangeText={TextInputValue =>
              this.setState({textInput_Name: TextInputValue})
            }
          
            ></TextInput>
        </View>
        <View style={{alignItems: 'center', marginTop: 40, flex: 2}}>
          <View style={styles.roundBtn}>
            <TouchableHighlight
              style={{alignItems: 'center'}}
              onPress={() => this.saveData()}>
              <View>
                <Text style={{color: 'white', fontSize: 16}}>Continue</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
}

class BirthdayComponent extends React.Component {

  constructor(props) {
    super(props);
    

    console.ignoredYellowBox = [
      'Setting a timer'
      ];

    this.state = {


input_birthday:'',

 

    }  }

    saveData= async() =>{
      const birthday=this.state.input_birthday;
      if (birthday == '')
      {
        Alert.alert('Enter Birthday')
      }
      else {
      try {
        await AsyncStorage.setItem('birthday', birthday);
        this.props.navigation.navigate('Gender')
      
      }catch (error) {
        // Error retrieving data
        Alert.alert(error.message);
      }
      }}

    
  render(){
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={{margin: 50, flex: 2}}>
          <Text style={styles.textStyle}>My</Text>
          <Text style={styles.textStyle}>birthday is</Text>
        </View>
        <View
          style={{
            flex: 2,
            width: '80%',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 40,
          }}>
      <DatePicker
        style={{width: 300}}
        date={this.state.input_birthday}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
     
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({input_birthday: date})}}
      />
        </View>
        <View style={{alignItems: 'center', marginTop: 40, flex: 2}}>
          <View style={styles.roundBtn}>
            <TouchableHighlight
              style={{alignItems: 'center'}}  //this.props.navigation.navigate('Gender')}
              onPress={() =>this.saveData()}>
              <View>
                <Text style={{color: 'white', fontSize: 16}}>Continue</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
}

class GenderComponent extends React.Component {
  constructor(props) {
    super(props);
    

    console.ignoredYellowBox = [
      'Setting a timer'
      ];

    this.state = {


input_gender:'',

 

    }  }


    saveMale= async() =>{
      const gender='Man';
      
 
      try {
        await AsyncStorage.setItem('gender', gender);
        this.props.navigation.navigate('Interest')
      
      }catch (error) {
        // Error retrieving data
        Alert.alert(error.message);
      
      }}

      saveFeMale= async() =>{
        const gender='Woman';
      
 
        try {
          await AsyncStorage.setItem('gender', gender);
          this.props.navigation.navigate('Interest')
        
        }catch (error) {
          // Error retrieving data
          Alert.alert(error.message);
        }}

    render (){
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={{margin: 50, flex: 2}}>
          <Text style={styles.textStyle}>I am a</Text>
        </View>
        <View
          style={{
            flex: 2,
            width: '80%',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 40,
          }}>
          <View style={styles.roundBtnTrans}>
            <TouchableHighlight 
              onPress={() => this.saveFeMale()}
            style={{alignItems: 'center'}}>
              <View>
                <Text style={{color: 'black', fontSize: 17}}>Woman</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.roundBtnTrans}>
            <TouchableHighlight 
            onPress={() => this.saveMale()}
            
            style={{alignItems: 'center'}}>
              <View>
                <Text style={{color: 'black', fontSize: 17}}>Man</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

     
      </View>
    </ScrollView>
  );
}
}
class  InterestComponent extends React.Component {


  constructor(props) {
    super(props);
    

    console.ignoredYellowBox = [
      'Setting a timer'
      ];

    this.state = {


input_interest:'',
 

    }  }



    mixInterested= async() =>{
      const interestedIn='Both';
      
 
      try {
        await AsyncStorage.setItem('interest', interestedIn);
        this.props.navigation.navigate('Occupation')
      
      }catch (error) {
        // Error retrieving data
        Alert.alert(error.message);
      
      }}

    manInterested= async() =>{
      const interestedIn='Man';
      
 
      try {
        await AsyncStorage.setItem('interest', interestedIn);
        this.props.navigation.navigate('Occupation')
      
      }catch (error) {
        // Error retrieving data
        Alert.alert(error.message);
      
      }}

      
    womanInterested= async() =>{
      const interestedIn='Woman';
      
 
      try {
        await AsyncStorage.setItem('interest', interestedIn);
        this.props.navigation.navigate('Occupation')
      
      }catch (error) {
        // Error retrieving data
        Alert.alert(error.message);
      
      }}

  render (){  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={{margin: 50, flex: 2}}>
          <Text style={styles.textStyle}>I am Interested in</Text>
        </View>
        <View
          style={{
            flex: 2,
            width: '80%',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 40,
          }}>
          <View style={styles.roundBtnTrans}>
            <TouchableHighlight 
            
            onPress={() => this.womanInterested()}
            style={{alignItems: 'center'}}>
              <View>
                <Text style={{color: 'black', fontSize: 17}}>Woman</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.roundBtnTrans}>
            <TouchableHighlight 
            
            onPress={() => this.manInterested()}
            style={{alignItems: 'center'}}>
              <View>
                <Text style={{color: 'black', fontSize: 17}}>Man</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.roundBtnTrans}>
            <TouchableHighlight
              onPress={() => this.mixInterested()}
            style={{alignItems: 'center'}}>
              <View>
                <Text style={{color: 'black', fontSize: 17}}>Both</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

      
      </View>
    </ScrollView>
  );
}
}

class OccupationComponent extends React.Component {

  constructor(props) {
    super(props);
    

    console.ignoredYellowBox = [
      'Setting a timer'
      ];

    this.state = {

textInput_School:'',

 

    }  }

      
    student= async() =>{
      const occupation='Student';
      
 
      try {
        await AsyncStorage.setItem('occupation', occupation);
        this.props.navigation.navigate('Phone')
      
      }catch (error) {
        // Error retrieving data
        Alert.alert(error.message);
      
      }}

      employee= async() =>{
        const occupation='Employee';
        
   
        try {
          await AsyncStorage.setItem('occupation', occupation);
          this.props.navigation.navigate('Phone')
        
        }catch (error) {
          // Error retrieving data
          Alert.alert(error.message);
        
        }}
  render (){
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={{margin: 50, flex: 2}}>
          <Text style={styles.textStyle}>My</Text>
          <Text style={styles.textStyle}>occupation is</Text>
        </View>
        <View
          style={{
            flex: 2,
            width: '80%',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 40,
          }}>
          <View style={styles.roundBtnTrans}>
            <TouchableHighlight
            
            onPress={() => this.student()}
            style={{alignItems: 'center'}}>
              <View>
                <Text style={{color: 'black', fontSize: 17}}>Student</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.roundBtnTrans}>
            <TouchableHighlight 
             onPress={() => this.employee()}
            style={{alignItems: 'center'}}>
              <View>
                <Text style={{color: 'black', fontSize: 17}}>Employed</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        {/* <View
          style={{
            flex: 2,
            width: '80%',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 40,
          }}>
          <TextInput
            style={styles.textInput}
            placeholder="occupation"></TextInput>
        </View> */}
     
      </View>
    </ScrollView>
  );
}
}





const options = {
  title:"Loading.....",
  message:"Please Wait",
  isCancelable:false
}
class PhoneComponent extends React.Component {



  saveData= async() =>{
    const phone=this.state.textInput_MobileNo;
    if (phone == '')
    {
      Alert.alert('Enter Phone')
    }
    else {
    try {
      await AsyncStorage.setItem('phone', phone);
      const name = await AsyncStorage.getItem('name') 
      const email = await AsyncStorage.getItem('email')
      const phonee= await AsyncStorage.getItem('phone')
      const gender= await AsyncStorage.getItem('gender')
      const interest= await AsyncStorage.getItem('interest')
      const birthday= await AsyncStorage.getItem('birthday')
      const password= await AsyncStorage.getItem('password')
      const occupation=await AsyncStorage.getItem('occupation')
      DialogProgress.show(options);
      firebase
        .auth()
        .createUserWithEmailAndPassword(
         email,
         password
        ).then(res => {
         
          this.setState({
          userId:res.user.uid

          })


          try {
            firebase.database().ref('Users').child(this.state.userId).set({
                 Name: name,
                Gender:gender,
                Email:email,
                Password:password,
                Interest:interest,
                Occupation:occupation,
                Phone:phonee,
                AccType:'Trial',
                DOB:birthday 
                 
              }).then((data)=>{
                DialogProgress.hide();
                 Alert.alert("Registration SuccessFull, You Can Now Login!")
                 this.props.navigation.navigate('Login')
              }).catch((error)=>{
      
                DialogProgress.hide();
                Alert.alert(error.toString())
              })
        
      
           }catch (error){
            DialogProgress.hide();
            Alert.alert(error.toString())
          }
         


        
          }).catch(error => {
            DialogProgress.hide();
            Alert.alert(JSON.stringify(error));
          });
        


      
    }catch (error) {
      // Error retrieving data
      Alert.alert(error.message);
    }
    }}


  constructor(props) {
    super(props);
    

    console.ignoredYellowBox = [
      'Setting a timer'
      ];

    this.state = {

textInput_MobileNo:'',
userId:'',
config : {
  apiKey: "AIzaSyCnmF9FHph6in4RJDGN-tcTu-y0Tn9Pks0",
  authDomain: "ebigs-tinder.firebaseapp.com",
  databaseURL: "https://ebigs-tinder.firebaseio.com",
  projectId: "ebigs-tinder",
  storageBucket: "ebigs-tinder.appspot.com",
  messagingSenderId: "15088750172",
  appId: "1:15088750172:web:a2ed0b7e6b8c844fc6e099",
  measurementId: "G-QJBDNXPC1Q"
}

 

    }  ;
  
    if (!firebase.apps.length) {
      firebase.initializeApp(this.state.config);
    }
  }
  render (){
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={{margin: 50, flex: 2}}>
          <Text style={styles.textStyle}>My number is</Text>
        </View>
        <View
          style={{
            flex: 2,
            width: '80%',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          <TextInput
            style={styles.textInput}
            placeholder="Mobile Number"
            
            onChangeText={TextInputValue =>
              this.setState({textInput_MobileNo: TextInputValue})
            }
            ></TextInput>
        </View>
        <View style={{alignItems: 'center', marginTop: 40, flex: 2}}>
          <View style={styles.roundBtn}>
            <TouchableHighlight
              style={{alignItems: 'center'}}
              onPress={() => this.saveData()}>
              <View>
                <Text style={{color: 'white', fontSize: 16}}>Continue</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
}







const LoginStack = createStackNavigator({

  Home: {
    screen: EmailComponent,
    navigationOptions: {
      header: null,
     
    },
   
  },
  Birthday: {
    screen: BirthdayComponent,
    navigationOptions: {
      header: null,
     
    },
  },
  Gender: {
    screen: GenderComponent,
    navigationOptions: {
      header: null,
      
    },
  },
  Password: {
    screen:  PasswordComponent,
    navigationOptions: {
      header: null,
    },
  }, 

  Login:{
    screen: LoginScreen,
    navigationOptions:{
      header:null
    }

  },
  Name: {
    screen:  NameComponent,
    navigationOptions: {
      header: null,
    },
  },

  Occupation: {
    screen: OccupationComponent,
    navigationOptions: {
      header: null,
    },
  },
  Phone: {
    screen: PhoneComponent,
    navigationOptions: {
      header: null,
    },
  },

Interest: {
      screen: InterestComponent,
      navigationOptions: {
        header: null,
      },

          },
                EditProfile: {
        screen: EditProfileInfo,
        navigationOptions: {
          header: null,
        },
  },



});


  export default createAppContainer(LoginStack);


