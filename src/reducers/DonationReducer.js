import { FETCH_DONATION, FETCH_ALL_DONATION } from '../actions/types'

const INITIAL_STATE = {
    fetchDonate: {},
    all_donate: {}
}

export default ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case FETCH_DONATION :
            return {
                ...state,
                fetchDonate: action.payload
            }
        case FETCH_ALL_DONATION :
            return {
                ...state,
                all_donate: action.payload
            }
        default:
            return state
    }
}