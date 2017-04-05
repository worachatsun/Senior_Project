import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Header, BigCard } from '../common'

class DonationPage extends Component{
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#353535'}}>
                <Header headerText={'Donation'}/>
                <BigCard>
                    <Image source={{uri: 'https://www.w3schools.com/css/img_forest.jpg'}}
    style={{resizeMode: 'stretch', width: null, height: 230}} />
                </BigCard>
            </View>
        )
    }
}

export default DonationPage