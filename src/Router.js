import React, { Component } from 'react'
import { Scene, Router, TabBar } from 'react-native-router-flux'
import NewsPage from './components/NewsPage'
import SearchPage from './components/SearchPage'


class RouterComponent extends Component {

    render () {
        return (
            <Router hideNavBar={true}>
                <Scene key="main">
                    <Scene key="News">
                        <Scene key="NewsPage" component={NewsPage} />
                        <Scene key="SearchPage" component={SearchPage} />
                    </Scene>
                </Scene>
            </Router>
        )
    }
}

export default RouterComponent