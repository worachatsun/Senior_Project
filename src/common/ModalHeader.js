import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Text, View, StatusBar, Platform, Image, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as actions from '../actions'

const ModalHeader = (props) => {
    const { textStyle, viewStyle, statusBar, rowStyle, headerIcon, starIcon } = styles
    const textBackgroundColor = props.textBackgroundColor || '#FEFEFF'
    const imageStar = props.user.check_favorite_news ? require('../env/images/star.png') : require('../env/images/star_blank.png')
    const favorite_status = props.user.check_favorite_news ? 'delete' : 'add'
    console.log("favorite_status: "+favorite_status)
    return (
        <View>
            <MyStatusBar backgroundColor="#FF7F11" barStyle="light-content" />
            <View style={[viewStyle, {backgroundColor: textBackgroundColor}, rowStyle]}>
                <TouchableOpacity onPress={() => {
                    Actions.pop()
                    props.fetchFavoriteNews()
                    }}>
                    <View>
                        <Image style={headerIcon} source={require('../env/images/close.png')} />
                    </View>
                </TouchableOpacity>
                <View>
                    <Text style={textStyle}>{props.headerText}</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    //props.fetchFavoriteNews()
                    props.FavoriteNews(props.favorite_Id, favorite_status)
                    props.checkFavoriteNews(props.favorite_Id)  }}>
                    <View>
                        <Image style={starIcon} source={imageStar} />
                    </View>
                </TouchableOpacity>
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
    starIcon: {
        width: 20,
        height: 20,
        margin: 10
    }
}

const mapStateToProps = state => {
    return { user: state.user }
}

export default connect(mapStateToProps, actions)(ModalHeader)