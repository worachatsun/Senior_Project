import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Header, ImageModal, HalfScreenCard } from '../common'

class EventPage extends Component {
    render () {
        return (
            <View style={styles.containerStyle}>
                <Header headerText={'Event'}/>
                <ScrollView>
                    <ImageModal img={'https://twistedsifter.files.wordpress.com/2016/07/dulmen_bornste_waldweg.jpg'} />
                    <View style={styles.halfCardContainer}>
                        <HalfScreenCard />
                        <HalfScreenCard />
                    </View>
                    <View style={styles.halfCardContainer}>
                        <HalfScreenCard />
                        <HalfScreenCard />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1
    },
    halfCardContainer: {
        flexDirection: 'row',
    }
}

export default EventPage