import { FETCH_NEWS } from '../actions/types'

const INITIAL_STATE = {
    isOpen: false,
    content: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_NEWS:
            return action.payload
        default:
            return state
    }
}