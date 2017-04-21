import axios from 'axios'
import { GET_DONATION } from '../api'
import { FETCH_DONATION } from './types'
import { addAlert } from './AlertActions'

export const fetchDonation = (offset=0, limit=15) => {
    const promise = axios.get(`${GET_DONATION}/${offset}/${limit}`)
    
    return function(dispatch) {
        return promise.then(({data}) => {
            dispatch({
                type: FETCH_DONATION,
                payload: data
            })
        }).catch(error => {
            dispatch(addAlert('fetch donation'))
        })
    }
}