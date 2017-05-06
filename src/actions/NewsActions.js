import axios from 'axios'
import { GETNEWS_URL, GETNEWS_FACULTY_URL, GET_COUNT_FAVORITE } from '../api'
import { SELECT_NEWS, FETCH_NEWS, FETCH_NEWS_FACULTY, FETCH_ALL_NEWS, COUNT_FAVORITE_NEWS } from './types'
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

export const fetchAllNews = () => {
    const promise = axios.get(`${GETNEWS_URL}`)
    return (dispatch) => {
        return promise.then(({data}) => {
            dispatch({
                type: FETCH_ALL_NEWS,
                payload: data
            })
        }).catch(error => {
            dispatch(addAlert('fetch all news'))
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

export const countFavoriteNews = id => {
    const promise = axios.get(`${GET_COUNT_FAVORITE}/${id}`)
    
    return (dispatch) => {
        return promise.then(({data}) => {
            dispatch({
                type: COUNT_FAVORITE_NEWS,
                payload: data
            })
        }).catch(error => {
            dispatch(addAlert('count favorite news'))
        })
    }
}