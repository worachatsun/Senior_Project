import React from 'react'
import { View, Image } from 'react-native'

const ImageModal = (props) => {
    return (
        <View>
            <Image source={{uri: props.img}}
            style={{resizeMode: 'stretch', width: null, height: props.height||230}} />
        </View>
    )
}

export { ImageModal }
