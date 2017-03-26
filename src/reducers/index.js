import { combineReducers } from 'redux'
import ModalReducer from './ModalReducer'
import NewsReducer from './NewsReducer'
import SelectionReducer from './SelectionReducer'
import UserReducer from './UserReducer'

export default combineReducers({
    closeModal: ModalReducer,
    newsList: NewsReducer,
    selectedNewsId: SelectionReducer,
    modalContent: ModalReducer,
    user: UserReducer,
})