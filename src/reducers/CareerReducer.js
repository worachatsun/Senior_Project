import { FETCH_CAREER, FETCH_ALL_CAREER } from '../actions/types'

const INITIAL_STATE = {
    fetchCareer: [],
    all_career: {}
}

export default ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case FETCH_CAREER :
            return {
                ...state,
                fetchCareer: action.payload
            }
        case FETCH_ALL_CAREER :
            return {
                ...state,
                all_career: action.payload
            }
        default:
            return state
    }
}