import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Text, View, StatusBar, Platform, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Actions } from 'react-native-router-flux'
import * as actions from '../actions'

const ModalHeader = (props) => {
    const { textStyle, viewStyle, statusBar, rowStyle, headerIcon, starIcon } = styles
    const textBackgroundColor = props.textBackgroundColor || '#FEFEFF'
    const imageStar = props.user.check_favorite_news ? require('../env/images/star.png') : require('../env/images/star_blank.png')
    const favorite_status = props.user.check_favorite_news ? 'delete' : 'add'
    console.log(props.profile._id)
    return (
        <View>
            <MyStatusBar backgroundColor="#FF7F11" barStyle="light-content" />
            <View style={[viewStyle, {backgroundColor: textBackgroundColor}, rowStyle]}>
                <TouchableOpacity onPress={() => {
                    Actions.pop()
                    }}>
                    <View>
                        <Icon style={[{color: "#FF7F11"}, styles.vectorIcon]} name={'close'} size={25}/>
                    </View>
                </TouchableOpacity>
                <View style={{width:220, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={textStyle} numberOfLines={1}>{props.headerText}</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    props.FavoriteNews(props.favorite_Id, favorite_status, props.profile._id)
                    props.checkFavoriteNews(props.favorite_Id, props.profile._id)  }}>
                    <View>
                        <Image style={starIcon} source={imageStar} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export const ModalHeaderPlain = (props) => {
    const { textStyle, viewStyle, statusBar, rowStyle, headerIcon } = styles
    const textBackgroundColor = props.textBackgroundColor || '#FEFEFF'
    const backSign = props.backSign ? 'arrow-left' : 'close'

    return (
        <View style={props.style}>
            <MyStatusBar backgroundColor="#FF7F11" barStyle="light-content" />
            <View style={[viewStyle, {backgroundColor: textBackgroundColor}, rowStyle]}>
                <TouchableOpacity onPress={() => {
                    Actions.pop()
                    }}>
                    <View>
                        <Icon style={[{color: "#FF7F11"}, styles.vectorIcon]} name={backSign} size={25}/>
                    </View>
                </TouchableOpacity>
                <View style={{width:220, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={textStyle} numberOfLines={1}>{props.headerText}</Text>
                </View>
                <View style={headerIcon}>
                </View>
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
        position: 'relative'
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerIcon: {
        width: 13,
        height: 13,
        margin: 10
    },
    vectorIcon: {
        marginLeft: 10
    },
    starIcon: {
        width: 20,
        height: 20,
        margin: 10
    }
}

const mapStateToProps = state => {
    return { profile: state.auth.user_detail.user, user: state.user }
}

export default connect(mapStateToProps, actions)(ModalHeader)