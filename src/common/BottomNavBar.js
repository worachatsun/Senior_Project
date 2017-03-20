import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'

class BottomNavBar extends Component {
    render () {
        const { footerNavStyle, iconStyle, rowStyle, viewIconStyle } = styles

    return (
            <View style={footerNavStyle}>
                <View style={rowStyle}>
                    <View style={viewIconStyle}>
                        <TouchableOpacity onPress={() => Actions.NewsPage({type: ActionConst.RESET})}>
                            <Image style={iconStyle} source={require('../env/images/home.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={viewIconStyle}>
                        <TouchableOpacity onPress={() => Actions.SearchPage({type: ActionConst.RESET})}>
                            <Image style={iconStyle} source={require('../env/images/search.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={viewIconStyle}>
                        <TouchableOpacity onPress={() => console.log('press')}>
                            <Image style={iconStyle} source={require('../env/images/chat.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={viewIconStyle}>
                        <TouchableOpacity onPress={() => console.log('press')}>
                            <Image style={iconStyle} source={require('../env/images/profile.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = {
    footerNavStyle: {
        justifyContent: 'flex-end',
        backgroundColor: '#FEFEFF',
        position: 'relative',
        height: 50
    },
    rowStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 30
    },
    iconStyle: {
        width: 25, 
        height: 25 
    },
    viewIconStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export { BottomNavBar }