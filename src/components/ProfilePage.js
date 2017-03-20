import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Header } from '../common'

class ProfilePage extends Component {
    render () {
        return (
            <View>
                <Header headerText={'Profile'}/>
                <Text>Profile</Text>
            </View>
        )
    }
}

export default ProfilePage