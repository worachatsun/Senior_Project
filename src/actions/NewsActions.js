import axios from 'axios'
import { GETNEWS_URL, GETNEWS_FACULTY_URL } from '../api'
import { SELECT_NEWS, FETCH_NEWS, FETCH_NEWS_FACULTY } from './types'
import { addAlert } from './AlertActions'

export const selectNews = (newsId) => {
    return {
        type: SELECT_NEWS,
        payload: newsId
    }
}

export const fetchNews = (offset=0, limit=15) => {
    const promise = axios.get(`${GETNEWS_URL}/${offset}/${limit}`)
    
    return (dispatch) => {
        return promise.then(({data}) => {
            dispatch({
                type: FETCH_NEWS,
                payload: data
            })
        }).catch(error => {
            dispatch(addAlert('fetch news'))
        })
    }
    
}

export const fetchNewsFaculty = (faculty, offset=0, limit=15) => {
    const promise = axios.get(`${GETNEWS_FACULTY_URL}/${faculty}/${offset}/${limit}`)
        
    return (dispatch) => {
        return promise.then(({data}) => {
            dispatch({
                type: FETCH_NEWS_FACULTY,
                payload: data
            })
        }).catch(error => {
            dispatch(addAlert('fetch news faculty'))
        })
    }
}