import React, { Component } from 'react'
import { View, ScrollView, ListView, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Actions } from 'react-native-router-flux'
import { Header, ImageModal } from '../common'
import EventItem from './EventItem'

class EventPage extends Component {

    componentWillMount() {
        Actions.refresh({key: 'drawer', open: false})
        this.props.fetchEvent()
        this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1!==r2})
    }

    renderRow(event) {
        return <EventItem event={event}/>
    }

    render () {
        return (
            <View style={styles.containerStyle}>
                <Header headerText={'Event'}/>
                <View style={{flex: 1}}>
                    <ScrollView style={{ marginBottom: 50}}>
                        <View>
                            <ImageModal style={{marginBottom: 12}} img={'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F29734669%2F204978080456%2F1%2Foriginal.jpg?w=800&rect=0%2C120%2C1920%2C960&s=9f972542e614803cf2f41667c44f543e'} />
                            <View style={styles.halfCardContainer}>
                                <ListView contentContainerStyle={styles.halfCardContainer}
                                    dataSource={this.dataSource.cloneWithRows(this.props.event.fetchEvent)}
                                    renderRow={this.renderRow.bind(this)}
                                    enableEmptySections={true}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const {height, width} = Dimensions.get('window')

const styles = {
    containerStyle: {
        flex: 1
    },
    halfCardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
}

const mapStateToProps = state => {
    return { 
        event: state.event
    }
}

export default connect(mapStateToProps, actions)(EventPage)