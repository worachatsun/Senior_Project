import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as actions from '../actions'
import { Card, BigCard } from '../common'

class DonationItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: '#FF7F11'
        }

        AsyncStorage.getItem('color').then(data => {
            this.setState({color: data})
        })
    }

    updateContentModal() {
        const { donation } = this.props
        this.props.modalContent(donation)
    }

    render () {
        const selectCard = this.props.rowID == 0 ? <BigCard color={this.state.color} description={this.props.donation.project_name} img={this.props.donation.picture} /> : <Card color={this.state.color} description={this.props.donation.project_name} img={this.props.donation.picture} />
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