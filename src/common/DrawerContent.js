import React, { Proptype } from 'react'
import { View, Text } from 'react-native'
import { CardSection } from '../common'

const DrawerContent = () => {
    const { viewStyle, profileStyle, menuStyle, textStyle } = styles
    return (
        <View style={viewStyle}>
            <View style={profileStyle}>
                
            </View>
            <View style={menuStyle}>
                <Text style={textStyle}>News</Text>
            </View>
            <View style={menuStyle}>
                
            </View>
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
        justifyContent: 'center',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        paddingLeft: 10
    },
    textStyle: {
        color: '#FF7F11'
    }
}

export { DrawerContent }