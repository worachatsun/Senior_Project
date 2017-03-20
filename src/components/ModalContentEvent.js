import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ListView, ScrollView } from 'react-native'
import { Card, ImageModal, CardSection, ModalHeader } from '../common'

class ModalContentEvent extends Component {

    render () {
        const { headerTextStyle, contentTextStyle, viewStyle } = styles

        return (
            <View style={{flex: 1}}>
                <View>
                    <ModalHeader headerText={'TITLE'} />
                </View>
                <ScrollView>
                    <ImageModal img={'https://www.w3schools.com/css/img_forest.jpg'} />
                    <View style={{borderBottomWidth: 1, borderColor: '#ddd',}}>
                        <Text style={headerTextStyle}>TITLE</Text>
                    </View>
                    <View style={viewStyle}>
                        <Text style={contentTextStyle}>TITLE</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = {
    headerTextStyle: {
        margin: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25
    },
    contentTextStyle: {
        margin: 20,
        textAlign: 'center'
    },
    viewStyle: {
        alignItems: 'center'
    }
}

export default ModalContentEvent

