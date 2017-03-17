import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Card = (props) => {
    const { containerStyle, viewStyle, textStyle } = styles

    return (
        <View style={styles.containerStyle}>
            <View>
                {props.children}
            </View>
            <View style={viewStyle}>
                <Text style={textStyle} numberOfLines={2}>
                    { props.title }
                </Text>
            </View>
        </View>
    )
}
                
const styles = {
    containerStyle: {
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 12,
        height: 90,
        flexDirection: 'row',
        backgroundColor: '#FEFEFF'
    },
    viewStyle: {
        padding: 15,
        height: 100,
        flex: 1,
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 12
    }
}

export { Card }