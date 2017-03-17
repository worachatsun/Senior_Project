import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Card, ImageModal } from './index'
import ModalHeader from './ModalHeader'

class ModalContent extends Component {
    render () {
        return (
            <View>
                <View>
                    <ModalHeader headerText={'SIT NEWS'} />
                </View>
                <View>
                    <ImageModal />
                    <Card />
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { newsList: state.newsList }
}

export default connect(mapStateToProps)( ModalContent )

