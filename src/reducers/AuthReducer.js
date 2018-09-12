import { AUTH_USER, UNAUTH_USER, USER_PROFLE, USER_WORKPLACE } from '../actions/types'

const INITIAL_STATE = {
    user_detail: undefined,
    profile_user: undefined,
    profile_workplace: {},
}

export default ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case AUTH_USER :
            return {
                ...state,
                user_detail: action.payload
            }
        case USER_PROFLE :
            return {
                ...state,
                profile_user: action.payload
            }
        case USER_WORKPLACE :
            return {
                ...state,
                profile_workplace: action.payload
            }    
        case UNAUTH_USER :
            return {
                state: INITIAL_STATE
            }
        default:
            return state
    }
}