import { CLOSE_MODAL } from '../actions/types'

const INITIAL_STATE = {
    isOpen: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CLOSE_MODAL:
            return {...state, [action.payload.prop]: action.payload.value}
        default:
            return state
    }
}