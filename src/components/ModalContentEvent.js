import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ModalHeader from '../common/ModalHeader'

class ModalContentEvent extends Component {
    render () {
        return (
            <View>
                <View>
                    <ModalHeader headerText={'TEXT'} />
                </View>
                <Text>asdasd</Text>
            </View>
        )
    }
}

export default ModalContentEvent
