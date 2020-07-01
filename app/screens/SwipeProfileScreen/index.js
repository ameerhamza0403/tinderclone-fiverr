import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import database from '@react-native-firebase/database';
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
  Alert,
  ActivityIndicator
} from 'react-native';

import {size} from '../../helpers/devices';
import * as Statics from '../../helpers/statics';



import styles from './style';
import SubscriptionScreen from '../SubscriptionScreen/index';

import {
  Container,
  Header,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
} from 'native-base';
//import ChatScreen from '../ChatScreen/index'

import MatchScreen from '../ItsAMatchScreen/index';
import Swiper from 'react-native-deck-swiper';


class SwipeCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swipedAllCards: false,
      swipeDirection: '',
      cardIndex: 0,
      ModalVisibleStatus: false,
      accCreatedOn: '',
      accType: '',
      payment: false,
      currentDate: '',
      isLoading:true,

      cards: [
        // {
        //   text: 'Ebigs',
        //   image: {
        //     uri:
        //       'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F1.jpg?alt=media&token=d554d673-c044-410a-8a21-b6b093299527',
        //   },
        // },
        // {
        //   text: 'Saye',
        //   image: {
        //     uri:
        //       'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F2.jpg?alt=media&token=403dad12-51b2-47ea-942a-34d5881fa0b6',
        //   },
        // },
        // {
        //   text: 'Hamza',
        //   image: {
        //     uri:
        //       'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F3.jpg?alt=media&token=11269f00-b091-40dc-9d53-e962dca2740b',
        //   },
        // },
        // {
        //   text: 'Ebigs',
        //   image: {
        //     uri:
        //       'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F4.jpg?alt=media&token=151f5340-bc49-4fe4-bee5-3ef8da291edf',
        //   },
        // },
        // {
        //   text: 'Saye',
        //   image: {
        //     uri:
        //       'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F5.jpg?alt=media&token=c7d88a2b-a6f2-41b8-b037-e1d7f038b172',
        //   },
        // },
        // {
        //   text: 'Hamza',
        //   image: {
        //     uri:
        //       'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F6.jpg?alt=media&token=b9750f33-9986-4163-a6cd-53850618146b',
        //   },
        // },
        // {
        //   text: 'Ebigs',
        //   image: {
        //     uri:
        //       'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F7.jpg?alt=media&token=27060360-08fe-45db-b3e0-e1aed7c91f5e',
        //   },
        // },
        // {
        //   text: 'Saye',
        //   image: {
        //     uri:
        //       'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F8.jpg?alt=media&token=6c097fb6-f733-43c9-8826-9e486aa85931',
        //   },
        // },
        // {
        //   text: 'Hamza',
        //   image: {
        //     uri:
        //       'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F9.jpg?alt=media&token=d2133450-eb87-473b-9dfc-910d06262fb8',
        //   },
        // },
        // {
        //   text: 'Ebigs',
        //   image: {
        //     uri:
        //       'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F10.jpg?alt=media&token=4e953cbc-de3f-41e8-ada4-9739dd2f8508',
        //   },
        // },
        // {
        //   text: 'Saye',
        //   image: {
        //     uri:
        //       'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F11.jpg?alt=media&token=144c172a-73be-4678-9883-d4d5aded916e',
        //   },
        // },
        // {
        //   text: 'Hamza',
        //   image: {
        //     uri:
        //       'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F12.jpg?alt=media&token=da1013ef-bd8e-4581-98b0-2b1cdc8ff8e3',
        //   },
        // },
        // {
        //   text: 'Ebigs',
        //   image: {
        //     uri:
        //       'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F14.jpg?alt=media&token=e87b6e59-c22c-45ab-ba2b-6f48c997d3cc',
        //   },
        // },
        // {
        //   text: 'Saye',
        //   image: {
        //     uri:
        //       'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F15.jpg?alt=media&token=17ba499b-ad69-4b24-885d-c3d64638d905',
        //   },
        // },
        // {
        //   text: 'Hamza',
        //   image: {
        //     uri:
        //       'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F16.jpg?alt=media&token=75aadbbc-5517-41e1-a9fa-8ee5e081f8d8',
        //   },
        // },
        // {
        //   text: 'Ebigs',
        //   image: {
        //     uri:
        //       'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F17.jpg?alt=media&token=eefd7136-bc0e-425d-8458-3ce90a8db2e3',
        //   },
        // },
        // {
        //   text: 'Saye',
        //   image: {
        //     uri:
        //       'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F18.jpg?alt=media&token=53ca5d9c-0c62-48bf-b167-681d0de05bd4',
        //   },
        // },
        // {
        //   text: 'Hamza',
        //   image: {
        //     uri:
        //       'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F19.jpg?alt=media&token=b1c5cc9a-1b6a-49dd-8653-229988549878',
        //   },
        // },
        // {
        //   text: 'Ebigs',
        //   image: {
        //     uri:
        //       'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F20.jpg?alt=media&token=618db6e6-d986-46b7-a73a-b6f52e6093b8',
        //   },
        // },
      ],
    };
  }

  getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    this.setState({
      currentDate: month + '/' + date + '/' + year,
    });

    this.goToMessages();
  };

  goToMessages = () => {
    var accDate = new Date(this.state.accCreatedOn);
    var todayDate = new Date(this.state.currentDate);
    var difference_In_Time = todayDate.getTime() - accDate.getTime();
    var difference_In_Days = difference_In_Time / (1000 * 3600 * 24);

    if (difference_In_Days <= 7) {
      Alert.alert('Your have trial, Congrats! Its a Dutch');
      this.props.navigation.navigate('MatchScreen');
      this.setState({
        ModalVisibleStatus: false,
      });
    } else {
      if (this.state.payment) {
        Alert.alert('You are a subscriber, Congrats! Its a Dutch');
        this.props.navigation.navigate('MatchScreen');
        this.setState({
          ModalVisibleStatus: false,
        });
      } else {
        Alert.alert(
          'You have no trial or you are not a subscriber ,Please Pay',
        );
        this.props.navigation.navigate('PaymentScreen');
        this.setState({
          ModalVisibleStatus: false,
        });
      }
    }
  };
  state = {switchValue: false, sliderValue: 1};
  toggleSwitch = value => {
    this.setState({switchValue: value});
  };

  showModalFunction(visible) {
    this.onSwiped('top');

    this.setState({ModalVisibleStatus: visible});
  }
  async componentDidMount() {
    let myList = [];
    const that = this;
    console.disableYellowBox = true;
    const id = await AsyncStorage.getItem('id', 0);
    console.log(id);

    try {
      this.setState({
        userId: id,
      });

      database()
        .ref('/Users/')
        .on('value', querySnapShot => {
          let data = querySnapShot.val() ? querySnapShot.val() : {};
          let list = {...data};
          let obj = Object.values(list);

          const firebaseData = obj;

         console.log(',', firebaseData);

          const {id, name, eventImages} = firebaseData;
          myList.push({
            id: id,
            name: name,
            eventImages: eventImages,
          });

          that.setState({
            cards: firebaseData,
            isLoading:false
          });

          console.log(',,', that.state.cards);
        });

      database()
        .ref('/Users/' + id)
        .on('value', querySnapShot => {
          let data = querySnapShot.val() ? querySnapShot.val() : {};
          let list = {...data};
          //console.log('User Data', list);

          this.setState({
            payment: list.payment,
            accCreatedOn: list.createdOn,
            accType: list.accType,
            isLoading: false,
          });
        });
    } catch (error) {
      Alert.alert(error.toString());
    }
  }

  renderCard = (cards) => {
    console.log(',,',cards)
   
    return (
      
      <View style={styles.card}>
       
         {/* <View style={{flex: 4}}>
          <Image style={{width: '100%', height: 600}} source={ { uri : cards.eventImages}} />
        </View> */}

        <View style={{marginTop: 0, flex: 1}}>
          <Text style={styles.text}>{cards.name}</Text>
        </View> 
      </View>
    );
  };

  onSwiped = type => {
    console.log(`on swiped ${type}`);
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true,
    });
  };

  render() {

    if (this.state.isLoading) {
      return (
        <View>
          <StatusBar backgroundColor="#29AB87" barStyle="light-content" />

          <ActivityIndicator
            color="#29AB87"
            size="large"
            style={{marginTop: 10}}
          />
        </View>
      );
    }

  
    return (
      <View style={styles.Container}>
        <Modal
          transparent={true}
          animationType={'slide'}
          visible={this.state.ModalVisibleStatus}
          onRequestClose={() => {
            this.showModalFunction(!this.state.ModalVisibleStatus);
          }}>
          <SafeAreaView>
            <ScrollView>
              <View
                style={{
                  backgroundColor: '#fff',
                  height: Statics.DEVICE_HEIGHT / 2,
                  width: Statics.DEVICE_WIDTH,
                  borderRadius: size(10),
                  borderWidth: size(1),
                  borderColor: '#fff',
                  marginTop: size(400),
                  marginLeft: 0,
                }}>
                <View style={{marginTop: size(20), marginLeft: size(20)}}>
                  <Text style={{fontSize: size(20)}}>
                    Confirm you will attend event
                  </Text>
                </View>
                <View
                  style={{
                    height: 1,
                    width: Statics.DEVICE_WIDTH,
                    backgroundColor: '#ABABAB',
                    marginTop: size(20),
                  }}
                />

                <View
                  style={{
                    marginTop: size(20),
                    width: Statics.DEVICE_WIDTH / 1.2,
                    marginLeft: size(20),
                  }}>
                  <Text style={{fontSize: size(17)}}>
                    If you have any question , please chat first.
                  </Text>
                </View>

                <View
                  style={{
                    width: Statics.DEVICE_WIDTH / 1.2,
                    marginLeft: size(20),
                    marginTop: size(20),
                  }}>
                  <Text style={{fontSize: size(17)}}>
                    By clicking Go Dutch, you are making a commitment to your
                    partner that you will turn up for this event on time
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                  }}>
                  <TouchableOpacity onPress={() => this.getCurrentDate()}>
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#0bd67b',
                        height: 55,
                        width: 140,
                        borderRadius: 10,
                      }}>
                      <Text style={{color: '#fff', fontSize: 16}}>
                        Go Dutch
                      </Text>
                    </View>
                  </TouchableOpacity>
                  {/* onPress={() => navigation.navigate('ChatScreen')} */}
                </View>

                {/* <Button  title="Hide" onPress={() => { this.ShowModalFunction(!this.state.ModalVisibleStatus)} } /> */}
              </View>
            </ScrollView>
          </SafeAreaView>
        </Modal>
        <Swiper
          ref={swiper => {
            this.swiper = swiper;
          }}
          onSwipedTop={() => this.showModalFunction(true)}
          onSwipedBottom={() => this.onSwiped('bottom')}
          cards={this.state.cards}
          cardVerticalMargin={10}
          backgroundColor={'tranparent'}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          stackSize={3}
          stackSeparation={15}
          disableLeftSwipe={true}
          disableRightSwipe={true}
          overlayLabels={{
            bottom: {
              title: 'Dislike',
              style: {
                label: {
                  backgroundColor: '#FF4A00FF',
                  borderColor: '#FF4A00FF',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              },
            },

            top: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: '#FF4A00FF',
                  borderColor: '#FF4A00FF',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              },
            },
          }}
        />
      </View>
    );
  }
}

const stack = createStackNavigator({
  Home: {
    screen: SwipeCards,
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
  PaymentScreen: {
    screen: SubscriptionScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export default stack;
