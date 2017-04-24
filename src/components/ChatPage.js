import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { ModalHeaderPlain } from '../common'

class ChatPage extends Component {
  constructor(props) {
    super(props);
    this.state = {messages: []};
    this.onSend = this.onSend.bind(this);
  }
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    });
  }
  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }
  render() {
    return (
        <View style={{flex: 1}}>
            {/*<StatusBar barStyle="dark-content"/>*/}
            <ModalHeaderPlain headerText={'Chat'} backSign={true} />
             <GiftedChat
                messages={this.state.messages}
                onSend={this.onSend}
                user={{
                _id: 1,
                }}
            />
        </View>
    )
  }
}

export default ChatPage