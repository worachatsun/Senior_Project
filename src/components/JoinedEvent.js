import React, { Component } from 'react'
import { View, Text, ListView } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Header, Card } from '../common'
import EventItem from './EventItem'

class JoinedEvent extends Component {

    componentWillMount() {
        this.props.fetchJoinedEvent()
    }

    renderRow(event) {
        return <EventItem event={event} JoinedEvent={'fetchJoinedEvent'} />
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header headerText={'Joined Event'} style={{marginBottom: 10}} />
                <ListView
                    dataSource={this.props.fetch_event_joined}
                    renderRow={this.renderRow.bind(this)}
                    enableEmptySections={true}
                />
            </View>
        )
    }
}

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1!==r2})

const mapStateToProps = state => {
    return { 
        fetch_event_joined: ds.cloneWithRows(state.user.fetch_joined_event)
    }
}

export default connect(mapStateToProps, actions)(JoinedEvent)