import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { Provider } from 'react-redux'
import { configureStore } from './store'
import axios from 'axios'
import * as Keychain from 'react-native-keychain'
import Router from './Router'
import { GET_APP_DETAIL } from './api'

class App extends Component {

    componentWillMount() {
        axios.get(`${GET_APP_DETAIL}`).then(({data}) => {
            AsyncStorage.setItem('logo', data.apps[0].logo)
            AsyncStorage.setItem('color', data.apps[0].color)
            AsyncStorage.setItem('uni_abb', data.apps[0].uni_abb)
            AsyncStorage.setItem('news', JSON.stringify(data.apps[0].features))
        }).catch(error => {
            console.log('get app data error')
        })
    }

    render () {
        return (
            <Provider store={configureStore()}>
                <Router />
            </Provider>
        )
    }
}

export default App