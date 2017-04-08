import { 
    ADD_FAVORITE_NEWS, 
    CHECK_FAVORITE_NEWS,
    FETCH_FAVORITE_NEWS,
    FETCH_JOINED_EVENT
} from '../actions/types'

const INITIAL_STATE = {
    check_favorite_news: false,
    fetch_favorite_news: [],
    fetch_joined_event: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_FAVORITE_NEWS:
            return {
                ...state,
                fetch_favorite_news: action.payload
            }
        case CHECK_FAVORITE_NEWS:
            return {
                ...state,
                check_favorite_news: action.payload
            }
        case FETCH_FAVORITE_NEWS:
            return {
                ...state,
                fetch_favorite_news: action.payload
            }
        case FETCH_JOINED_EVENT:
            return {
                ...state,
                fetch_joined_event: action.payload
            }
        default:
            return state
    }
}