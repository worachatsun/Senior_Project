import React from 'react'
import { View, Text } from 'react-native'
import { ModalHeader, Card } from './index'

const ModalContent = () => {
    return (
        <View>
            <View>
                <ModalHeader headerText={'SIT NEWS'} />
            </View>
           <View>
               <Card />
           </View>
        </View>
    )
}

export { ModalContent }

