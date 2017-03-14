import React, { PropTypes } from 'react'
import { Text, View, StatusBar, Platform } from 'react-native'

const Header = (props) => {
    const { textStyle, viewStyle, statusBar } = styles

    return (
        <View>
            <MyStatusBar backgroundColor="#FF7F11" barStyle="light-content" />
            <View style={viewStyle}>
                <Text style={textStyle}>{props.headerText}</Text>
            </View>
        </View>
    )
}

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
)

Header.PropTypes = {
    headerText: PropTypes.string.isRequired
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#FEFEFF',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
}

export { Header }