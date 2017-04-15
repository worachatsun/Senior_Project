import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { ModalHeaderPlain, WebViewRichText,  } from '../common'

class ModalCareer extends Component {
    render() {
        console.log(this.props.position)
        return (
            <View>
                <ModalHeaderPlain headerText={this.props.career_name} style={{marginBottom: 10}}/>
                <WebViewRichText webText={this.props.position} />
            </View>
        )
    }
}

export default ModalCareer