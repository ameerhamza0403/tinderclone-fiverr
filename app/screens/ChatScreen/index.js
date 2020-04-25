import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import firebaseSvc from '../FirebaseSvc.js';



export default class Chat extends React.Component {

  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Scv Chat!',
  });

  state = {
    messages: [],
  };

  get user() {
    const {navigation}= this.props;
    const posetedby=navigation.getParam('postedby' , 0);
    return {
      name: 'Test',
      email: 'Test',
      avatar: 'https://www.dailymoss.com/wp-content/uploads/2019/08/funny-profile-pic59.jpg',
      _id: posetedby,
    };
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={firebaseSvc.send}
        user={this.user}
      />
    );
  }

  componentDidMount() {
    firebaseSvc.refOn(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    firebaseSvc.refOff();
  }
}