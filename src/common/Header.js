import React, { PropTypes } from 'react'
import { Text, View, StatusBar, Platform, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Actions } from 'react-native-router-flux'

const Header = props => {
    const { textStyle, viewStyle, statusBar, rowStyle, headerIcon } = styles
    const textBackgroundColor = props.textBackgroundColor || '#FEFEFF'

    const rightIcon = () => {
        if (props.rightIcon == 'edit') { return <EditHeader /> }
        else if (props.rightIcon == 'no') {return <View style={headerIcon} />}
        else { return <SearchHeader color={props.color} route_to={props.route_to}/> }
    }

    const leftIcon = () => {
        return props.leftIcon == 'back' ? <BackIcon color={props.color} />: <View style={headerIcon} />
    }

    return (
        <View style={props.style}>
            <MyStatusBar backgroundColor={props.color||"#FF7F11"} barStyle="light-content" />
            <View style={[viewStyle, {backgroundColor: textBackgroundColor}, rowStyle]}>
                {leftIcon()}
                <View>
                    <Text style={textStyle} numberOfLines={1}>{props.headerText}</Text>
                </View>
                {rightIcon()}
            </View>
        </View>
    )
}

const BackIcon = props => (
    <TouchableOpacity onPress={() => Actions.pop()}>
        <View>
            {/*<Image style={styles.headerIcon} source={require('../env/images/left-arrow.png')} />*/}
            <Icon style={[{color: props.color||"#FF7F11"}, styles.vectorIcon]} name={"arrow-left"} size={22}/>
        </View>
    </TouchableOpacity>
)

const searchTo = (searchTo) => {
    switch (searchTo) {
        case 'news' : return Actions.SearchPage()
        case 'event' : return Actions.SearchPageEvent()
        case 'donation' : return Actions.SearchPageDonation()
        case 'career' : return Actions.SearchPageCareer()
    }
}

const SearchHeader = (props) => (
    <TouchableOpacity onPress={() => searchTo(props.route_to)}>
        <View>
            {/*<Image style={styles.headerIcon} source={require('../env/images/search.png')} />*/}
            <Icon style={[{color: props.color||"#FF7F11"}, styles.vectorIcon]} name={"magnify"} size={24}/>
        </View>
    </TouchableOpacity>
)

const EditHeader = () => (
    <TouchableOpacity onPress={() => Actions.editProfile()}>
        <Image style={styles.headerIcon} source={require('../env/images/edit.png')} />
    </TouchableOpacity>
)

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
)

Header.PropTypes = {
    headerText: PropTypes.string.isRequired
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0

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
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerIcon: {
        width: 20,
        height: 20,
        margin: 11
    },
    vectorIcon: {
        margin: 11
    }
}

export { Header }