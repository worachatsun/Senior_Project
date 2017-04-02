import axios from 'axios'
import { GET_EVENT_URL, POST_EVENT_JOINER } from '../api'
import { SELECT_EVENT, FETCH_EVENT } from './types'

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

export const getTicketByCoupon = () => {
    let url = POST_EVENT_JOINER
    const promise = axios.post(url, {
        "user_id" : "58d7b1b31200407006609a79",
        "event_joiner": "58d954b950752b7bd954ed40"
    })

    return (dispatch) => {
        promise.then(({data}) => {
            dispatch({
                type: ADD_USER_EVENT,
                payload: data
            })
        })
    }
}