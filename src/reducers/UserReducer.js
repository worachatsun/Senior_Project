import { ADD_FAVORITE_NEWS } from '../actions/types'

const INITIAL_STATE = {
    favorite_news: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_FAVORITE_NEWS:
            return {
                ...state,
                favorite_news: action.payload
            }
        default:
            return state
    }
}