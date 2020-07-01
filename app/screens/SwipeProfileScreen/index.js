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
  ActivityIndicator,
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
      isLoading: true,
      cards: [],
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
        .ref('Users')
        .on('value', querySnapShot => {
          let data = querySnapShot.val() ? querySnapShot.val() : {};
          const list = {...data};
          const obj = Object.values(list);

          const firebaseData = obj;

          that.setState({
            cards: firebaseData,
            isLoading: false,
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
          });
        });
    } catch (error) {
      Alert.alert(error.toString());
    }
  }

  renderCard = cards => {
    console.log(',,', cards);

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
    } else {
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
