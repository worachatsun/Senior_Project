import React, { Component } from 'react'
import { Navigator, TouchableHighlight } from 'react-native'
import NewsPage from './components/NewsPage'
import SearchPage from './components/SearchPage'


class Router extends Component {
    navigatorRenderScene(route, navigator) {
        _navigator = navigator
        switch (route.index) {
            case 0:
                return (<NewsPage header={route.title} navigator={navigator} />)
            case 1:
                return (<SearchPage navigator={navigator} />)
        }
    }

    routes = [
        { title: 'News', index: 0 },
        { title: 'Search', index: 1}
    ]

    render () {
        return (
            <Navigator
                initialRoute={this.routes[0]}
                initialRouteStack={this.routes}
                renderScene={this.navigatorRenderScene}/>
        )
    }
}

export default Router