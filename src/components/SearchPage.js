import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { BottomNavBar } from '../common'

class SearchPage extends Component {
    render () {
        return (
            <View>
                <Text> Search Page </Text>
                <BottomNavBar navigator={this.props.navigator} />   
            </View>
        )
    }
}

export default SearchPage