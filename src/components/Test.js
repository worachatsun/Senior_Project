import React, { Component } from 'react'
import ProgressiveImage from './ProgressiveImage'

export default class Test extends Component {
    render() {
        return (
            <ProgressiveImage
                thumbnailSource={{ uri: 'https://i.imgur.com/O249H4P.png?bust' + Math.random() }}
                imageSource={{ uri: 'https://i.imgur.com/741u15U.png?bust' + Math.random() }}
                style={{ flex: 1, alignItems: 'stretch', height: 250 }}
            />
        )
    }
}
