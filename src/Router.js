import React from 'react'
import { Scene, Router, Action } from 'react-native-router-flux'
import NewsPage from './components/NewsPage'

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="main">
                <Scene
                key="news"
                component={NewsPage}
                title="News" 
                initial/>
            </Scene>
        </Router>
    )
}

export default RouterComponent