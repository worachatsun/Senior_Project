import React, { Component } from 'react'
import { Text, Image } from 'react-native'
import { Scene, Router, TabBar, Modal } from 'react-native-router-flux'
import NewsPage from './components/NewsPage'
import SearchPage from './components/SearchPage'
import ModalContent from './common/ModalContent'
import ModalContentEvent from './components/ModalContentEvent'
import DrawerComponent from './components/DrawerComponent'
import ProfilePage from './components/ProfilePage'
import EventPage from './components/EventPage'
import DonationDescription from './components/DonationDescription'
import ModalGetTicket from './components/ModalGetTicket'
import DonationPage from './components/DonationPage'
import NewsFavorite from './components/NewsFavorite'
import EventJoined from './components/JoinedEvent'
import CareerPage from './components/CareerPage'
import ModalDonate from './components/ModalDonate'

class TabIcon extends React.Component {
    iconByName = (iconName) => {
        switch (iconName) {
            case "home": return this.props.selected ? require(`./env/images/home.png`) : require(`./env/images/home_black.png`);
            case "search": return this.props.selected ? require(`./env/images/search.png`) : require(`./env/images/search_black.png`);
            case "profile": return this.props.selected ? require(`./env/images/profile.png`) : require(`./env/images/profile_black.png`);
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
                    <Scene key="root" >
                        <Scene key="tabbar" tabs tabBarStyle={{backgroundColor: '#FFFFFF'}} >
                            <Scene key="Home" title="home" icon={TabIcon}>
                                <Scene key="News" component={NewsPage} />
                                <Scene key="Event" component={EventPage} />
                                <Scene key="Donation"  component={DonationPage} initial/>
                                <Scene key="Career" component={CareerPage}  />
                            </Scene>
                            <Scene key="SearchPage" component={SearchPage} icon={TabIcon} title="search" />
                            <Scene key="ProfilePage" component={ProfilePage} icon={TabIcon} title="profile" />
                        </Scene>
                        <Scene key="modal" schema="modal" component={ModalContent} title="Modal" direction="vertical" hideNavBar />                  
                        <Scene key="modalEvent" component={ModalContentEvent} hideNavBar />                  
                        <Scene key="modalTicket" schema="modal" component={ModalGetTicket} title="Modal" direction="vertical" hideNavBar />                  
                        <Scene key="donationDes" component={DonationDescription} direction="horizontal" hideNavBar />
                        <Scene key="modalDonate" component={ModalDonate} direction="vertical" hideNavBar />
                        <Scene key="EventJoined" component={EventJoined} direction="horizontal" hideNavBar />
                        <Scene key="NewsFavorite" component={NewsFavorite} direction="horizontal" hideNavBar />
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
