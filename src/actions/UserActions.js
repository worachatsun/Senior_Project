import axios from 'axios'
import { POST_FAVORITE_NEWS, POST_DELETE_FAVORITE_NEWS } from '../api'
import { ADD_FAVORITE_NEWS  } from './types'

export const addFavoriteNews = (favorite_news) => {
    console.log(favorite_news)
    const promise = axios.post(POST_FAVORITE_NEWS, {
        "user_id" : "58d7b1b31200407006609a79",
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