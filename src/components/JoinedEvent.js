import React, { Component } from 'react'
import { View, Text, ListView, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { ModalHeaderPlain, Card } from '../common'
import EventItem from './EventItem'

class JoinedEvent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: '#FF7F11'
        }

        AsyncStorage.getItem('color').then(data => {
            this.setState({color: data})
        })
    }

    componentWillMount() {
        this.props.fetchJoinedEvent(this.props.profile._id)
    }

    renderRow(event) {
        return <EventItem event={event} JoinedEvent={'fetchJoinedEvent'} />
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ModalHeaderPlain color={this.state.color} headerText={'Joined Event'} style={{marginBottom: 10}} backSign={'arrow'} />
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
        profile: state.auth.user_detail.user,
        fetch_event_joined: ds.cloneWithRows(state.user.fetch_joined_event)
    }
}

export default connect(mapStateToProps, actions)(JoinedEvent)