import axios from 'axios'
import { GET_EVENT_URL } from '../api'
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