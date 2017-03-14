import React, { PropTypes } from 'react'
import { View, ActivityIndicator } from 'react-native'

const Spinner = ({ size = 'large' }) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size}/>
        </View>
    )
}

Spinner.propTypes = {
    size: PropTypes.string
}

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export { Spinner }