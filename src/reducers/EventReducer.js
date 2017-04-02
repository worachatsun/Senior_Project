import { FETCH_EVENT, SELECT_EVENT, ADD_USER_EVENT } from '../actions/types'

const INITIAL_STATE = {
    fetchEvent: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_EVENT:
            return {
                ...state,
                fetchEvent: action.payload
            }
        case ADD_USER_EVENT:
            return {
                ...state,
                fetchEventJoined: action.payload
            }
        default:
            return state
    }
}