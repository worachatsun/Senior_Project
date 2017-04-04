import { FETCH_EVENT, SELECT_EVENT, ADD_USER_EVENT, CHECK_EVENT_AVAILABLE } from '../actions/types'

const INITIAL_STATE = {
    fetchEvent: {},
    fetchEventJoined: {},
    eventAvailable: false
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
        case CHECK_EVENT_AVAILABLE:
            return {
                ...state,
                eventAvailable: action.payload
            }
        default:
            return state
    }
}