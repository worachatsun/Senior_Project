import { FETCH_EVENT, SELECT_EVENT } from '../actions/types'

const INITIAL_STATE = {
    event: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_EVENT:
            return {
                ...state,
                event: action.payload
            }
        default:
            return state
    }
}