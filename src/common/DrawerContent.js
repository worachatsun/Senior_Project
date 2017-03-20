import React, { Proptype } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { CardSection } from '../common'

const DrawerContent = () => {
    const { viewStyle, profileStyle, menuStyle, textStyle, iconStyle } = styles
    return (
        <View style={viewStyle}>
            <View style={profileStyle}>
                
            </View>
            <TouchableOpacity onPress={() => Actions.News() }>
                <View style={menuStyle}>
                    <Image style={iconStyle} source={require(`../env/images/news.png`)} />
                    <Text style={textStyle}>News</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.News() }>
                <View style={menuStyle}>
                    <Image style={iconStyle} source={require(`../env/images/news.png`)} />
                    <Text style={textStyle}>Event</Text>
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
        height: 150,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    menuStyle: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderBottomWidth: 1,
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
    }
}

export { DrawerContent }