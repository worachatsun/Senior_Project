import React from 'react'
import { Navigator } from 'react-native'
import NewsPage from './components/NewsPage'

const RouterComponent = () => {
    return (
        <Navigator
            initialRoute={{ title: 'Awesome Scene', index: 0 }}
            renderScene={(route, navigator) =>
                <NewsPage />
            }
            
        />
    )
}

export default RouterComponent