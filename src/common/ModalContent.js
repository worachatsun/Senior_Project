import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ModalHeader, Card } from './index'

const ModalContent = (props) => {
    return (
        <View>
            <View>
                <ModalHeader closeModal={props.closeModal} headerText={'SIT NEWS'} />
            </View>
           <View>
               <Card />
           </View>
        </View>
    )
}

export { ModalContent }

