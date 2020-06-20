import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import firebaseSvc from '../FirebaseSvc';
import { AsyncStorage } from 'react-native';
import { View } from 'native-base';
import database from '@react-native-firebase/database';



export default class Chat extends React.Component {

  constructor() {
    super();

    this.state = {
      messages: [],
      userId:'',
      userName:'',
      userEmail:''
    };
  
  }
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Scv Chat!',
  });


  componentDidMount=async() => {
    const mylist=[];
const id=await AsyncStorage.getItem('Id')
console.log(id)

database()
.ref('/Users/' + id)
.on('value', querySnapShot => {
 
  let data = querySnapShot.val() ? querySnapShot.val() : {};



 

this.setState({
  userName:data.name,
  userEmail:data.email,
  userId:id
})

console.log(this.state.userName)

})
    firebaseSvc.refOn(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    firebaseSvc.refOff();
  }


 
  get user() {
    const {navigation}= this.props;
    const posetedby=navigation.getParam('postedby' , 0);
    return {
      name: this.state.userName,
      email: this.state.userEmail,
      _id: this.state.userId,
    };
  }

  render() {
    return (

      <View style={{flex:1,marginBottom:20}}>

<GiftedChat
        messages={this.state.messages}
        onSend={firebaseSvc.send}
        user={this.user}
      />
      </View>
     
    );
  }


}