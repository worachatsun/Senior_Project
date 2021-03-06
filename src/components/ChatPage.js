import React, { Component } from 'react'
import { View, Text, StatusBar, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { sendMsg, subscribeToChat, leaveRoom } from '../api/socketio'
import { GiftedChat } from 'react-native-gifted-chat'
import { ModalHeaderPlain } from '../common'

class ChatPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      color: '#FF7F11'
    }

    AsyncStorage.getItem('color').then(data => {
        this.setState({color: data})
    })
    this.onSend = this.onSend.bind(this)
  }

  componentWillMount() {
    subscribeToChat(this.props.profile._id, this.onRecieveMsg, (err, users) => {
        this.setState({ allUsers: users })
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

  componentWillUnmount() {
      leaveRoom()
  }

  onRecieveMsg = messages => {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      }
    })
  }

  onSend(messages = []) {
    sendMsg(messages[0], this.props.profile._id)
    this.props.sendChat(this.props.profile._id, messages[0])
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      }
    })
  }
  render() {
    console.log(this.state.messages)
    return (
        <View style={{flex: 1}}>
            <ModalHeaderPlain color={this.state.color} headerText={'Chat'} backSign={true} />
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