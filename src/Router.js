import React from 'react'
import { Navigator, TouchableHighlight } from 'react-native'
import NewsPage from './components/NewsPage'

const RouterComponent = () => {
    return (
        <Navigator
            initialRoute={routes[0]}
            initialRouteStack={routes}
            renderScene={(route, navigator) =>
                <NewsPage header={route.title}/>
            }
            
        />
    )
}

const routes = [
    { title: 'News', index: 0 }
]

export default RouterComponent