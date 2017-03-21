import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ModalHeader from '../common/ModalHeader'
import { ImageModal, EmptyCard } from '../common'

class ModalContentEvent extends Component {
    render () {
        return (
            <View>
                <View>
                    <ModalHeader headerText={'TEXT'} />
                </View>
                <ImageModal img={'https://twistedsifter.files.wordpress.com/2016/07/dulmen_bornste_waldweg.jpg'} />
                <EmptyCard>
                    <Text>sun</Text>
                </EmptyCard>
            </View>
        )
    }
}

export default ModalContentEvent
