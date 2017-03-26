import { ADD_FAVORITE_NEWS, CHECK_FAVORITE_NEWS } from '../actions/types'

const INITIAL_STATE = {
    favorite_news: '',
    check_favorite_news: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_FAVORITE_NEWS:
            return {
                ...state,
                favorite_news: action.payload
            }
        case CHECK_FAVORITE_NEWS:
            return {
                ...state,
                check_favorite_news: action.payload
            }
        default:
            return state
    }
}