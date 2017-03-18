import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const BottomNavBar = (props) => {
    const { footerNavStyle, iconStyle, rowStyle, viewIconStyle } = styles

    return (
        <View style={footerNavStyle}>
            <View style={rowStyle}>
                <View style={viewIconStyle}>
                    <TouchableOpacity onPress={() => console.log('press')}>
                        <Image style={iconStyle} source={require('../env/images/home.png')} />
                    </TouchableOpacity>
                </View>
                <View style={viewIconStyle}>
                    <TouchableOpacity onPress={this.navSearch}>
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
                        <Image style={iconStyle} source={require('../env/images/user.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const navSearch = () => {
    console.log(this.props)
    this.props.navigator.push({
        index: 1
    })
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