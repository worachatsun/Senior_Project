import axios from 'axios'
import { GETNEWS_URL, GETNEWS_FACULTY_URL } from '../api'
import { SELECT_NEWS, FETCH_NEWS, FETCH_NEWS_FACULTY } from './types'

export const selectNews = (newsId) => {
    return {
        type: SELECT_NEWS,
        payload: newsId
    }
}

export const fetchNews = () => {
    const promise = axios.get(GETNEWS_URL)
    
    return (dispatch) => {
        promise.then(({data}) => {
            dispatch({
                type: FETCH_NEWS,
                payload: data
            })
        })
    }
}

export const fetchNewsFaculty = faculty => {
    const promise = axios.get(GETNEWS_FACULTY_URL+"/"+faculty)
    
    return (dispatch) => {
        promise.then(({data}) => {
            dispatch({
                type: FETCH_NEWS_FACULTY,
                payload: data
            })
        })
    }
}