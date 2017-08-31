import './UserAgent'
import {
    AppState,
} from 'react-native'

window.navigator.userAgent = 'react-native'

import io from 'socket.io-client/dist/socket.io'

export const socket = io('http://localhost:3000',{
    jsonp: false,
    transports: ['websocket']
})

const subscribeToChat = (id, cb) => {
    console.log(id, 'id')
    socket.emit('userInfo', { id })

    socket.on('allUsers', allUsers => {
        cb(null, allUsers)
    })

    socket.on('getMsg', msg => {
        console.log(msg, 'ms')
    })
}

const sendMsg = (msg, user) => {
    console.log(msg, 'msg')
    socket.emit('sendMsg', {msg, user})
}

export {
    subscribeToChat,
    sendMsg
}