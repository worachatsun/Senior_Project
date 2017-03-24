import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { configureStore } from './store'
import Router from './Router'

class App extends Component {
    render () {
        return (
            <Provider store={configureStore()}>
                <Router />
            </Provider>
        )
    }
}

export default App