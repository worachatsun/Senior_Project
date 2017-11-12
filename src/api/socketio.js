import './UserAgent'
import {
    AppState,
} from 'react-native'
import { BASE_URL } from '../../env.js'

window.navigator.userAgent = 'react-native'

import io from 'socket.io-client/dist/socket.io'

export const socket = io(BASE_URL,{
    jsonp: false,
    transports: ['websocket']
})

const subscribeToChat = (id, onRecieveMsg, cb) => {
    console.log(id, 'id')
    socket.emit('userInfo', { id })

    socket.on('allUsers', allUsers => {
        cb(null, allUsers)
    })

    socket.on('getMsg', msg => {
        onRecieveMsg(msg.msg)
    })
}

const leaveRoom = room => {
    socket.emit('leaveRoom', room)
}

const sendMsg = (msg, room) => {
    console.log(msg, 'msg')
    socket.emit('sendMsg', {msg, room})
}

export {
    subscribeToChat,
    sendMsg,
    leaveRoom
}