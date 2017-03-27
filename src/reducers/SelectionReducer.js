import { SELECT_NEWS, SELECT_EVENT } from '../actions/types'

export default (state = null, action) => {
    switch (action.type) {
        case SELECT_NEWS: 
            return action.payload
        case SELECT_EVENT:
            return action.payload
        default:
            return state
    }
}