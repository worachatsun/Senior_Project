import React from 'react'
import { View, Image } from 'react-native'

const ImageModal = (props) => {
    return (
        <View>
            <Image source={{uri: props.img}}
            style={[{resizeMode: 'stretch', width: null, height: props.height||230}, props.style]} />
        </View>
    )
}

const RoundImage = (props) => {
    return (
        <View>
            <Image source={{uri: props.img}}
            style={[styles.roundImage, props.style]} />
        </View>
    )
}

const styles = {
    roundImage: {
        height: 100, 
        width: 100, 
        borderRadius: 100/2
    }
}

export { ImageModal, RoundImage }
