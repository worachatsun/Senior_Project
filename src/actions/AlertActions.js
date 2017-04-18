import { ADD_ALERT, REMOVE_ALERT } from './types'

export const addAlert = text => {
    return {
        type: ADD_ALERT,
        payload: text
    }
}

export const removeAlert = id => {
    return {
        type: REMOVE_ALERT,
        payload: id
    }
}