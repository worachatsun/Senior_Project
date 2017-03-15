import React from 'react'
import { View, Text } from 'react-native'

const BottomNavBar = () => {
    const { footerNavStyle, insideNavStyle } = styles

    return (
        <View style={insideNavStyle}>
            
        </View>
    )
}

const styles = {
    footerNavStyle: {
        flex: 1,
        justifyContent: 'flex-end',
        position: 'relative',
        backgroundColor: 'red'
    },
    insideNavStyle: {
        flex: 0.27,
        justifyContent: 'flex-end',
        backgroundColor: '#FEFEFF',
        flexDirection: 'row'
    }
}

export { BottomNavBar }