import React from 'react'
import { View, Text, Image } from 'react-native'

const BottomNavBar = () => {
    const { footerNavStyle, iconStyle, rowStyle, viewIconStyle } = styles

    return (
        <View style={footerNavStyle}>
            <View style={rowStyle}>
                <View style={viewIconStyle}>
                    <Image style={iconStyle} source={require('../env/images/home.png')} />
                </View>
                <View style={viewIconStyle}>
                    <Image style={iconStyle} source={require('../env/images/search.png')} />
                </View>
                <View style={viewIconStyle}>
                    <Image style={iconStyle} source={require('../env/images/chat.png')} />
                </View>
                <View style={viewIconStyle}>
                    <Image style={iconStyle} source={require('../env/images/user.png')} />
                </View>
            </View>
        </View>
    )
}

const styles = {
    footerNavStyle: {
        justifyContent: 'flex-end',
        backgroundColor: '#FEFEFF',
        position: 'relative',
        height: 55
    },
    rowStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 30
    },
    iconStyle: {
        width: 30, 
        height: 30 
    },
    viewIconStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export { BottomNavBar }