import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { ModalHeaderPlain, WebViewRichText } from '../common'

class ModalDonate extends Component {
    render() {
        return (
            <View>
                <ModalHeaderPlain headerText={this.props.project_name} style={{marginBottom: 10}}/>
                <WebViewRichText webText={this.props.ways_to_donate} />
            </View>
        )
    }
}

export default ModalDonate