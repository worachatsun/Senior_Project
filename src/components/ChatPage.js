import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { sendMsg, subscribeToChat } from '../api/socketio'
import { GiftedChat } from 'react-native-gifted-chat'
import { ModalHeaderPlain } from '../common'

class ChatPage extends Component {
  constructor(props) {
    super(props);
    this.state = {messages: []};
    this.onSend = this.onSend.bind(this);
  }

  componentWillMount() {
    subscribeToChat(this.props.profile._id, (err, users) => {
        console.log(users)
        this.setState({ allUsers: users })
        sendMsg('sun', users[0])
    })

    let now = new Date();
    let now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds())
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'สวัสดีค่ะ ต้องการให้ช่วยอะไรค่ะ',
          createdAt: now_utc,
          user: {
            _id: 2,
            name: 'Admin',
            // avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    })
    this.props.fetchInboxChat(this.props.profile._id)
    .then((previousState)=> {
        this.setState({
          messages: this.props.chat
        })
    })
  }

  onSend(messages = []) {
    sendMsg(messages[0], 'sun')
    this.props.sendChat(this.props.profile._id, messages[0])
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }
  render() {
    console.log(this.state.messages)
    return (
        <View style={{flex: 1}}>
            <ModalHeaderPlain headerText={'Chat'} backSign={true} />
            <GiftedChat
              messages={this.state.messages}
              onSend={this.onSend}
              user={{
                  _id: this.props.profile._id,
                  //name: 'sun'
              }}
            />
        </View>
    )
  }
}

const mapStateToProps = state => {
    return { 
        chat: state.inbox.chat,
        profile: state.auth.user_detail.user,
    }
}

export default connect(mapStateToProps, actions)(ChatPage)