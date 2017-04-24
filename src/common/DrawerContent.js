import React, { Proptype } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
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
            <TouchableOpacity onPress={() => Actions.EventJoined() }>
                <View style={menuStyle}>
                    <Image style={iconStyle} source={require(`../env/images/news.png`)} />
                    <Text style={textStyle}>Event Joined</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.NewsFavorite() }>
                <View style={menuStyle}>
                    <Image style={iconStyle} source={require(`../env/images/event.png`)} />
                    <Text style={textStyle}>News Favorite</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('drawer')}>
                <View style={footerBar}>
                    <Image style={iconStyle} source={require(`../env/images/logout.png`)} />
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
        width: 20,
        height: 20,
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
}

export { DrawerContent }