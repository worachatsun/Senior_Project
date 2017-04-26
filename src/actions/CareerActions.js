import axios from 'axios'
import { GET_CAREER } from '../api'
import { FETCH_CAREER, FETCH_ALL_CAREER } from './types'
import { addAlert } from './AlertActions'

export const fetchCareer = (offset=0, limit=15) => {
    const promise = axios.get(`${GET_CAREER}/${offset}/${limit}`)
    
    return function(dispatch) {
        return promise.then(({data}) => {
            dispatch(storeCareerByFetch(data))
        }).catch(error => {
            dispatch(addAlert('fetch career'))
        })
    }
}

export const storeCareerByFetch = data => {
    return {
        type: FETCH_CAREER,
        payload: data
    }
}

export const fetchAllCareer = () => {
    const promise = axios.get(GET_CAREER)
    
    return (dispatch) => {
        promise.then(({data}) => {
            dispatch({
                type: FETCH_ALL_CAREER,
                payload: data
            })
        })  
    }
}