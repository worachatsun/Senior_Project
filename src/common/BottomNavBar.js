import React from 'react'
import { View, Text, Image } from 'react-native'

const BottomNavBar = () => {
    const { footerNavStyle, insideNavStyle } = styles

    return (
        <View style={footerNavStyle}>
            <View>
                <Image source={require('../env/images/home.svg')} />
            </View>
        </View>
    )
}

const styles = {
    footerNavStyle: {
        justifyContent: 'flex-end',
        backgroundColor: '#FEFEFF',
        flexDirection: 'row',
        position: 'relative',
        height: 55
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

export { BottomNavBar }