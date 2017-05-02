import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Actions } from 'react-native-router-flux'
import { Card } from '../common'

class CareerItem extends Component {
    updateContentModal() {
        const { donation } = this.props
        this.props.modalContent(donation)
    }

    render () {
        return (
             <TouchableOpacity onPress={() => {         
                    return Actions.careerDes({career: this.props.career})
                }}>
                <Card description={this.props.career.career_name} capacity={this.props.career.capacity} img={this.props.career.assets.picture} />
            </TouchableOpacity>
        )
    }
}

export default connect(null, actions)(CareerItem)