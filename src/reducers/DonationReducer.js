import { FETCH_DONATION } from '../actions/types'

const INITIAL_STATE = {
    fetchDonate: {}
}

export default ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case FETCH_DONATION :
            return {
                ...state,
                fetchDonate: action.payload
            }
        default:
            return state
    }
}