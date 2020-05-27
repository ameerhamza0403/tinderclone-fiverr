import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
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
  Modal
  
} from 'react-native';

import { size } from '../../helpers/devices';
import * as Statics from '../../helpers/statics';



import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

import styles from './style';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Slider, Block} from 'galio-framework';




import Rewind  from '../../../assests/images/rewind.png';
import Like from '../../../assests/images/heart.png';
import Boost  from '../../../assests/images/boost.png';
import SuperLike  from '../../../assests/images/super_like.png';
import ViewPager from "@react-native-community/viewpager";

import MapIcon  from '../../../assests/images/map.png';

import Key  from '../../../assests/images/key.png';

import { Container, Header,DeckSwiper, Card, CardItem, Thumbnail,  Left, Body } from 'native-base';
//import ChatScreen from '../ChatScreen/index'

import MatchScreen from '../ItsAMatchScreen/index'

const cards = [
  {


    text: 'Kurt Popp Classes',

    image:{uri : "https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F1.jpg?alt=media&token=d554d673-c044-410a-8a21-b6b093299527"}
  },


  {
    text: 'Hill-Top Dance',

    image: {uri: 'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F2.jpg?alt=media&token=403dad12-51b2-47ea-942a-34d5881fa0b6'}
  },

  {
    text: 'Trilogy BAllRoom Studio',

    image: {uri:'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F3.jpg?alt=media&token=11269f00-b091-40dc-9d53-e962dca2740b'}
  },
  {
    text: 'The BallRoom Westcoast Swing',

    image: {uri:'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F4.jpg?alt=media&token=151f5340-bc49-4fe4-bee5-3ef8da291edf' }
  },
  {
    text: 'Temecule Stampede Country Line Dance',

    image: {uri:"https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F5.jpg?alt=media&token=c7d88a2b-a6f2-41b8-b037-e1d7f038b172" }
  },
  {
    text: 'Almalatine Dance Company',

    image: {uri:'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F6.jpg?alt=media&token=b9750f33-9986-4163-a6cd-53850618146b' }
  },
  {
    text: 'Salsa Step2Dance',

    image: {uri:'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F7.jpg?alt=media&token=27060360-08fe-45db-b3e0-e1aed7c91f5e' }
  },
  {
    text: 'Tango Dance Concepts',

    image: {uri:  "https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F8.jpg?alt=media&token=6c097fb6-f733-43c9-8826-9e486aa85931"}
  },
  {
    text: 'katia Diamond Dance',

    image: {uri: "https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F9.jpg?alt=media&token=d2133450-eb87-473b-9dfc-910d06262fb8" }
  },
  {
    text: 'Queen Beess Bachata ',

    image: {uri:"https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F10.jpg?alt=media&token=4e953cbc-de3f-41e8-ada4-9739dd2f8508" }
  },
  {
    text: 'Atomic BallRoom',

    image: {uri: "https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F11.jpg?alt=media&token=144c172a-73be-4678-9883-d4d5aded916e" }
  },
  {
    text: 'Salsa 619 Dancers',

    image: {uri:  "https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F12.jpg?alt=media&token=da1013ef-bd8e-4581-98b0-2b1cdc8ff8e3" }
  },
  {
    text: 'StarLight Dance Studio',

    image: {uri:"https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F14.jpg?alt=media&token=e87b6e59-c22c-45ab-ba2b-6f48c997d3cc"}
  },
  {
    text: 'Deseo Studios',

    image: {uri:"https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F15.jpg?alt=media&token=17ba499b-ad69-4b24-885d-c3d64638d905"}
  },
  {
    text: 'Speranza Dance',

    image: {uri: "https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F16.jpg?alt=media&token=75aadbbc-5517-41e1-a9fa-8ee5e081f8d8"}
  },
  {
    text: 'Champion Ballroom ',

    image: {uri:"https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F17.jpg?alt=media&token=eefd7136-bc0e-425d-8458-3ce90a8db2e3" }
  },
  {
    text: 'Salsa/Bachata',

    image: {uri: "https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F18.jpg?alt=media&token=53ca5d9c-0c62-48bf-b167-681d0de05bd4"  }
  },
  {
    text: 'MeloMano Bachata',

    image: {uri:"https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F19.jpg?alt=media&token=b1c5cc9a-1b6a-49dd-8653-229988549878" }
  },

  {
    text: 'Majesty in Motion',

    image: {uri:"https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F20.jpg?alt=media&token=618db6e6-d986-46b7-a73a-b6f52e6093b8" }
  },

  ];
class SwipeProfile extends React.Component {
   constructor(props) {

    super(props);

    this.state = { 
        
        ModalVisibleStatus: false 
    };

  }

  gotoMessages =()=>{
    this.setState({
    ModalVisibleStatus:false
    })

    this.props.navigation.navigate('MatchScreen')

  }
  state = {switchValue: false, sliderValue: 1};
  toggleSwitch = value => {
    //onValueChange of the switch this function will be called
    this.setState({switchValue: value});
    //state changes according to switch
    //which will result in re-render the text
  };

  ShowModalFunction(visible) {

    this.setState({ModalVisibleStatus: visible});
    
    
  }

  componentDidMount(){

    console.disableYellowBox=true
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.Container}>
          <StatusBar
            backgroundColor="#FF4A00FF"
            barStyle="light-content"></StatusBar>

<Modal
          transparent={true}
        
          animationType={"slide"}
          visible={this.state.ModalVisibleStatus}
          onRequestClose={ () => { this.ShowModalFunction(!this.state.ModalVisibleStatus)} } >
<SafeAreaView>

  <ScrollView>
  <View style={{  
  backgroundColor : "#fff",   
  height: Statics.DEVICE_HEIGHT/2,  
  width: Statics.DEVICE_WIDTH,  
  borderRadius:size(10),  
  borderWidth: size(1),  
  borderColor: '#fff',    
  marginTop: size(400),  
  marginLeft: 0,   }}>

<View style={{marginTop:size(20),marginLeft:size(20)}}>
  <Text style={{fontSize:size(20)}}>
    Confirm you can play
  </Text>
</View>
<View style={{height:1,width:Statics.DEVICE_WIDTH,backgroundColor:'#ABABAB', marginTop:size(20)}}/>

<View style={{marginTop:size(20),width:Statics.DEVICE_WIDTH/1.2,marginLeft:size(20)}}>
  <Text style={{fontSize:size(17)}}>
    If you have any question , please chat first.
  </Text>
</View>

<View style={{width:Statics.DEVICE_WIDTH/1.2 , marginLeft:size(20),marginTop:size(20)}}>
  <Text style={{fontSize:size(17)}}>
    By clicking play , you are making a commitment to Us that you will turn up for this game on time.
  </Text>
</View>

<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',flex:1}}>

<TouchableOpacity 


onPress={() =>  this.gotoMessages()}


>
  <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'#0bd67b', height:55,width:140,borderRadius:10}}>
    <Text style={{color:'#fff',fontSize:16}}>
Accept
    </Text>
  </View>
</TouchableOpacity>
 {/* onPress={() => navigation.navigate('ChatScreen')} */}

<TouchableOpacity  >
  <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'#34b6c7', height:55,width:140,marginLeft:20,borderRadius:10}}>
    <Text style={{color:'#fff',fontSize:16}}>
Chat
    </Text>
  </View>
</TouchableOpacity>
   
</View>

    {/* <Button  title="Hide" onPress={() => { this.ShowModalFunction(!this.state.ModalVisibleStatus)} } /> */}






</View>



  </ScrollView>
</SafeAreaView>

    
        </Modal>
<View style={{marginLeft:size(32),width:Statics.DEVICE_WIDTH}}>
  
<DeckSwiper
          dataSource={cards}
          onSwipeRight={()=>this.ShowModalFunction(true)}
          renderItem={item =>
            <Card style={{ elevation: 0,marginTop:0,width:Statics.DEVICE_WIDTH/1.2,height:Statics.DEVICE_HEIGHT/1.5 }}>
              <CardItem>
                <Left>
                  <Thumbnail source={item.image}  />
                  <Body>
                    <Text>{item.text}</Text>
                 
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image style={{ height: Statics.DEVICE_WIDTH/1.2, flex: 1 }} source={item.image} />
              </CardItem>
              <CardItem>
              
                <Text>{item.name}</Text>
              </CardItem>
            </Card>
          }
        />

</View>
        

<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:size(550),}}>

        

        <View style={styles.slide}>
          <View style={styles.title_container}>
            <Image source={SuperLike} style={styles.icon_style}/>
            
          </View>

        </View>
        <View style={styles.slide}>
          <View style={styles.title_container}>
            <Image source={MapIcon} style={styles.icon_style}/>
           
          </View>
          
        </View>
        <View style={styles.slide}>
          <View style={styles.title_container}>
            <Image source={Key} style={styles.icon_style} />
           
          </View>
        
        </View>
        <View style={styles.slide}>
          <View style={styles.title_container}>
            <Image source={Rewind} style={[styles.icon_style, {tintColor: 'rgb(250,177,11)'}]}/>
           
          </View>
        
        </View>
        <TouchableOpacity >

        <View style={styles.slide}>
          <View style={styles.title_container}>
            <Image source={Like} style={styles.icon_style}/>
            
          </View>
        
        </View>
        </TouchableOpacity>
 
</View>
  


        </View>
      </ScrollView>
    );
  }
}


const stack = createStackNavigator({

  Home: {
    screen: SwipeProfile,
    navigationOptions: {
      header: null,
     
    },
   
  },
  MatchScreen: {
    screen: MatchScreen,
    navigationOptions: {
      header: null,
     
    },
  },
  // ChatScreen: {
  //   screen: ChatScreen,
  //   navigationOptions: {
  //     header: null,
      
  //   },
  // },
  
  



});

export default stack;


// SwipeProfile.navigationOptions={  
//   tabBarIcon:({tintColor, focused})=>(  
//       <Icon  
//           name={focused ? 'whatshot' : 'whatshot'}  
//           color={tintColor}  
//           size={25}  
//       />  
//   )  
// }  