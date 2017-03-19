import React, { Component } from 'react'
import { Text } from 'react-native'
import { Scene, Router, TabBar, Modal } from 'react-native-router-flux'
import NewsPage from './components/NewsPage'
import SearchPage from './components/SearchPage'
import ModalContent from './common/ModalContent'

class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}

class RouterComponent extends Component {

    render () {
        return (
            <Router hideNavBar={true}>
                <Scene key="News">
                    <Scene key="tabbar" tabs tabBarStyle={{backgroundColor: '#FFFFFF'}} >
                        <Scene key="Home" component={NewsPage} title="Home" icon={TabIcon} initial />
                        <Scene key="SearchPage" component={SearchPage} icon={TabIcon} title="Shake" />
                    </Scene>
                    <Scene key="modal" component={ModalContent} title="Modal" direction="vertical" hideNavBar />
                </Scene>
            </Router>
        )
    }
}

export default RouterComponent

{/*<Router hideNavBar={true}>
                <Scene key="main">
                    <Scene key="News">
                        <Scene key="NewsPage" component={NewsPage} />
                        <Scene key="SearchPage" component={SearchPage} />
                    </Scene>
                </Scene>
            </Router>*/}