import React, { PropTypes } from 'react'
import { Text, View, StatusBar, Platform, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons'

const ModalHeader = (props) => {
    const { textStyle, viewStyle, statusBar, rowStyle, headerIcon } = styles
    const textBackgroundColor = props.textBackgroundColor || '#FEFEFF'

    return (
        <View>
            <MyStatusBar backgroundColor="#FF7F11" barStyle="light-content" />
            <View style={[viewStyle, {backgroundColor: textBackgroundColor}, rowStyle]}>
                <View>
                    <Image style={headerIcon} source={require('../env/images/left-arrow.png')} />
                </View>
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
        width: 18,
        height: 18,
        margin: 10
    }
}

export { ModalHeader }