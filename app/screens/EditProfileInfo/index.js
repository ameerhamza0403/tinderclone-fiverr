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
import ImageListComponent from './ImagesListComponent';
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
      showDistance: false,
      showAge: false,
      skills: '',
      hobbies: [],
      
    };
  }
  state = {switchValue: false, sliderValue: 1};

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
          console.log(list.showAge);

          this.setState({
            company: list.company,
            school: list.school,
            livingIn: list.livingIn,
            gender: list.gender,
            sexualOrientation: list.sexualOrientation,
            hobbies: list.hobbies,
            sliderValue: list.skills,
            showDistance: list.showDistance,
            showAge: list.showAge,
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
            skills: this.state.sliderValue,
            showAge: this.state.showAge,
            showDistance: this.state.showDistance,
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

          

          <View style={{width: '100%'}}>
            {/* images List Component */}
            <ImageListComponent />

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
                  trackColor={{true: '#FF4A00FF', false: 'grey'}}
                  style={{marginTop: 0}}
                  onValueChange={switchValue =>
                    this.setState({showDistance: switchValue})
                  }
                  value={this.state.showDistance}
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
                  trackColor={{true: '#FF4A00FF', false: 'grey'}}
                  style={{marginTop: 0}}
                  onValueChange={ageValue => this.setState({showAge: ageValue})}
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
                Max 3 Hobbies can be selected
              </Text>
            </View>

            <View
              style={{
                marginTop: 8,
                backgroundColor: 'white',
                alignItems: 'center',
              }}>
              <Text style={[{color: '#626262', height: 40, marginTop: 7}]}>
                {this.state.hobbies}
              </Text>
            </View>

            <View style={{flex: 1, alignItems: 'center'}}>
              <View style={{flex: 1}}>
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
                  </View>
                </ScrollView>
              </View>

              <View style={{flex: 1}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
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

              <View style={{flex: 1}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
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

              <View style={{flex: 1}}>
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
                  </View>
                </ScrollView>
              </View>

              <View style={{flex: 1}}>
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
                  </View>
                </ScrollView>
              </View>

              <View style={{flex: 1}}>
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
                  </View>
                </ScrollView>
              </View>

              <View style={{flex: 1}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                

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
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>

          <View
            style={{
              marginTop: 100,
              flex: 2,
              marginBottom: 30,
             
              
            }}> 
            <TouchableOpacity
          
            onPress={() => this.validate()}>
            <View style={styles.roundBtn}>
             
                <View>
                  <Text style={{color: 'white', fontSize: 16}}>Save</Text>
                </View>
             
            </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* ))} */}
      </ScrollView>
    );
  }
}
