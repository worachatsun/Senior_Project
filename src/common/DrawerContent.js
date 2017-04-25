import React, { Proptype } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Actions } from 'react-native-router-flux'
import { CardSection, RoundImage } from '../common'

const DrawerContent = (props) => {
    const { viewStyle, profileStyle, menuStyle, textStyle, iconStyle, footerBar } = styles

    return (
        <View style={viewStyle}>
            <TouchableOpacity onPress={() => Actions.ProfilePage() }>
                <View style={profileStyle}>
                    <View style={{margin: 15}}>
                        <RoundImage img={"https://www4.sit.kmutt.ac.th/files/story_pictures/IMG_0027.jpg"} style={styles.roundImage}/>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{margin: 5, fontSize: 15, fontWeight: 'bold'}}>Sukrit Wisetkaeo</Text>
                        <Text style={{margin: 5}}>57130500057</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.sectionMenu}>
                <Text style={{color: 'white'}}>Follow</Text>
            </View>
            <TouchableOpacity onPress={() => Actions.EventJoined() }>
                <View style={menuStyle}>
                    <Icon style={[{color: "#FF7F11"}, iconStyle]} name={"calendar-text"} size={20}/>
                    <Text style={textStyle}>Event Joined</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.NewsFavorite() }>
                <View style={menuStyle}>
                    <Icon style={[{color: "#FF7F11"}, iconStyle]} name={"newspaper"} size={20}/>
                    <Text style={textStyle}>News Favorite</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.sectionMenu}>
                <Text style={{color: 'white'}}>Chat</Text>
            </View>
            <TouchableOpacity onPress={() => Actions.chat() }>
                <View style={menuStyle}>
                    <Icon style={[{color: "#FF7F11"}, iconStyle]} name={"comment-text"} size={20}/>
                    <Text style={textStyle}>Chat with Admin</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.sectionMenu} />
            <TouchableOpacity onPress={() => console.log('drawer')}>
                <View style={footerBar}>
                    <Icon style={[{color: 'red'}, iconStyle]} name={"logout-variant"} size={20}/>
                    <Text style={{color: 'red', margin: 5}}>Logout</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#353535',
        flex: 1
    },
    profileStyle: {
        marginTop: 20,
        height: 100,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center',
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
        color: '#FF7F11',
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
        borderColor: '#ddd',
        paddingLeft: 30,
        alignItems: 'center',
    },
    sectionMenu: {
        marginTop: 20,
        marginBottom: 9,
        marginLeft: 9
    }
}

export { DrawerContent }