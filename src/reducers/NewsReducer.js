import { FETCH_NEWS, FETCH_NEWS_FACULTY, FETCH_ALL_NEWS } from '../actions/types'

const INITIAL_STATE = {
    news: {},
    all_news: {},
    news_faculty: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_NEWS:
            return {
                ...state,
                news: action.payload
            }
        case FETCH_ALL_NEWS:
            return {
                ...state,
                all_news: action.payload
            }
        case FETCH_NEWS_FACULTY:
            return {
                ...state,
                news_faculty: action.payload
            }
        default:
            return state
    }
}