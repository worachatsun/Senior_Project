import { combineReducers } from 'redux'
import ModalReducer from './ModalReducer'
import NewsReducer from './NewsReducer'
import SelectionReducer from './SelectionReducer'
import UserReducer from './UserReducer'
import EventReducer from './EventReducer'
import DonationReducer from './DonationReducer'
import CareerReducer from './CareerReducer'

export default combineReducers({
    closeModal: ModalReducer,
    newsList: NewsReducer,
    selectedNewsId: SelectionReducer,
    modalContent: ModalReducer,
    user: UserReducer,
    event: EventReducer,
    donation: DonationReducer,
    career: CareerReducer
})