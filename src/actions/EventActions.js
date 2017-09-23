import axios from 'axios'
import { 
    GET_EVENT_URL, 
    POST_EVENT_JOINER, 
    POST_EVENT_BY_COUPON,
    POST_CHECK_EVENT_AVAILABLE
} from '../api'
import { Alert } from 'react-native'
import { SELECT_EVENT, FETCH_EVENT, FETCH_ALL_EVENT, ADD_USER_EVENT, CHECK_EVENT_AVAILABLE } from './types'
import { Actions } from 'react-native-router-flux'
import { addAlert } from './AlertActions'

export const selectEvent = (eventId) => {
    return {
        type: SELECT_EVENT,
        payload: eventId
    }
}

export const fetchAllEvent = () => {
    const promise = axios.get(GET_EVENT_URL)
    
    return (dispatch) => {
        return promise.then(({data}) => {
            dispatch({
                type: FETCH_ALL_EVENT,
                payload: data
            })
        })  
    }
}

export const fetchEvent = (offset=0, limit=15) => {
    const promise = axios.get(`${GET_EVENT_URL}/${offset}/${limit}`)
    
    return (dispatch) => {
        return promise.then(({data}) => {
            dispatch({
                type: FETCH_EVENT,
                payload: data
            })
        }).catch(error => {
            dispatch(addAlert('fetch news'))
        })
    }
}

export const getTicket = (user_id, event_id, coupon = null, capacity) => (dispatch) => {
    let url = null
    let promise = null
    console.log(capacity)
    if(coupon){
        url = POST_EVENT_BY_COUPON
        promise = axios.post(url, {
            "user_id" : user_id,
            "join_event": event_id,
            "coupon": coupon
        })
    }else{
        url = POST_EVENT_JOINER
        promise = axios.post(url, {
            "user_id" : user_id,
            "join_event": event_id,
            capacity
        })
    }

    return (dispatch) => {
        return promise.then(({data}) => {
            dispatch({
                type: ADD_USER_EVENT,
                payload: data
            })
        })
    }
}

export const checkEventAvailable = event_id => {
    const promise = axios.post(POST_CHECK_EVENT_AVAILABLE, {
        "event_id": event_id
    })

    return dispatch => {
        return promise.then(({data}) => {
            dispatch({
                type: CHECK_EVENT_AVAILABLE,
                payload: data
            })
        })
    }
}