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
        const selectCard = this.props.rowID == 0 ? <BigCard description={this.props.donation.project_name} img={this.props.donation.assets.picture} /> : <Card description={this.props.donation.project_name} img={this.props.donation.picture} />
        return (
             <TouchableOpacity onPress={() => {
                    //this.props.selectNews(this.props.news._id)
                    this.updateContentModal()
                    //this.props.checkFavoriteNews(this.props.news._id)              
                    return Actions.donationDes(this.props.donation)}
                }>
                {selectCard}
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = state => {
    return { selectNewsId: state.selectedNewsId }
}

export default connect(mapStateToProps, actions)(DonationItem)