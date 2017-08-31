import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as actions from '../actions'
import { Card, BigCard } from '../common'

class DonationItem extends Component {

    updateContentModal() {
        const { donation } = this.props
        this.props.modalContent(donation)
    }

    render () {
        const selectCard = this.props.rowID == 0 ? <BigCard description={this.props.donation.project_name} img={this.props.donation.picture} /> : <Card description={this.props.donation.project_name} img={this.props.donation.picture} />
        return (
             <TouchableOpacity onPress={() => {
                    this.updateContentModal()            
                    return Actions.donationDes({donation: this.props.donation})}
            }>
                {selectCard}
            </TouchableOpacity>
        )
    }
}

export default connect(null, actions)(DonationItem)