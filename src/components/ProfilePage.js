import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Header, EmptyCard } from '../common'
import NewsFavorite from './NewsFavorite'

class ProfilePage extends Component {
    render () {
        return (
            <View style={{flex: 1}}>
                <Header headerText={'Profile'}/>
                <TouchableOpacity onPress={() => Actions.NewsFavorite()}>
                    <EmptyCard>
                        <Text>Favorite News</Text>
                    </EmptyCard>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Actions.EventJoined()}>
                    <EmptyCard>
                        <Text>Joined Event</Text>
                    </EmptyCard>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ProfilePage