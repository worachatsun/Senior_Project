import { FETCH_CAREER } from '../actions/types'

const INITIAL_STATE = {
    fetchCareer: []
}

export default ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case FETCH_CAREER :
            return {
                ...state,
                fetchCareer: action.payload
            }
        default:
            return state
    }
}