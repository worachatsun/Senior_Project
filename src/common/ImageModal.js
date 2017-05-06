import React from 'react'
import { View, Image, Text } from 'react-native'
import ProgressiveImage from '../components/ProgressiveImage'

const ImageModal = (props) => {
    return (
        <View>
            <ProgressiveImage
                thumbnailSource={{ uri: 'https://i.imgur.com/O249H4P.png?bust' + Math.random() }}
                imageSource={{ uri: props.img }}
                style={[{width: null, height: props.height||260}, props.style]}
            />
            {/*<Image source={{uri: props.img}}
            style={[{resizeMode: 'stretch', width: null, height: props.height||230}, props.style]} />*/}
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
