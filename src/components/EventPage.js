import React, { Component } from 'react'
import { View } from 'react-native'
import { Header } from '../common'

class EventPage extends Component {
    render () {
        return (
            <View style={styles.containerStyle}>
                <Header headerText={'Event'}/>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1
    }
}

export default EventPage