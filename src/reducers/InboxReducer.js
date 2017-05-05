import { FETCH_CHAT } from '../actions/types'

const INITIAL_STATE = {
    chat: {},
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CHAT:
            return {
                ...state,
                chat: action.payload
            }
        default:
            return state
    }
}