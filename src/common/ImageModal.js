import React from 'react'
import { View, Image } from 'react-native'

const ImageModal = () => {
    return (
        <View>
            <Image source={{uri: 'https://www.w3schools.com/css/img_forest.jpg'}}
            style={{resizeMode: 'stretch', width: null, height: 230}} />
        </View>
    )
}

export { ImageModal }
