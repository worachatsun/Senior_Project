import { AUTH_USER, UNAUTH_USER } from './types'

export const authUser = user_id => {
    return {
        type: AUTH_USER,
        payload: user_id
    }
}

export const unauthUser = () => {
    return {
        type: UNAUTH_USER
    }
}