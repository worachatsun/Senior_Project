import axios from 'axios'
//import * as Keychain from 'react-native-keychain'
import { AUTH_USER, UNAUTH_USER } from './types'
import { SIGNIN_URL, SIGNUP_URL } from '../api'
import { addAlert } from './AlertActions'

export const authUser = user_id => {
    return {
        type: AUTH_USER,
        payload: user_id
    }
}

export const loginUser = (email, password) => {
    return function(dispatch) {
        return axios.post(SIGNIN_URL, {
            "email": email, 
            "password": password
        }).then(response => {
            const { user_id, token } = response.data
            // Keychain.setGenericPassword(user_id, token)
            //     .then(function() {
            //         dispatch(addAlert(token))
            //         dispatch(authUser(user_id))
            //     }).catch(error => {
            //         dispatch(addAlert('Could not login credential'))
            //     })
            dispatch(addAlert(token))
            dispatch(authUser(user_id))
        }).catch(error => {
            dispatch(addAlert('Could not login'))
        })
    }
}

export const signupUser = (email, password) => {
    return function(dispatch) {
        return axios.post(SIGNUP_URL, {
            "email": email, 
            "password": password
        }).then(response => {
            const { user_id, token } = response.data
            // Keychain.setGenericPassword(user_id, token)
            //     .then(function() {
            //         dispatch(addAlert(token))
            //         dispatch(authUser(user_id))
            //     }).catch(error => {
            //         dispatch(addAlert('Could not login credential'))
            //     })
            dispatch(addAlert(token))
            dispatch(authUser(user_id))
        }).catch(error => {
            dispatch(addAlert('Could not signup'))
        })
    }
}

export const unauthUser = () => {
    return {
        type: UNAUTH_USER
    }
}