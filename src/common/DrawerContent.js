import React, { Proptype, Component } from 'react'
import { View, Text, Image, TouchableOpacity, StatusBar, Platform, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Actions } from 'react-native-router-flux'
import { CardSection, RoundImage } from '../common'

class DrawerContent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: '#FF7F11'
        }

        AsyncStorage.getItem('color').then(data => {
            this.setState({color: data})
        })

        this.onLogout = this.onLogout.bind(this)
    }

    async onLogout() {
        await this.props.unauthUser()
        await Actions.popTo('first')
    }

    render() {
        const { viewStyle, profileStyle, menuStyle, textStyle, iconStyle, footerBar } = styles

        if(this.props.profile.user_detail.user) {
            const { assets, name, surname, uid } = this.props.profile.user_detail.user
     
            return (
                <View style={viewStyle}>
                    <MyStatusBar backgroundColor={this.state.color||"#FF7F11"} barStyle="light-content" />
                    <TouchableOpacity onPress={() => Actions.ProfilePage() }>
                        <View style={profileStyle}>
                            <View style={{margin: 15}}>
                                {
                                    assets.picture===null?
                                    <Image style={styles.avatar} source={require('../env/images/profile.png')} />:
                                    <RoundImage img={assets.picture.uri} style={styles.roundImage}/>
                                }
                            </View>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{margin: 5, fontSize: 15, fontWeight: 'bold'}}>{name} {surname}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.sectionMenu}>
                        <Text style={{color: 'grey'}}>Follow</Text>
                    </View>
                    <TouchableOpacity onPress={() => Actions.NewsFavorite() }>
                        <View style={[menuStyle, {borderTopWidth: 1,borderColor: '#ddd'}]}>
                            <Icon style={[{color: this.state.color||"#FF7F11"}, iconStyle]} name={"newspaper"} size={20}/>
                            <Text style={[textStyle, {color: this.state.color||"#FF7F11"}]}>News Favorite</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Actions.EventJoined() }>
                        <View style={[menuStyle, {borderBottomWidth: 1,borderColor: '#ddd'}]}>
                            <Icon style={[{color: this.state.color||"#FF7F11"}, iconStyle]} name={"calendar-text"} size={20}/>
                            <Text style={[textStyle, {color: this.state.color||"#FF7F11"}]}>Event Joined</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.sectionMenu}>
                        <Text style={{color: 'grey'}}>Chat</Text>
                    </View>
                    <TouchableOpacity onPress={() => Actions.chat() }>
                        <View style={[menuStyle, {borderTopWidth: 1, borderBottomWidth: 1,borderColor: '#ddd'}]}>
                            <Icon style={[{color: this.state.color||"#FF7F11"}, iconStyle]} name={"comment-text"} size={20}/>
                            <Text style={[textStyle, {color: this.state.color||"#FF7F11"}]}>Chat with Admin</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.sectionMenu} />
                    <TouchableOpacity onPress={() => this.onLogout()}>
                        <View style={footerBar}>
                            <Icon style={[{color: 'red'}, iconStyle]} name={"logout-variant"} size={20}/>
                            <Text style={{color: 'red', margin: 5}}>Logout</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return(
                <View>
                    <Text>Unauthen</Text>
                </View>
            )
        }
    }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
)

const styles = {
    viewStyle: {
        flex: 1
    },
    profileStyle: {
        marginTop: 0,
        height: 100,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center'
    },
    menuStyle: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderBottomWidth: 0,
        borderColor: '#ddd',
        paddingLeft: 30,
        alignItems: 'center',
    },
    textStyle: {
        margin: 5
    },
    iconStyle: {
        marginRight: 10
    },
    roundImage: {
        height: 70, 
        width: 70, 
        borderRadius: 70/2
    },
    footerBar: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        paddingLeft: 30,
        alignItems: 'center',
    },
    sectionMenu: {
        marginTop: 20,
        marginBottom: 9,
        marginLeft: 9
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
    avatar: {
        borderRadius: 70/2,
        width: 70,
        height: 70
    }
}

const mapStateToProps = state => {
    return { profile: state.auth }
}

export default connect(mapStateToProps, actions)(DrawerContent)