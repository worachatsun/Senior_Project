import axios from 'axios'
import { GET_CAREER } from '../api'
import { FETCH_CAREER } from './types'

export const fetchCareer = (offset=0, limit=15) => {
    const promise = axios.get(`${GET_CAREER}/${offset}/${limit}`)
    
    return (dispatch) => {
        promise.then(({data}) => {
            dispatch({
                type: FETCH_CAREER,
                payload: data
            })
        })
    }
}