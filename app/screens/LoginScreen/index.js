import * as React from 'react';
import { StyleSheet,
   View, 
   Text, 
   Image,
   AsyncStorage,
    StatusBar,
    ScrollView,
    Dimensions,
    TouchableHighlight,
    TextInput,
    Alert
  } from 'react-native';
  import DialogProgress from 'react-native-dialog-progress'
import styles from './style'
import * as firebase from "firebase";


const options = {
  title:"Loading.....",
  message:"Please Wait",
  isCancelable:false
}

export default  class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      emailInput : '',
      passwordInput : '',
      isLoading : false,
      userType:'',
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






  _ValidateFunction = async () => {
   
    DialogProgress.show(options);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const  {
      
      emailInput,
      passwordInput,
 
   
    } = this.state;
    
     if (emailInput== '' || reg.test(emailInput)=== false) {
      alert('Email is Not Correct');
      DialogProgress.hide();
      return false;
    } else if (passwordInput == '' || passwordInput.length <6) {
      alert('Please enter Password , More than 6 characters');
      DialogProgress.hide();
      return false;
    }
    
     
    
    else {
      this._storeData();
    
    }
  };
  _storeData = async () =>{
    DialogProgress.show(options);
    firebase
    .auth()
    .signInWithEmailAndPassword(
      this.state.emailInput,
      this.state.passwordInput
    )
    .then(res => {
      try {
       AsyncStorage.setItem('Id', res.user.uid);
       Alert.alert('Login Success')
      

      } catch (error) {
        DialogProgress.hide();
        Alert.alert("Error Occured ! ")
       
      }
    })
  }

    render (){

    return (
      <ScrollView>
          <StatusBar
            backgroundColor="#FF4A00FF"
            barStyle="light-content"></StatusBar>
          <View style={styles.mainContainer}>
<View
style={{flexDirection:'column',width:'100%',backgroundColor:'#FF4A00FF', height:Dimensions.get('window').height,flex: 1,resizeMode: 'stretch'}}


>

    <View style={{flexDirection:'row' ,alignItems:'center',alignSelf:'center',justifyContent:'center',flex:3}}>
        <Image
        style={styles.fireImage}
        source={require ('../../../assests/images/fireicon.png')}
        />

<Text style={styles.logoText}>

  HobbyFinder
</Text>

    </View>

    <View style={{ width:'80%',alignSelf:'center',alignContent:'center',alignItems:'center',justifyContent:'center',height:40,marginTop:0}}>

        <Text style={styles.bottomText}>

            By tapping Log in , you agree with our Terms of Service and Privacy Policy
        </Text>
    </View>
    <View>
    <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
<TextInput
                  clearButtonMode="always" 
                    placeholder="Email"
                    placeholderTextColor = "#fff"
                    style={styles.textInput}
                    onChangeText={TextInputValue =>
                      this.setState({emailInput: TextInputValue})
                    }
                  />

</View>

<View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
<TextInput
                  clearButtonMode="always" 
                    placeholder="Password"
                    placeholderTextColor = "#fff"
                    style={styles.textInput}
                    onChangeText={TextInputValue =>
                      this.setState({passwordInput: TextInputValue})
                    }
                  />

</View> 
<View style={{alignItems:'center',justifyContent:'center'}}> 
<View   style={{alignItems:'center',justifyContent:'center',borderRadius:10,width:'50%',marginTop:40,height:50,flexDirection:'row',backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}} >
          
<TouchableHighlight  onPress={() =>   this._ValidateFunction()}


style={{alignItems:'center', width:'100%' }}  >
  <View style={{width:'100%',alignItems:'center',justifyContent:'center'}} >
  <Text style={{color:'#FF4A00FF' ,fontSize:15,}}>
Sign-in
</Text>
  </View>

           

  
</TouchableHighlight>
</View>
</View>

    </View>

    <View style={styles.buttonContainer}>
        
<View   style={styles.roundBtn} >
          
          <TouchableHighlight style={{alignItems:'center', }}>
            <View >
            <Text style={{color:'white' , fontSize:17,}}>
        Login with Facebook
          </Text>
            </View>
      
          </TouchableHighlight>
                        
                       </View>


                       <View   style={styles.roundBtn} >
          
          <TouchableHighlight style={{alignItems:'center', }}>
            <View >
            <Text style={{color:'white' , fontSize:16,}}>
        Login with Phone Number
          </Text>
            </View>
          
                     
          
            
          </TouchableHighlight>
                        
                       </View>


    </View>
    
<View style={{flex:2,marginTop:50,alignItems:'center'}}>
  <TouchableHighlight onPress={()=>  Alert.alert('Hy')}>
  <Text style={styles.registerText}>

Trouble Logging in ? Want to Register?
</Text>

  </TouchableHighlight>
 
</View>
                            
                         
              
                        
              </View>

          </View>


      </ScrollView>
      );
  
    }
}

// const myStack = createStackNavigator({

//     Home: {
//       screen: LoginScreen,
//       navigationOptions: {
//         header: null,
       
//       },
     
//     },
//     Register: {
//       screen: RegisterScreen,
//       navigationOptions: {
//         header: null,
       
//       },
//     },
//     HomeScreen:{
//       screen:SwipeScreen,
//       navigationOptions:{
//         header:null
//       }
//     }
    
//   });
  
  
//     export default createAppContainer(myStack);
  
  