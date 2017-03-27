import axios from 'axios'
import { GET_EVENT_URL } from '../api'
import { SELECT_NEWS, FETCH_NEWS, FETCH_NEWS_FACULTY } from './types'

export const selectEvent = (newsId) => {
    return {
        type: SELECT_EVENT,
        payload: newsId
    }
}

export const fetchEvent = () => {
    const promise = axios.get(GETNEWS_URL)
    
    return (dispatch) => {
        promise.then(({data}) => {
            dispatch({
                type: FETCH_EVENT,
                payload: data
            })
        })
    }
}