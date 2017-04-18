import { AUTH_USER, UNAUTH_USER } from '../actions/types'

const INITIAL_STATE = {
    user_id: undefined
}

export default ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case AUTH_USER :
            return {
                user_id: action.user_id
            }
        case UNAUTH_USER :
        return {
            user_id: undefined
        }
        default:
            return state
    }
}