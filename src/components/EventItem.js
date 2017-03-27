import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as actions from '../actions'
import { HalfScreenCard } from '../common'

class EventItem extends Component {

    updateContentModal() {
        const { event } = this.props
        this.props.modalContent(event)
    }

    render () {
        return (
            <View style={{height: 235}}>
                <TouchableOpacity onPress={() => { 
                    this.props.selectEvent(this.props.event._id)
                    this.updateContentModal()           
                    return Actions.modalEvent()
                }}>
                    <HalfScreenCard content={this.props.event}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { selectNewsId: state.selectedNewsId }
}

export default connect(mapStateToProps, actions)(EventItem)