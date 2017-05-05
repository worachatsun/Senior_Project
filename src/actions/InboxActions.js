import axios from 'axios'
import { POST_SEND_CHAT, POST_FETCH_CHAT } from '../api'
import { FETCH_CHAT } from './types'
import { addAlert } from './AlertActions'

export const sendChat = (id, data) => {
    let inbox = {
        "text": data.text,
        "createdAt": data.createdAt,
        "user": data.user
    }
    console.log(inbox)
    const promise = axios.post(`${POST_SEND_CHAT}`, {
        "room_id": id,
        "inbox": inbox
    })
    
    return (dispatch) => {
        return promise.then(({data}) => {
            dispatch({
                type: FETCH_CHAT,
                payload: data[0].inbox
            })
        }).catch(error => {
            dispatch(addAlert('send chat'))
        })
    }
}

export const fetchInboxChat = id => {
    const promise = axios.post(`${POST_FETCH_CHAT}`, {
        "room_id": id
    })
    
    return (dispatch) => {
        return promise.then(({data}) => {
            dispatch({
                type: FETCH_CHAT,
                payload: data
            })
        }).catch(error => {
            dispatch(addAlert('fetch news'))
        })
    }
}
