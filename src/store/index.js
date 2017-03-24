import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'
import { AsyncStorage } from 'react-native'
import reducer from '../reducers'

exports.configureStore = () => {
    let store = createStore(reducer, applyMiddleware(thunk))

    return store
}