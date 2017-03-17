import { combineReducers } from 'redux'
import ModalReducer from './ModalReducer'
import NewsReducer from './NewsReducer'

export default combineReducers({
    closeModal: ModalReducer,
    newsList: NewsReducer
})