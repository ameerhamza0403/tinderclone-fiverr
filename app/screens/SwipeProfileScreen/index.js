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
export default class ProfileSwiper extends Component {
  render() {

      return (
        <View>
        <DeckSwiper
          dataSource={cards}
          renderItem={item =>
            <Card style={{ elevation: 3,marginTop:0,height:'80%' }}>
              <CardItem>
                <Left>
                  <Thumbnail source={item.image}  />
                  <Body>
                    <Text>{item.text}</Text>
                 
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image style={{ height: 500, flex: 1 }} source={item.image} />
              </CardItem>
              <CardItem>
              
                <Text>{item.name}</Text>
              </CardItem>
            </Card>
          }
        />

        

<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:620}}>

        

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