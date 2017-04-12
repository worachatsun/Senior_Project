import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Header, Card } from '../common'

class CareerPage extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Header headerText={'Career'} style={{marginBottom: 12}}/>
                <ScrollView style={{flex: 1}}>
                    <Card description={'PTT'} img={'https://www.w3schools.com/css/img_forest.jpg'}/>
                </ScrollView>
            </View>
        )
    }
}

export default CareerPage