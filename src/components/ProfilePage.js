import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Header, EmptyCard, RoundImage } from '../common'
import NewsFavorite from './NewsFavorite'

class ProfilePage extends Component {
    render () {
        return (
            <View style={{flex: 1}}>
                <Header headerText={'Profile'}/>
                <ScrollView>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                        <RoundImage img={"https://www4.sit.kmutt.ac.th/files/story_pictures/IMG_0027.jpg"} />
                    </View>
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
                </ScrollView>
            </View>
        )
    }
}

const {height, width} = Dimensions.get('window')

export default ProfilePage