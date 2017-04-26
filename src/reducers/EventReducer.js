import { FETCH_EVENT, SELECT_EVENT, ADD_USER_EVENT, CHECK_EVENT_AVAILABLE, FETCH_ALL_EVENT } from '../actions/types'

const INITIAL_STATE = {
    fetchEvent: {},
    fetchEventJoined: {},
    eventAvailable: false,
    all_event: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_EVENT:
            return {
                ...state,
                fetchEvent: action.payload
            }
        case FETCH_ALL_EVENT:
            return {
                ...state,
                all_event: action.payload
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