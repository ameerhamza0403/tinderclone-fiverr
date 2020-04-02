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
  TouchableHighlight,
  Modal
} from 'react-native';
import {Icon} from 'react-native-elements';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

import styles from './style';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Card} from 'native-base';
import {Slider, Block} from 'galio-framework';

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
        
        ModalVisibleStatus: false 
    };

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

  render() {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <StatusBar
            backgroundColor="#FF4A00FF"
            barStyle="light-content"></StatusBar>

<Modal
          transparent={false}

          animationType={"slide"}
presentationStyle={'formSheet'}
          visible={this.state.ModalVisibleStatus}

          onRequestClose={ () => { this.ShowModalFunction(!this.state.ModalVisibleStatus)} } >


            <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>


                <View style={styles.ModalInsideView}>


                   <View style={{flexDirection:'row'}}>
                   <View style={styles.imageView}>
                  <Image
                    style={styles.imageStyle}
                    source={require('../../../assests/images/testImage.jpg')}
                  />
                </View>
                <View style={styles.imageView}>
                  <Image
                    style={styles.imageStyle}
                    source={require('../../../assests/images/testImage.jpg')}
                  />
                </View>
                <View style={styles.imageView}>
                  <Image
                    style={styles.imageStyle}
                    source={require('../../../assests/images/testImage.jpg')}
                  />
                </View>
                
                     
                   </View>

                   <View style={{flexDirection:'row'}}>
                   <View style={styles.imageView}>
                  <Image
                    style={styles.imageStyle}
                    source={require('../../../assests/images/testImage.jpg')}
                  />
                </View>
                <View style={styles.imageView}>
                  <Image
                    style={styles.imageStyle}
                    source={require('../../../assests/images/testImage.jpg')}
                  />
                </View>
                <View style={styles.imageView}>
                  <Image
                    style={styles.imageStyle}
                    source={require('../../../assests/images/testImage.jpg')}
                  />
                </View>
                
                     
                   </View>

                   <View style={{flexDirection:'row'}}>
                   <View style={styles.imageView}>
                  <Image
                    style={styles.imageStyle}
                    source={require('../../../assests/images/testImage.jpg')}
                  />
                </View>
                <View style={styles.imageView}>
                  <Image
                    style={styles.imageStyle}
                    source={require('../../../assests/images/testImage.jpg')}
                  />
                </View>
                <View style={styles.imageView}>
                  <Image
                    style={styles.imageStyle}
                    source={require('../../../assests/images/testImage.jpg')}
                  />
                </View>
                
                     
                   </View>

                   

                    <Button  title="Click Here To Hide Modal" onPress={() => { this.ShowModalFunction(!this.state.ModalVisibleStatus)} } />

               


                </View>

            </View>


        </Modal>



          <Card>
            <View style={{width: '100%', height: 60, backgroundColor: '#fff'}}>
              <Text style={styles.headerText}>Edit Profile</Text>
            </View>
          </Card>

          <View style={{width: '100%'}}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <View style={styles.imageView}>
                  <Image
                    style={styles.imageStyle}
                    source={require('../../../assests/images/testImage.jpg')}
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
                    source={require('../../../assests/images/testImage.jpg')}
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
                    source={require('../../../assests/images/testImage.jpg')}
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
                    source={require('../../../assests/images/testImage.jpg')}
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
                    source={require('../../../assests/images/testImage.jpg')}
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
                    source={require('../../../assests/images/testImage.jpg')}
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
                <View style={styles.imageView}></View>
                <View style={{position: 'absolute', left: 100, top: 170}}>
                  <Image
                    style={styles.iconStyle}
                    source={require('../../../assests/images/AddImage.png')}
                  />
                </View>
              </View>

              <View>
                <View style={styles.imageView}></View>
                <View style={{position: 'absolute', left: 100, top: 170}}>
                  <Image
                    style={styles.iconStyle}
                    source={require('../../../assests/images/AddImage.png')}
                  />
                </View>
              </View>

              <View>
                <View style={styles.imageView}></View>
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
                <TouchableHighlight
                  style={{alignItems: 'center'}}
                  onPress={() => { this.ShowModalFunction(true) }} >
                  <View>
                    <Text style={{color: 'white', fontSize: 16}}>
                      Add Media
                    </Text>
                  </View>
                </TouchableHighlight>
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
              <TextInput
                style={styles.textInput}
                placeholder="Add Company"></TextInput>
            </View>
          </View>
          <View style={styles.viewContainer}>
            <Text style={styles.heading}>School</Text>
            <View style={{marginTop: 8, backgroundColor: 'white'}}>
              <TextInput
                style={styles.textInput}
                placeholder="Add School"></TextInput>
            </View>
          </View>
          <View style={styles.viewContainer}>
            <Text style={styles.heading}>Living in</Text>
            <View style={{marginTop: 8, backgroundColor: 'white'}}>
              <TextInput
                style={styles.textInput}
                placeholder="Add City"></TextInput>
            </View>
          </View>
          <View style={[styles.viewContainer, {marginTop: 0}]}>
            <Text style={styles.heading}>I am</Text>
            <View style={{marginTop: 8, backgroundColor: 'white'}}>
              <TextInput
                style={styles.textInput}
                placeholder="Add Gender"></TextInput>
            </View>
          </View>
          <View style={styles.viewContainer}>
            <Text style={styles.heading}>Sexual Orientation</Text>
            <View style={{marginTop: 8, backgroundColor: 'white'}}>
              <TextInput
                style={styles.textInput}
                placeholder="Add Sexual Orientation"></TextInput>
            </View>
          </View>


          <View style={[styles.viewContainer,{height:150}]}>
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
                  activeColor={'#FF4A00FF'}
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


          <View style={{backgroundColor:'white',alignItems:'center',width:'100%'}}>
<Text style={{fontSize:18,fontWeight:'bold'}}>
  Wants To Dance
</Text>
<Text style={{fontSize:16}}>
  Max 3 Dances can be selected
</Text>

<View style={{flexDirection:'row'}}>


            <View style={styles.danceBtn}>
              <TouchableHighlight
              
               >
                <View>
                  <Text style={{color: 'white', fontSize: 16}}>Ballroom</Text>
                </View>
              </TouchableHighlight>
            </View>
          
            <View style={styles.danceBtn}>
              <TouchableHighlight
                underlayColor={'black'}
               >
                <View>
                  <Text style={{color: 'white', fontSize: 16}}>Club</Text>
                </View>
              </TouchableHighlight>
            </View>
            
            <View style={styles.danceBtn}>
              <TouchableHighlight
                style={{}}
               >
                <View>
                  <Text style={{color: 'white', fontSize: 16}}>Kizomba</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.danceBtn}>
              <TouchableHighlight
                style={{}}  >
                <View>
                  <Text style={{color: 'white', fontSize: 16}}>Tango</Text>
                </View>
              </TouchableHighlight>
            </View>
</View>


<View style={{flexDirection:'row'}}>


            <View style={styles.danceBtn}>
              <TouchableHighlight
              
               >
                <View>
                  <Text style={{color: 'white', fontSize: 16}}>Ballroom</Text>
                </View>
              </TouchableHighlight>
            </View>
          
            <View style={styles.danceBtn}>
              <TouchableHighlight
                underlayColor={'black'}
               >
                <View>
                  <Text style={{color: 'white', fontSize: 16}}>Club</Text>
                </View>
              </TouchableHighlight>
            </View>
            
            <View style={styles.danceBtn}>
              <TouchableHighlight
                style={{}}
               >
                <View>
                  <Text style={{color: 'white', fontSize: 16}}>Kizomba</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.danceBtn}>
              <TouchableHighlight
                style={{}}  >
                <View>
                  <Text style={{color: 'white', fontSize: 16}}>Tango</Text>
                </View>
              </TouchableHighlight>
            </View>
</View>


<View style={{flexDirection:'row'}}>


            <View style={styles.danceBtn}>
              <TouchableHighlight
              
               >
                <View>
                  <Text style={{color: 'white', fontSize: 16}}>Ballroom</Text>
                </View>
              </TouchableHighlight>
            </View>
          
            <View style={styles.danceBtn}>
              <TouchableHighlight
                underlayColor={'black'}
               >
                <View>
                  <Text style={{color: 'white', fontSize: 16}}>Club</Text>
                </View>
              </TouchableHighlight>
            </View>
            
            <View style={styles.danceBtn}>
              <TouchableHighlight
                style={{}}
               >
                <View>
                  <Text style={{color: 'white', fontSize: 16}}>Kizomba</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.danceBtn}>
              <TouchableHighlight
                style={{}}  >
                <View>
                  <Text style={{color: 'white', fontSize: 16}}>Tango</Text>
                </View>
              </TouchableHighlight>
            </View>
</View>


</View>
   <View style={{alignItems: 'center', marginTop: 0, flex: 2}}>
            <View style={styles.roundBtn}>
              <TouchableHighlight
                style={{alignItems: 'center'}}
                onPress={() => navigation.navigate('School')}>
                <View>
                  <Text style={{color: 'white', fontSize: 16}}>Save</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
