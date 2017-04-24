import axios from 'axios'
import { 
    POST_ADD_FAVORITE_NEWS, 
    POST_DELETE_FAVORITE_NEWS, 
    POST_CHECK_FAVORITE_NEWS,
    GET_ALL_FAVORITE_NEWS,
    GET_JOINED_EVENT
} from '../api'
import { 
    ADD_FAVORITE_NEWS, 
    CHECK_FAVORITE_NEWS, 
    FETCH_FAVORITE_NEWS,
    FETCH_JOINED_EVENT
} from './types'

export const FavoriteNews = (favorite_news, status) => {
    let url = POST_ADD_FAVORITE_NEWS
    if (status === 'add') {}
    else if (status === 'delete')
        url = POST_DELETE_FAVORITE_NEWS
    const promise = axios.post(url, {
        "user_id" : "58fa5cd404717a4c19ebdb77",
        "favorite_news": favorite_news
    })

    return (dispatch) => {
        promise.then(({data}) => {
            dispatch({
                type: ADD_FAVORITE_NEWS,
                payload: data
            })
        })
    }
}

export const checkFavoriteNews = favorite_news => {
    const promise = axios.post(POST_CHECK_FAVORITE_NEWS, {
        "user_id" : "58fa5cd404717a4c19ebdb77",
        "favorite_news": favorite_news
    })

    return (dispatch) => {
        promise.then(({data}) => {
            dispatch({
                type: CHECK_FAVORITE_NEWS,
                payload: data
            })
        })
    }
}

export const fetchFavoriteNews = () => {
    const promise = axios.get(GET_ALL_FAVORITE_NEWS+"/"+'58fa5cd404717a4c19ebdb77')
    
    return (dispatch) => {
        promise.then(({data}) => {
            dispatch({
                type: FETCH_FAVORITE_NEWS,
                payload: data
            })
        })
    }
}

export const fetchJoinedEvent = () => {
    const promise = axios.get(GET_JOINED_EVENT+"/"+'58fa5cd404717a4c19ebdb77')
    
    return (dispatch) => {
        promise.then(({data}) => {
            dispatch({
                type: FETCH_JOINED_EVENT,
                payload: data
            })
        })
    }
}