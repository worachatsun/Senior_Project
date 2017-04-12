import axios from 'axios'
import { GET_DONATION } from '../api'
import { FETCH_DONATION } from './types'

export const fetchDonation = () => {
    const promise = axios.get(GET_DONATION)
    
    return (dispatch) => {
        promise.then(({data}) => {
            dispatch({
                type: FETCH_DONATION,
                payload: data
            })
        })
    }
}