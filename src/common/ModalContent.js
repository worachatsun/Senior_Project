import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Card, ImageModal } from './index'
import ModalHeader from './ModalHeader'

const ModalContent = (props) => {
    return (
        <View>
            <View>
                <ModalHeader headerText={'SIT NEWS'} />
            </View>
           <View>
               <ImageModal />
               <Card />
           </View>
        </View>
    )
}

export { ModalContent }

