import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Actions } from 'react-native-router-flux'
import { Header, ImageModal, HalfScreenCard } from '../common'

class EventPage extends Component {

    componentWillMount() {
        Actions.refresh({key: 'drawer', open: false})
        //this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1!==r2})
    }

    render () {
        return (
            <View style={styles.containerStyle}>
                <Header headerText={'Event'}/>
                <View>
                    <ScrollView style={{ marginBottom: 110}}>
                        <ImageModal style={{marginBottom: 12}} img={'https://twistedsifter.files.wordpress.com/2016/07/dulmen_bornste_waldweg.jpg'} />
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
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1
    },
    halfCardContainer: {
        flexDirection: 'row'
    }
}

export default connect(null, actions)(EventPage)