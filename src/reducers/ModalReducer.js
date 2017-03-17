import { CLOSE_MODAL, MODAL_CONTENT } from '../actions/types'

const INITIAL_STATE = {
    isOpen: false,
    content: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CLOSE_MODAL:
            return {...state, [action.payload.prop]: action.payload.value}
        case MODAL_CONTENT:
            return action.payload
        default:
            return state
    }
}