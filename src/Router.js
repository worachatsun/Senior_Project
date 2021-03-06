import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getUserInfo } from './actions'
import { Text, Image, View, AsyncStorage, ActivityIndicator } from 'react-native'
import { Scene, Router, TabBar, Modal, Actions } from 'react-native-router-flux'
import * as Keychain from 'react-native-keychain'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
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
import ModalCareer from './components/ModalCareer'
import CareerDescription from './components/CareerDescription'
import EditProfile from './components/EditProfile'
import LoginPage from './components/LoginPage'
import Test from './components/Test'
import SignupComponent from './components/SignupComponent'
import DrawerContent from './common/DrawerContent'
import ChatPage from './components/ChatPage'
import SearchPageEvent from './components/SearchPageEvent'
import SearchPageDonation from './components/SearchPageDonation'
import SearchPageCareer from './components/SearchPageCareer'
import AllowAllUserNews from './components/AllowAllUserNews'
import NewsPageOutside from './components/UnAuth/NewsPageOutside'
import { APP_ID, MANAGE_API, API_URL } from '../env.js'

class TabIcon extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: '#FF7F11'
        }

        AsyncStorage.getItem('color').then(data => {
            this.setState({color: data})
        })
    }

  render() {
    const color = this.props.selected ? this.state.color||'#FF7F11' : '#301c2a'
    
    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
        <Icon style={{color: color}} name={this.props.iconName || "comment-alert-outline"} size={22}/>
        <Text style={{color: color, fontSize: 10}}>{this.props.title}</Text>
      </View>
    )
  }
}

class RouterComponent extends Component {
    constructor(props) {
        super(props)
        Keychain
        .getGenericPassword()
        .then(function(credentials) {
            if(credentials) {
                props.getUserInfo(credentials.password)
                Actions.tabbar()
            }else{
                Actions.first()
            }
        }).catch(function(error) {
            console.log('Keychain couldn\'t be accessed! Maybe no value set?', error)
        })

        this.state = {
            features: null
        }
        AsyncStorage.getItem('features').then(data => {
            this.setState({features: JSON.parse(data)})
        })
    }

    render () {
        if (!this.state.features) {
            return (
                <View style={styles.centering}>
                    <ActivityIndicator
                        animating={true}
                        style={{height: 80}}
                        size="large"
                    />
                    <Text>{APP_ID}</Text>
                    <Text>{MANAGE_API}</Text>
                    <Text>{API_URL}</Text>
                </View>
            )
        }
        return (
            <Router hideNavBar={true}>
                    <Scene key="root" >
                        <Scene key="tabbar" tabs tabBarStyle={{backgroundColor: '#FFFFFF'}}>
                            <Scene key="News" component={NewsPage} icon={this.state.features.news?TabIcon:''} iconName={'newspaper'} title="NEWS"/>
                            <Scene key="Event" component={EventPage} icon={this.state.features.event?TabIcon:''} iconName={'calendar-text'} title="EVENT" />
                            <Scene key="Donation"  component={DonationPage} icon={this.state.features.donate?TabIcon:''} iconName={'coin'} title="DONATION"/>
                            <Scene key="Career" component={CareerPage} icon={this.state.features.career?TabIcon:''} iconName={'worker'} title="CAREER"/>
                            <Scene key="Menu" component={DrawerContent} icon={TabIcon} iconName={'menu'} title="MENU"/>
                        </Scene>
                        <Scene key="modal" schema="modal" component={ModalContent} title="Modal" direction="vertical" hideNavBar />                  
                        <Scene key="modalEvent" component={ModalContentEvent} direction="vertical" hideNavBar hideNavBar />                  
                        <Scene key="modalTicket" schema="modal" component={ModalGetTicket} title="Modal" direction="vertical" hideNavBar />                  
                        <Scene key="donationDes" component={DonationDescription} direction="horizontal" hideNavBar />
                        <Scene key="modalDonate" component={ModalDonate} direction="vertical" hideNavBar />
                        <Scene key="modalCareer" component={ModalCareer} direction="vertical" hideNavBar />
                        <Scene key="EventJoined" component={EventJoined} direction="horizontal" hideNavBar />
                        <Scene key="NewsFavorite" component={NewsFavorite} direction="horizontal" hideNavBar />
                        <Scene key="careerDes" component={CareerDescription} direction="horizontal" hideNavBar />
                        <Scene key="editProfile" component={EditProfile} direction="vertical" hideNavBar />
                        <Scene key="login" component={LoginPage}/>
                        <Scene key="pro" component={Test} />
                        <Scene key="signup" component={SignupComponent}/>
                        <Scene key="SearchPage" component={SearchPage} />
                        <Scene key="SearchPageEvent" component={SearchPageEvent} />
                        <Scene key="SearchPageDonation" component={SearchPageDonation}/>
                        <Scene key="SearchPageCareer" component={SearchPageCareer} />
                        <Scene key="ProfilePage" component={ProfilePage} direction="horizontal" />
                        <Scene key="chat" component={ChatPage} />
                        <Scene key="first" component={AllowAllUserNews} initial/>
                    </Scene>
            </Router>
        )
    }
}

const styles = {
    iconStyle: {
        width: 25, 
        height: 25 
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        flex: 1
    }
}

export default connect(null, { getUserInfo })(RouterComponent)
