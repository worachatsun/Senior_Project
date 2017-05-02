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

export const FavoriteNews = (favorite_news, status, user_id) => {
    let url = POST_ADD_FAVORITE_NEWS
    if (status === 'add') {}
    else if (status === 'delete')
        url = POST_DELETE_FAVORITE_NEWS
    const promise = axios.post(url, {
        "user_id" : user_id,
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

export const checkFavoriteNews = (favorite_news, user_id) => {
    console.log(user_id)
    const promise = axios.post(POST_CHECK_FAVORITE_NEWS, {
        "user_id" : user_id,
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

export const fetchFavoriteNews = (user_id) => {
    const promise = axios.get(GET_ALL_FAVORITE_NEWS+"/"+user_id)
    
    return (dispatch) => {
        promise.then(({data}) => {
            dispatch({
                type: FETCH_FAVORITE_NEWS,
                payload: data
            })
        })
    }
}

export const fetchJoinedEvent = (user_id) => {
    const promise = axios.get(GET_JOINED_EVENT+"/"+user_id)
    
    return (dispatch) => {
        promise.then(({data}) => {
            dispatch({
                type: FETCH_JOINED_EVENT,
                payload: data
            })
        })
    }
}