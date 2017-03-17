import { SELECT_NEWS } from './types'

export const selectNews = (newsId) => {
    return {
        type: SELECT_NEWS,
        payload: newsId
    }
}