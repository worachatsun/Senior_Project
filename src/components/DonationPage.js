import React, { Component } from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Header, BigCard } from '../common'

class DonationPage extends Component{
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#353535'}}>
                <Header headerText={'Donation'}/>
                <ScrollView>
                    <TouchableOpacity onPress={() => Actions.donation_des()}>
                        <BigCard>
                            <Image source={{uri: 'https://www.w3schools.com/css/img_forest.jpg'}}
            style={{resizeMode: 'stretch', width: null, height: 230}} />
                        </BigCard>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

export default DonationPage