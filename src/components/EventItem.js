import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as actions from '../actions'
import { HalfScreenCard, Card, BigCard, ImageCard } from '../common'

class EventItem extends Component {

    updateContentModal() {
        const { event } = this.props
        this.props.modalContent(event)
    }

    render () {
        const selectCard = this.props.JoinedEvent == "fetchJoinedEvent" ? <Card description={this.props.event.event_name} img={this.props.event.picture} /> : <ImageCard description={this.props.event.event_name} startDate={this.props.event.regis_date_begin} endDate={this.props.event.regis_date_end} img={this.props.event.picture} />
        
        return (
            <View>
                <TouchableOpacity onPress={() => { 
                    this.props.selectEvent(this.props.event._id)
                    this.updateContentModal()           
                    return Actions.modalEvent()
                }}>
                    {selectCard}
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect(null, actions)(EventItem)