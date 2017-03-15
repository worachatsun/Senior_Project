import React from 'react'
import { View, Text } from 'react-native'

const BottomNavBar = () => {
    const { viewStyle } = styles

    return (
        <View style={viewStyle}>
            <Text>
                ButtomNavBar
            </Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: 'white',
        height: 30,
        flex: 1,
        
    }
}

export { BottomNavBar }