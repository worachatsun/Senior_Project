import { AUTH_USER, UNAUTH_USER } from '../actions/types'

const INITIAL_STATE = {
    user_detail: undefined
}

export default ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case AUTH_USER :
            return {
                user_detail: action.payload
            }
        case UNAUTH_USER :
            return {
                user_detail: {}
            }
        default:
            return state
    }
}