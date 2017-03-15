import React from 'react'
import { View, Text } from 'react-native'

const BottomNavBar = () => {
    const { footerNavStyle, insideNavStyle } = styles

    return (
        <View style={footerNavStyle}>
            
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
    }
}

export { BottomNavBar }