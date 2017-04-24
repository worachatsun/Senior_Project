import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as actions from '../actions'
import { HalfScreenCard, Card } from '../common'

class EventItem extends Component {

    updateContentModal() {
        const { event } = this.props
        this.props.modalContent(event)
    }

    render () {
        const selectCard = this.props.JoinedEvent == "fetchJoinedEvent" ? <Card description={this.props.event.event_name} img={this.props.event.assets.picture[0]} /> : <HalfScreenCard content={this.props.event}/>
    
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

const mapStateToProps = state => {
    return { selectNewsId: state.selectedNewsId }
}

export default connect(mapStateToProps, actions)(EventItem)