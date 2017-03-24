// import data from './NewsList.json'

// export default () => data

import { FETCH_NEWS } from '../actions/types'

const INITIAL_STATE = {
    news: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_NEWS:
            return action.payload
        default:
            return state
    }
}