import React, { Component } from 'react'
import { Text, Image } from 'react-native'
import { Scene, Router, TabBar, Modal } from 'react-native-router-flux'
import NewsPage from './components/NewsPage'
import SearchPage from './components/SearchPage'
import ModalContent from './common/ModalContent'
import DrawerComponent from './components/DrawerComponent'

class TabIcon extends React.Component {
    iconByName = (iconName) => {
        switch (iconName) {
            case "home": return this.props.selected ? require(`./env/images/home.png`) : require(`./env/images/home_black.png`);
            case "search": return this.props.selected ? require(`./env/images/search.png`) : require(`./env/images/search_black.png`);
        }
    }

    render(){
        return (
            <Image 
                style={styles.iconStyle}
                source={this.iconByName(this.props.title)} 
            />
        )
    }
}

class RouterComponent extends Component {

    render () {
        return (
            <Router hideNavBar={true}>
                <Scene key="drawer" component={DrawerComponent} open={false} >
                    <Scene key="News">
                        <Scene key="tabbar" tabs tabBarStyle={{backgroundColor: '#FFFFFF'}} >
                            <Scene key="Home" component={NewsPage} title="home" icon={TabIcon} initial />
                            <Scene key="SearchPage" component={SearchPage} icon={TabIcon} title="search" />
                        </Scene>
                        <Scene key="modal" schema="modal" component={ModalContent} title="Modal" direction="vertical" hideNavBar />                    
                    </Scene>
                </Scene>
            </Router>
        )
    }
}

const styles = {
    iconStyle: {
        width: 25, 
        height: 25 
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