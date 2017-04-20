import { ADD_ALERT, REMOVE_ALERT } from '../actions/types'
import uuid from 'uuid'

const INITIAL_STATE = []

export default ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case ADD_ALERT:
            return [
                ...state,
                {
                    text: action.payload,
                    id: uuid.v4()
                }
            ]
        case REMOVE_ALERT:
            return state.filter(alert => {
                if(alert.id === action.payload)
                    return false
                else
                    return true
            })
        default:
            return state
    }
}