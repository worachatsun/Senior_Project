import axios from 'axios'
import { 
    GET_EVENT_URL, 
    POST_EVENT_JOINER, 
    POST_EVENT_BY_COUPON,
    POST_CHECK_EVENT_AVAILABLE
    
} from '../api'
import { SELECT_EVENT, FETCH_EVENT, ADD_USER_EVENT, CHECK_EVENT_AVAILABLE } from './types'
import { Actions } from 'react-native-router-flux'

export const selectEvent = (eventId) => {
    return {
        type: SELECT_EVENT,
        payload: eventId
    }
}

export const fetchEvent = () => {
    const promise = axios.get(GET_EVENT_URL)
    
    return (dispatch) => {
        promise.then(({data}) => {
            dispatch({
                type: FETCH_EVENT,
                payload: data
            })
        })
    }
}

export const getTicket = (user_id, event_id, coupon = null) => {
    let url = null
    let promise = null
    if(coupon){
        url = POST_EVENT_BY_COUPON
        promise = axios.post(url, {
            "user_id" : "58d7b1b31200407006609a79",
            "join_event": event_id,
            "coupon": coupon
        })
    }else{
        url = POST_EVENT_JOINER
        promise = axios.post(url, {
            "user_id" : "58d7b1b31200407006609a79",
            "join_event": event_id
        })
    }

    return (dispatch) => {
        promise.then(({data}) => {
            dispatch({
                type: ADD_USER_EVENT,
                payload: data
            })
        })
        Actions.pop()
    }
}

export const checkEventAvailable = event_id => {
    const promise = axios.post(POST_CHECK_EVENT_AVAILABLE, {
        "event_id": event_id
    })

    return dispatch => {
        promise.then(({data}) => {
            dispatch({
                type: CHECK_EVENT_AVAILABLE,
                payload: data
            })
        })
    }
}