import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { ModalHeaderPlain, WebViewRichText,  } from '../common'

class ModalCareer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: '#FF7F11'
        }

        AsyncStorage.getItem('color').then(data => {
            this.setState({color: data})
        })
    }

    render() {
        return (
            <View>
                <ModalHeaderPlain color={this.state.color} headerText={this.props.career_name} style={{marginBottom: 10}}/>
                <WebViewRichText webText={this.props.position} />
            </View>
        )
    }
}

export default ModalCareer