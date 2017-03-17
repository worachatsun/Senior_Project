import { SELECT_NEWS } from '../actions/types'

export default (state = null, action) => {
    switch (action.type) {
        case SELECT_NEWS: 
            return action.payload
        default:
            return state
    }
}