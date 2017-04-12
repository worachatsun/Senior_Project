import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { ModalHeaderPlain } from '../common'

class ModalDonate extends Component {
    render() {
        console.log(this.props)
        return (
            <View>
                <ModalHeaderPlain headerText={this.props.project_name} style={{marginBottom: 10}}/>
                <Text>{this.props.donate.how_to}</Text>
            </View>
        )
    }
}

export default ModalDonate