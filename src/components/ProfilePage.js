import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Header } from '../common'
import NewsFavorite from './NewsFavorite'

class ProfilePage extends Component {
    render () {
        return (
            <View>
                <Header headerText={'Profile'}/>
                <NewsFavorite />
            </View>
        )
    }
}

export default ProfilePage