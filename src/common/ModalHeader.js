import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Text, View, StatusBar, Platform, Image, TouchableOpacity } from 'react-native'
import { closeModal } from '../actions'

const ModalHeader = (props) => {
    const { textStyle, viewStyle, statusBar, rowStyle, headerIcon } = styles
    const textBackgroundColor = props.textBackgroundColor || '#FEFEFF'
    console.log(props)
    return (
        <View>
            <MyStatusBar backgroundColor="#FF7F11" barStyle="light-content" />
            <View style={[viewStyle, {backgroundColor: textBackgroundColor}, rowStyle]}>
                <TouchableOpacity onPress={() => props.closeModal({prop: 'isOpen', value: false})}>
                    <View>
                        <Image style={headerIcon} source={require('../env/images/close.png')} />
                    </View>
                </TouchableOpacity>
                <View>
                    <Text style={textStyle}>{props.headerText}</Text>
                </View>
                <View style={headerIcon}></View>
            </View>
        </View>
    )
}

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
)

ModalHeader.PropTypes = {
    headerText: PropTypes.string.isRequired
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
        marginBottom: 12
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerIcon: {
        width: 16,
        height: 16,
        margin: 10
    }
}

export default connect(null, { closeModal })(ModalHeader)