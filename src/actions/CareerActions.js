import axios from 'axios'
import { GET_CAREER } from '../api'
import { FETCH_CAREER } from './types'

export const fetchCareer = () => {
    const promise = axios.get(GET_CAREER)
    
    return (dispatch) => {
        promise.then(({data}) => {
            dispatch({
                type: FETCH_CAREER,
                payload: data
            })
        })
    }
}