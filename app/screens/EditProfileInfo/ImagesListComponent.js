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

export default class EditProfileInfo extends React.Component {
  render() {
    return (
      <ScrollView>
        {/* {this.state.dataSource.map((item, key) => (   */}
        <View style={styles.mainContainer}>
          <StatusBar backgroundColor="#FF4A00FF" barStyle="light-content" />

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
                        'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F2.jpg?alt=media&token=403dad12-51b2-47ea-942a-34d5881fa0b6',
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
                        'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F3.jpg?alt=media&token=11269f00-b091-40dc-9d53-e962dca2740b',
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
                        'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F2.jpg?alt=media&token=403dad12-51b2-47ea-942a-34d5881fa0b6',
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
                        'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F3.jpg?alt=media&token=11269f00-b091-40dc-9d53-e962dca2740b',
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
                        'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F3.jpg?alt=media&token=11269f00-b091-40dc-9d53-e962dca2740b',
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
                        'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F3.jpg?alt=media&token=11269f00-b091-40dc-9d53-e962dca2740b',
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
                        'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F3.jpg?alt=media&token=11269f00-b091-40dc-9d53-e962dca2740b',
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
                        'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F3.jpg?alt=media&token=11269f00-b091-40dc-9d53-e962dca2740b',
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
                        'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F3.jpg?alt=media&token=11269f00-b091-40dc-9d53-e962dca2740b',
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
                        'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F10.jpg?alt=media&token=4e953cbc-de3f-41e8-ada4-9739dd2f8508',
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
          </View>
        </View>
      </ScrollView>
    );
  }
}
