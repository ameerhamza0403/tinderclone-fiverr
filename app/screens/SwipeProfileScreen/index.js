import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import { size } from '../../helpers/devices.android';

import Rewind  from '../../../assests/images/rewind.png';
import Like from '../../../assests/images/heart.png';
import Boost  from '../../../assests/images/boost.png';
import SuperLike  from '../../../assests/images/super_like.png';
import ViewPager from "@react-native-community/viewpager";

import MapIcon  from '../../../assests/images/map.png';

import Key  from '../../../assests/images/key.png';

import { Container, Header,DeckSwiper, Card, CardItem, Thumbnail,  Left, Body, Icon } from 'native-base';
const cards = [
  {


    text: 'SHAYNA',
    name: 'Test',
    image:{uri: 'https://avatars0.githubusercontent.com/u/7205900?s=400&v=4'}
  },


  {
    text: 'SHAYNA',
    name: 'Test',
    image: {uri: 'https://avatars0.githubusercontent.com/u/7205900?s=400&v=4'}
  },

  ];
export default class ProfileSwiper extends Component {
  render() {

      return (
        <View>
        <DeckSwiper
          dataSource={cards}
          renderItem={item =>
            <Card style={{ elevation: 3,marginTop:30 }}>
              <CardItem>
                <Left>
                  <Thumbnail source={item.image} />
                  <Body>
                    <Text>{item.text}</Text>
                    <Text note>Hello!</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image style={{ height: 300, flex: 1 }} source={item.image} />
              </CardItem>
              <CardItem>
                <Icon name="heart" style={{ color: '#ED4A6A' }} />
                <Text>{item.name}</Text>
              </CardItem>
            </Card>
          }
        />

        

<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:600}}>

        

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
        <View style={styles.slide}>
          <View style={styles.title_container}>
            <Image source={Like} style={styles.icon_style}/>
            
          </View>
        
        </View>
</View>
      </View>
          
       
      );
    } 
  
}

const styles = StyleSheet.create({
  wrapper: {
    height: 100
  },
  title_container: { 
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title_text: {
    fontSize: size(22),
    fontWeight: '700',
    color: '#363636',
  },
  icon_style: {
    width: size(35),
    height: size(35),
    resizeMode: 'contain',
  
    alignItems: 'center',
    padding: 15,
    borderRadius: 30,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    height:50,width:50,
    backgroundColor:'white',
    margin:10
  },
  text: {
    marginTop: size(10),
    color: '#363636',
    fontSize: size(16),
  }
});