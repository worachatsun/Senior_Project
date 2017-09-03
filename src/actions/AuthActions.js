import axios from 'axios'
import * as Keychain from 'react-native-keychain'
import { AUTH_USER, UNAUTH_USER } from './types'
import { SIGNIN_URL, SIGNUP_URL, SIGNIN_LDAP_URL, GET_USER_DATA } from '../api'
import { addAlert } from './AlertActions'
import { Actions } from 'react-native-router-flux'

export const authUser = user_detail => {
    return {
        type: AUTH_USER,
        payload: user_detail
    }
}

export const loginUser = (email, password) => {
    return function(dispatch) {
        return axios.post(SIGNIN_URL, {
            "email": email, 
            "password": password
        }).then(response => {
            const { user_id, token } = response.data
            Keychain
            .setGenericPassword(user_id, token)
            .then(function() {
              console.log('Credentials saved successfully!')
            })
            // Keychain.setGenericPassword(user_id, token)
            //     .then(function() {
            //         dispatch(addAlert(token))
            //         dispatch(authUser(user_id))
            //     }).catch(error => {
            //         dispatch(addAlert('Could not login credential'))
            //     })
            console.log(response.data)
            dispatch(addAlert(token))
            dispatch(authUser(user_id))
        }).catch(error => {
            dispatch(addAlert('Could not login'))
        })
    }
}

export const loginLdap = (username, password) => {
    return function(dispatch) {
        return axios.post(SIGNIN_LDAP_URL, {
            "username": username, 
            "password": password
        }).then(response => {
            const { user, token } = response.data
            Keychain
            .setGenericPassword(user.uid, token)
            .then(function() {
                console.log('Credentials saved successfully!')
            })
            Actions.tabbar()
            dispatch(authUser(response.data))
        }).catch(error => {
            dispatch(addAlert('Could not login'))
        })
    }
}

export const getUserInfo = (token) => {
    return function(dispatch) {
        return axios.post(GET_USER_DATA, null, {
            headers: { "Authorization": token }
        }).then(response => {
            dispatch(authUser(response.data))
        })
    }
}

export const signupUser = (email, password, name, surname, tel, address) => {
    return function(dispatch) {
        return axios.post(SIGNUP_URL, {
            "email": email, 
            "password": password,
            "name": name,
            "surname": surname,
            "tel": tel,
            "address": address
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
    Keychain
    .resetGenericPassword()
    .then(function() {
      console.log('Credentials successfully deleted');
    })
    return {
        type: UNAUTH_USER
    }
}