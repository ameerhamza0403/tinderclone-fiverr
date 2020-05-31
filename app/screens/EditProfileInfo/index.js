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
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

import styles from './style';

import {Card} from 'native-base';
import Slider from '@react-native-community/slider';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

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
export default class EditProfileInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisibleStatus: false,
    };
  }
  state = {switchValue: false, sliderValue: 1};
  toggleSwitch = value => {
    //onValueChange of the switch this function will be called
    this.setState({switchValue: value});
    //state changes according to switch
    //which will result in re-render the text
  };

  showModalFunction(visible) {
    this.setState({modalVisibleStatus: visible});
  }

  render() {
    return (
      <ScrollView>
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
          <View style={styles.viewContainer}>
            <Text style={styles.heading}>Company</Text>
            <View style={{marginTop: 8, backgroundColor: 'white'}}>
              <TextInput style={styles.textInput} placeholder="Add Company" />
            </View>
          </View>
          <View style={styles.viewContainer}>
            <Text style={styles.heading}>School</Text>
            <View style={{marginTop: 8, backgroundColor: 'white'}}>
              <TextInput style={styles.textInput} placeholder="Add School" />
            </View>
          </View>
          <View style={styles.viewContainer}>
            <Text style={styles.heading}>Living in</Text>
            <View style={{marginTop: 8, backgroundColor: 'white'}}>
              <TextInput style={styles.textInput} placeholder="Add City" />
            </View>
          </View>
          <View style={[styles.viewContainer, {marginTop: 0}]}>
            <Text style={styles.heading}>I am</Text>
            <View style={{marginTop: 8, backgroundColor: 'white'}}>
              <TextInput style={styles.textInput} placeholder="Add Gender" />
            </View>
          </View>
          <View style={styles.viewContainer}>
            <Text style={styles.heading}>Sexual Orientation</Text>
            <View style={{marginTop: 8, backgroundColor: 'white'}}>
              <TextInput
                style={styles.textInput}
                placeholder="Add Sexual Orientation"
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
                  onValueChange={this.toggleSwitch}
                  value={this.state.switchValue}
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
                  minimumValue={1}
                  activeColor={'#FB6C57'}
                  thumbImage={require('../../../assests/images/dance.png')}
                  thumbStyle={{height: 10, width: 10}}
                  step={1}
                  value={this.state.sliderValue}
                  onValueChange={value => {
                    this.setState({
                      sliderValue: value,
                    });
                  }}
                  trackStyle={{
                    backgroundColor: '#FF655B',
                    height: 10,
                    borderRadius: 10,
                  }}
                  thumbStyle={{
                    width: 50,
                    height: 50,
                    //   backgroundColor: 'green',
                    borderRadius: 50,
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
              alignItems: 'center',
              width: '100%',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Wants To Dance
            </Text>
            <Text style={{fontSize: 16}}>Max 3 Dances can be selected</Text>

            <View style={{flexDirection: 'row'}}>
              <View style={styles.danceBtn}>
                <TouchableOpacity>
                  <View>
                    <Text style={{color: 'white', fontSize: 16}}>Ballroom</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.danceBtn}>
                <TouchableOpacity underlayColor={'black'}>
                  <View>
                    <Text style={{color: 'white', fontSize: 16}}>Club</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.danceBtn}>
                <TouchableOpacity style={{}}>
                  <View>
                    <Text style={{color: 'white', fontSize: 16}}>Kizomba</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.danceBtn}>
                <TouchableOpacity style={{}}>
                  <View>
                    <Text style={{color: 'white', fontSize: 16}}>Tango</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View style={styles.danceBtn}>
                <TouchableOpacity>
                  <View>
                    <Text style={{color: 'white', fontSize: 16}}>Ballroom</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.danceBtn}>
                <TouchableOpacity underlayColor={'black'}>
                  <View>
                    <Text style={{color: 'white', fontSize: 16}}>Club</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.danceBtn}>
                <TouchableOpacity style={{}}>
                  <View>
                    <Text style={{color: 'white', fontSize: 16}}>Kizomba</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.danceBtn}>
                <TouchableOpacity style={{}}>
                  <View>
                    <Text style={{color: 'white', fontSize: 16}}>Tango</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View style={styles.danceBtn}>
                <TouchableOpacity>
                  <View>
                    <Text style={{color: 'white', fontSize: 16}}>Ballroom</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.danceBtn}>
                <TouchableOpacity underlayColor={'black'}>
                  <View>
                    <Text style={{color: 'white', fontSize: 16}}>Club</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.danceBtn}>
                <TouchableOpacity style={{}}>
                  <View>
                    <Text style={{color: 'white', fontSize: 16}}>Kizomba</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.danceBtn}>
                <TouchableOpacity style={{}}>
                  <View>
                    <Text style={{color: 'white', fontSize: 16}}>Tango</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{alignItems: 'center', marginTop: 0, flex: 2}}>
            <View style={styles.roundBtn}>
              <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => navigation.navigate('School')}>
                <View>
                  <Text style={{color: 'white', fontSize: 16}}>Save</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
