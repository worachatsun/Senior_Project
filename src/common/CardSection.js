import React from 'react'
import { View } from 'react-native'

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
}

const styles = {
    containerStyle: {
        height: 1,
        backgroundColor: '#ddd',
    }
}

export { CardSection }