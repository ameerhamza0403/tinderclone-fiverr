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
  ActivityIndicator,
  Alert,
} from 'react-native';

import database from '@react-native-firebase/database';

import styles from './style';

import Slider from '@react-native-community/slider';
import {cos} from 'react-native-reanimated';

let sliderLevels = [
  'Beginner',
  'Improver',
  'Intermediate',
  'Advanced',
  'Expert',
];

let sliderDes = [
  'I am new at dancing or have only danced a couple times',
  'I know the basic techniques but still make a few mistakes',
  'I can do this comfortably but not consistently in a social situation',
  'I am good at dancing and have experience',
  'I have competed locally or nationwide',
];
let myHobbies = [];
export default class EditProfileInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisibleStatus: false,
      userId: '',
      isLoading: '',
      company: '',
      school: '',
      livingIn: '',
      sexualOrientation: '',
      gender: '',
      distanceVisible: '',
      showAge: '',
      skills: '',
      hobbies: [],
    };
  }
  state = {switchValue: false, sliderValue: 1};

  // distanceSwitch=value=>{
  //   this.setState({

  //     distanceVisible:value
  //   })
  // }
  // ageSwitch=value=>{
  //   this.setState({
  //     showAge:value
  //   })
  //   console.log(this.state.showAge)
  // }

  setHobbies = value => {
    if (myHobbies.length >= 3) {
      alert('Max 3 hobbies can be selected');
    } else {
      myHobbies.push(value);

      const hobbies = myHobbies.toString();
      console.log(hobbies);
      this.setState({
        hobbies: hobbies,
      });
    }
  };
  showModalFunction(visible) {
    this.setState({modalVisibleStatus: visible});
  }

  async componentDidMount() {
    const id = await AsyncStorage.getItem('id', 0);
    this.setState({
      userId: id,
    });
    console.log(this.state.userId);

    try {
      database()
        .ref('/Users/' + id)
        .on('value', querySnapShot => {
          let data = querySnapShot.val() ? querySnapShot.val() : {};
          let list = {...data};
          console.log(list.company);

          this.setState({
            company: list.company,
            school: list.school,
            livingIn: list.livingIn,
            gender: list.gender,
            sexualOrientation: list.sexualOrientation,
            hobbies: list.hobbies,
            isLoading: false,
          });

          // console.log(this.state.dataSource);
        });
    } catch (error) {
      Alert.alert(error.toString());
    }
  }
  loader = value => {
    this.setState({
      isLoading: value,
    });
  };

  validate = () => {
    this.setState({
      isLoading: true,
    });

    if (this.state.company == '') {
      alert('Enter Company');
      this.loader(false);
    } else if (this.state.school == '') {
      alert('Enter School');
      this.loader(false);
    } else if (this.state.livingIn == '') {
      alert('Enter city');
      this.loader(false);
    } else if (this.state.gender == '') {
      alert('Enter gender');
      this.loader(false);
    } else if (this.state.sexualOrientation == '') {
      alert('Enter sexual orientation');
      this.loader(false);
    } else if (this.state.myHobbies == '') {
      alert('Select Hobbiess');
    } else {
      try {
        database()
          .ref('Users')
          .child(this.state.userId)
          .update({
            company: this.state.company,
            school: this.state.school,
            livingIn: this.state.livingIn,
            gender: this.state.gender,
            sexualOrientation: this.state.sexualOrientation,
            hobbies: this.state.hobbies,
          })
          .then(data => {
            this.setState({
              isLoading: false,
            });
          });
      } catch (error) {
        Alert.alert(error);
      }
    }
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
      <ScrollView>
        {/* {this.state.dataSource.map((item, key) => (   */}
        <View style={styles.mainContainer}>
          <StatusBar backgroundColor="#FF4A00FF" barStyle="light-content" />

          <Modal
            transparent={false}
            animationType={'slide'}
            visible={this.state.modalVisibleStatus}
            onRequestClose={() => {
              this.showModalFunction(!this.state.modalVisibleStatus);
            }}>
            <SafeAreaView>
              <ScrollView>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={styles.ModalInsideView}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.imageView}>
                        <Image
                          style={styles.imageStyle}
                          source={{
                            uri:
                              'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F1.jpg?alt=media&token=d554d673-c044-410a-8a21-b6b093299527',
                          }}
                        />
                      </View>
                      <View style={styles.imageView}>
                        <Image
                          style={styles.imageStyle}
                          source={{
                            uri:
                              'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F2.jpg?alt=media&token=403dad12-51b2-47ea-942a-34d5881fa0b6',
                          }}
                        />
                      </View>
                      <View style={styles.imageView}>
                        <Image
                          style={styles.imageStyle}
                          source={{
                            uri:
                              'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F3.jpg?alt=media&token=11269f00-b091-40dc-9d53-e962dca2740b',
                          }}
                        />
                      </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.imageView}>
                        <Image
                          style={styles.imageStyle}
                          source={{
                            uri:
                              'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F4.jpg?alt=media&token=151f5340-bc49-4fe4-bee5-3ef8da291edf',
                          }}
                        />
                      </View>
                      <View style={styles.imageView}>
                        <Image
                          style={styles.imageStyle}
                          source={{
                            uri:
                              'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F5.jpg?alt=media&token=c7d88a2b-a6f2-41b8-b037-e1d7f038b172',
                          }}
                        />
                      </View>
                      <View style={styles.imageView}>
                        <Image
                          style={styles.imageStyle}
                          source={{
                            uri:
                              'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F6.jpg?alt=media&token=b9750f33-9986-4163-a6cd-53850618146b',
                          }}
                        />
                      </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.imageView}>
                        <Image
                          style={styles.imageStyle}
                          source={{
                            uri:
                              'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F7.jpg?alt=media&token=27060360-08fe-45db-b3e0-e1aed7c91f5e',
                          }}
                        />
                      </View>
                      <View style={styles.imageView}>
                        <Image
                          style={styles.imageStyle}
                          source={{
                            uri:
                              'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F8.jpg?alt=media&token=6c097fb6-f733-43c9-8826-9e486aa85931',
                          }}
                        />
                      </View>
                      <View style={styles.imageView}>
                        <Image
                          style={styles.imageStyle}
                          source={{
                            uri:
                              'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F9.jpg?alt=media&token=d2133450-eb87-473b-9dfc-910d06262fb8',
                          }}
                        />
                      </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.imageView}>
                        <Image
                          style={styles.imageStyle}
                          source={{
                            uri:
                              'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F10.jpg?alt=media&token=4e953cbc-de3f-41e8-ada4-9739dd2f8508',
                          }}
                        />
                      </View>
                      <View style={styles.imageView}>
                        <Image
                          style={styles.imageStyle}
                          source={{
                            uri:
                              'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F11.jpg?alt=media&token=144c172a-73be-4678-9883-d4d5aded916e',
                          }}
                        />
                      </View>
                      <View style={styles.imageView}>
                        <Image
                          style={styles.imageStyle}
                          source={{
                            uri:
                              'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F12.jpg?alt=media&token=da1013ef-bd8e-4581-98b0-2b1cdc8ff8e3',
                          }}
                        />
                      </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.imageView}>
                        <Image
                          style={styles.imageStyle}
                          source={{
                            uri:
                              'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F14.jpg?alt=media&token=e87b6e59-c22c-45ab-ba2b-6f48c997d3cc',
                          }}
                        />
                      </View>
                      <View style={styles.imageView}>
                        <Image
                          style={styles.imageStyle}
                          source={{
                            uri:
                              'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F15.jpg?alt=media&token=17ba499b-ad69-4b24-885d-c3d64638d905',
                          }}
                        />
                      </View>
                      <View style={styles.imageView}>
                        <Image
                          style={styles.imageStyle}
                          source={{
                            uri:
                              'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F16.jpg?alt=media&token=75aadbbc-5517-41e1-a9fa-8ee5e081f8d8',
                          }}
                        />
                      </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.imageView}>
                        <Image
                          style={styles.imageStyle}
                          source={{
                            uri:
                              'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F17.jpg?alt=media&token=eefd7136-bc0e-425d-8458-3ce90a8db2e3',
                          }}
                        />
                      </View>
                      <View style={styles.imageView}>
                        <Image
                          style={styles.imageStyle}
                          source={{
                            uri:
                              'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F18.jpg?alt=media&token=53ca5d9c-0c62-48bf-b167-681d0de05bd4',
                          }}
                        />
                      </View>
                      <View style={styles.imageView}>
                        <Image
                          style={styles.imageStyle}
                          source={{
                            uri:
                              'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F19.jpg?alt=media&token=b1c5cc9a-1b6a-49dd-8653-229988549878',
                          }}
                        />
                      </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.imageView}>
                        <Image
                          style={styles.imageStyle}
                          source={{
                            uri:
                              'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F20.jpg?alt=media&token=618db6e6-d986-46b7-a73a-b6f52e6093b8',
                          }}
                        />
                      </View>
                    </View>

                    <Button
                      title="Hide"
                      onPress={() => {
                        this.showModalFunction(!this.state.modalVisibleStatus);
                      }}
                    />
                  </View>
                </View>
              </ScrollView>
            </SafeAreaView>
          </Modal>

          <View style={{width: '100%'}}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <View style={styles.imageView}>
                  <Image
                    style={styles.imageStyle}
                    source={{
                      uri:
                        'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F20.jpg?alt=media&token=618db6e6-d986-46b7-a73a-b6f52e6093b8',
                    }}
                  />
                </View>
                <View style={{position: 'absolute', left: 100, top: 170}}>
                  <Image
                    style={styles.iconStyle}
                    source={require('../../../assests/images/delImage.png')}
                  />
                </View>
              </View>

              <View>
                <View style={styles.imageView}>
                  <Image
                    style={styles.imageStyle}
                    source={{
                      uri:
                        'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F4.jpg?alt=media&token=151f5340-bc49-4fe4-bee5-3ef8da291edf',
                    }}
                  />
                </View>
                <View style={{position: 'absolute', left: 100, top: 170}}>
                  <Image
                    style={styles.iconStyle}
                    source={require('../../../assests/images/delImage.png')}
                  />
                </View>
              </View>

              <View>
                <View style={styles.imageView}>
                  <Image
                    style={styles.imageStyle}
                    source={{
                      uri:
                        'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F16.jpg?alt=media&token=75aadbbc-5517-41e1-a9fa-8ee5e081f8d8',
                    }}
                  />
                </View>
                <View style={{position: 'absolute', left: 100, top: 170}}>
                  <Image
                    style={styles.iconStyle}
                    source={require('../../../assests/images/delImage.png')}
                  />
                </View>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View>
                <View style={styles.imageView}>
                  <Image
                    style={styles.imageStyle}
                    source={{
                      uri:
                        'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F19.jpg?alt=media&token=b1c5cc9a-1b6a-49dd-8653-229988549878',
                    }}
                  />
                </View>
                <View style={{position: 'absolute', left: 100, top: 170}}>
                  <Image
                    style={styles.iconStyle}
                    source={require('../../../assests/images/delImage.png')}
                  />
                </View>
              </View>

              <View>
                <View style={styles.imageView}>
                  <Image
                    style={styles.imageStyle}
                    source={{
                      uri:
                        'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F20.jpg?alt=media&token=618db6e6-d986-46b7-a73a-b6f52e6093b8',
                    }}
                  />
                </View>
                <View style={{position: 'absolute', left: 100, top: 170}}>
                  <Image
                    style={styles.iconStyle}
                    source={require('../../../assests/images/delImage.png')}
                  />
                </View>
              </View>

              <View>
                <View style={styles.imageView}>
                  <Image
                    style={styles.imageStyle}
                    source={{
                      uri:
                        'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F14.jpg?alt=media&token=e87b6e59-c22c-45ab-ba2b-6f48c997d3cc',
                    }}
                  />
                </View>
                <View style={{position: 'absolute', left: 100, top: 170}}>
                  <Image
                    style={styles.iconStyle}
                    source={require('../../../assests/images/delImage.png')}
                  />
                </View>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View>
                <View style={styles.imageView} />
                <View style={{position: 'absolute', left: 100, top: 170}}>
                  <Image
                    style={styles.iconStyle}
                    source={require('../../../assests/images/AddImage.png')}
                  />
                </View>
              </View>

              <View>
                <View style={styles.imageView} />
                <View style={{position: 'absolute', left: 100, top: 170}}>
                  <Image
                    style={styles.iconStyle}
                    source={require('../../../assests/images/AddImage.png')}
                  />
                </View>
              </View>

              <View>
                <View style={styles.imageView} />
                <View style={{position: 'absolute', left: 100, top: 170}}>
                  <Image
                    style={styles.iconStyle}
                    source={require('../../../assests/images/AddImage.png')}
                  />
                </View>
              </View>
            </View>

            <View style={{alignItems: 'center', marginTop: 20, flex: 2}}>
              <View style={styles.roundBtn}>
                <TouchableOpacity
                  style={{alignItems: 'center'}}
                  onPress={() => {
                    this.showModalFunction(true);
                  }}>
                  <View>
                    <Text style={{color: 'white', fontSize: 16}}>
                      Add Media
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.viewContainer}>
              <View
                style={{
                  marginTop: 8,
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  width: '100%',
                }}>
                <Text
                  style={[
                    styles.heading,
                    {color: 'red', height: 40, marginTop: 7, fontSize: 15},
                  ]}>
                  Smart Photos
                </Text>

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

          <View>
            <View style={styles.viewContainer}>
              <Text style={styles.heading}>Company</Text>
              <View style={{marginTop: 8, backgroundColor: 'white'}}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Add Company"
                  value={this.state.company}
                  onChangeText={textInput =>
                    this.setState({
                      company: textInput,
                    })
                  }
                />
              </View>
            </View>

            <View style={styles.viewContainer}>
              <Text style={styles.heading}>School</Text>
              <View style={{marginTop: 8, backgroundColor: 'white'}}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Add School"
                  value={this.state.school}
                  onChangeText={textInput =>
                    this.setState({
                      school: textInput,
                    })
                  }
                />
              </View>
            </View>
          </View>

          <View style={styles.viewContainer}>
            <Text style={styles.heading}>Living in</Text>
            <View style={{marginTop: 8, backgroundColor: 'white'}}>
              <TextInput
                style={styles.textInput}
                placeholder="Add City"
                value={this.state.livingIn}
                onChangeText={textInput =>
                  this.setState({
                    livingIn: textInput,
                  })
                }
              />
            </View>
          </View>
          <View style={[styles.viewContainer, {marginTop: 0}]}>
            <Text style={styles.heading}>I am</Text>
            <View style={{marginTop: 8, backgroundColor: 'white'}}>
              <TextInput
                style={styles.textInput}
                placeholder="Add Gender"
                value={this.state.gender}
                onChangeText={textInput =>
                  this.setState({
                    gender: textInput,
                  })
                }
              />
            </View>
          </View>
          <View style={styles.viewContainer}>
            <Text style={styles.heading}>Sexual Orientation</Text>
            <View style={{marginTop: 8, backgroundColor: 'white'}}>
              <TextInput
                style={styles.textInput}
                placeholder="Add Sexual Orientation"
                value={this.state.sexualOrientation}
                onChangeText={textInput =>
                  this.setState({
                    sexualOrientation: textInput,
                  })
                }
                sexualOrientation
              />
            </View>
          </View>
          <View style={[styles.viewContainer]}>
            <Text style={styles.heading}>Control Your Profile</Text>
            <View
              style={{
                marginTop: 8,
                backgroundColor: 'white',
                flexDirection: 'row',
                width: '100%',
              }}>
              <Text
                style={[
                  styles.heading,
                  {color: '#626262', height: 40, marginTop: 7},
                ]}>
                Make My Distance Visible
              </Text>

              <View style={{alignItems: 'flex-end', marginTop: 10, flex: 1}}>
                <Switch
                  trackColor={{true: 'red', false: 'grey'}}
                  style={{marginTop: 0}}
                  // onValueChange={this.distanceSwitch()}
                  value={this.state.distanceVisible}
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
              <Text
                style={[
                  styles.heading,
                  {color: '#626262', height: 40, marginTop: 7},
                ]}>
                Show My Age
              </Text>

              <View style={{alignItems: 'flex-end', marginTop: 10, flex: 1}}>
                <Switch
                  trackColor={{true: 'red', false: 'grey'}}
                  style={{marginTop: 0}}
                  // onValueChange={this.ageSwitch()}
                  value={this.state.showAge}
                />
              </View>
            </View>
          </View>

          <View style={[styles.viewContainer, {height: 50}]}>
            <Text style={styles.heading}>What are Your Skills</Text>
          </View>
          <View style={{backgroundColor: 'white'}}>
            <View
              style={{flexDirection: 'column', width: '90%', marginLeft: '5%'}}>
              <View
                style={{alignItems: 'center', marginTop: 10, marginBottom: 5}}>
                <Text
                  style={{
                    textAlign: 'center',
                    width: '40%',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  {sliderLevels[this.state.sliderValue - 1]}
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: 10,
                  marginBottom: 25,
                  height: 50,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    width: '90%',
                    fontSize: 13,
                  }}>
                  {sliderDes[this.state.sliderValue - 1]}
                </Text>
              </View>
              <View style={{justifyContent: 'flex-end', marginBottom: 20}}>
                <Slider
                  maximumValue={5}
                  minimumValue={0}
                  thumbTintColor={'#FF655B'}
                  // thumbImage={require('../../../assests/images/dance.png')}

                  step={1}
                  value={this.state.sliderValue}
                  onValueChange={value => {
                    this.setState({
                      sliderValue: value,
                    });
                  }}
                />
              </View>
              <View style={{flexDirection: 'row', marginBottom: 50}}>
                <View style={{justifyContent: 'flex-start', flex: 1}}>
                  <Text style={{textAlign: 'center'}}>Beginner</Text>
                </View>
                <View style={{justifyContent: 'center', flex: 1}}>
                  <Text style={{textAlign: 'center'}}>Intermediate</Text>
                </View>
                <View style={{justifyContent: 'flex-end', flex: 1}}>
                  <Text style={{textAlign: 'center'}}>Expert</Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: 'white',

              width: '100%',
              marginLeft: 10,
              marginRight: 10,
              flex: 1,
            }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text
                style={{fontSize: 18, fontWeight: 'bold', alignSelf: 'center'}}>
                My Hobbies Picks
              </Text>
              <Text style={{fontSize: 16, alignSelf: 'center'}}>
                Max 3 Dances can be selected
              </Text>
            </View>

            <View
              style={{
                marginTop: 8,
                backgroundColor: 'white',
                alignItems:'center'
              }}>
              <Text style={[{color: '#626262', height: 40, marginTop: 7}]}>
                {this.state.hobbies}
              </Text>
            </View>

            <View style={{flex: 1}}>
              <View style={{flex: 1, marginRight: 20}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={styles.danceBtn}>
                      <TouchableOpacity
                        onPress={() => this.setHobbies('Social Dance')}>
                        <View>
                          <Text style={{color: 'white', fontSize: 16}}>
                            Social dance
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.danceBtn}>
                      <TouchableOpacity
                        onPress={() => this.setHobbies('Gym Workout')}>
                        <View>
                          <Text style={{color: 'white', fontSize: 16}}>
                            Gym workout
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.danceBtn}>
                      <TouchableOpacity
                        onPress={() => this.setHobbies('Dance')}>
                        <View>
                          <Text style={{color: 'white', fontSize: 16}}>
                            Dance
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.danceBtn}>
                      <TouchableOpacity
                        onPress={() => this.setHobbies('Fitness')}>
                        <View>
                          <Text style={{color: 'white', fontSize: 16}}>
                            Fitness
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ScrollView>
              </View>

              <View style={{flex: 1, marginRight: 20}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={styles.danceBtn}>
                      <TouchableOpacity
                        onPress={() => this.setHobbies('Kayaking')}>
                        <View>
                          <Text style={{color: 'white', fontSize: 16}}>
                            Kayaking
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.danceBtn}>
                      <TouchableOpacity
                        onPress={() => this.setHobbies('Wave running')}>
                        <View>
                          <Text style={{color: 'white', fontSize: 16}}>
                            Wave running
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.danceBtn}>
                      <TouchableOpacity
                        onPress={() => this.setHobbies('Surfing')}>
                        <View>
                          <Text style={{color: 'white', fontSize: 16}}>
                            Surfing
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.danceBtn}>
                      <TouchableOpacity
                        onPress={() => this.setHobbies('Swimming')}>
                        <View>
                          <Text style={{color: 'white', fontSize: 16}}>
                            Swimming
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ScrollView>
              </View>

              <View style={{flex: 1, marginRight: 20}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={styles.danceBtn}>
                      <TouchableOpacity
                        onPress={() => this.setHobbies('Horse riding')}>
                        <View>
                          <Text style={{color: 'white', fontSize: 16}}>
                            Horse riding
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.danceBtn}>
                      <TouchableOpacity
                        onPress={() => this.setHobbies('Wine tasting')}>
                        <View>
                          <Text style={{color: 'white', fontSize: 16}}>
                            Wine tasting
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.danceBtn}>
                      <TouchableOpacity
                        onPress={() => this.setHobbies('Dining')}>
                        <View>
                          <Text style={{color: 'white', fontSize: 16}}>
                            Dining
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.danceBtn}>
                      <TouchableOpacity
                        onPress={() => this.setHobbies('Cooking class')}>
                        <View>
                          <Text style={{color: 'white', fontSize: 16}}>
                            Cooking class
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ScrollView>
              </View>

              <View style={{flex: 1, marginRight: 20}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={styles.danceBtn}>
                      <TouchableOpacity
                        onPress={() => this.setHobbies('Music class')}>
                        <View>
                          <Text style={{color: 'white', fontSize: 16}}>
                            Music class{' '}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.danceBtn}>
                      <TouchableOpacity
                        onPress={() => this.setHobbies('Singing class')}>
                        <View>
                          <Text style={{color: 'white', fontSize: 16}}>
                            {' '}
                            Singing class
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.danceBtn}>
                      <TouchableOpacity
                        onPress={() => this.setHobbies('Karaoke')}>
                        <View>
                          <Text style={{color: 'white', fontSize: 16}}>
                            Karaoke
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.danceBtn}>
                      <TouchableOpacity
                        onPress={() => this.setHobbies('Movie')}>
                        <View>
                          <Text style={{color: 'white', fontSize: 16}}>
                            Movie{' '}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.danceBtn}>
                      <TouchableOpacity
                        onPress={() => this.setHobbies('Theatre')}>
                        <View>
                          <Text style={{color: 'white', fontSize: 16}}>
                            Theatre
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ScrollView>
              </View>

              <View style={{flex: 1, marginRight: 20}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={styles.danceBtn}>
                      <TouchableOpacity
                        onPress={() => this.setHobbies('Social dance')}>
                        <View>
                          <Text style={{color: 'white', fontSize: 16}}>
                            Social dance
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.danceBtn}>
                      <TouchableOpacity
                        onPress={() => this.setHobbies('Gym workout')}>
                        <View>
                          <Text style={{color: 'white', fontSize: 16}}>
                            Gym workout
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.danceBtn}>
                      <TouchableOpacity
                        onPress={() => this.setHobbies('Massage')}>
                        <View>
                          <Text style={{color: 'white', fontSize: 16}}>
                            Massage
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.danceBtn}>
                      <TouchableOpacity
                        sonPress={() => this.setHobbies('Dance Fitness')}>
                        <View>
                          <Text style={{color: 'white', fontSize: 16}}>
                            Dance Fitness
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ScrollView>
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
                onPress={() => this.validate()}>
                <View>
                  <Text style={{color: 'white', fontSize: 16}}>Save</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* ))} */}
      </ScrollView>
    );
  }
}
