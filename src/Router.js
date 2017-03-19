import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import NewsPage from './components/NewsPage'
import SearchPage from './components/SearchPage'


class RouterComponent extends Component {

    render () {
        return (
            <Router hideNavBar={true}>
                <Scene key="NewsPage" component={NewsPage} />
            </Router>
        )
    }
}

export default RouterComponent