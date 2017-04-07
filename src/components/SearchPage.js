import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { BottomNavBar, Header } from '../common'

class SearchPage extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Header headerText={'Search'} style={{marginBottom: 10}} />
                <Text> Search Page </Text>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#FEFEFF'
    }
}

export default SearchPage