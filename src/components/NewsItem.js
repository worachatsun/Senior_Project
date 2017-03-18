import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import * as actions from '../actions'
import { Card } from '../common'

class NewsItem extends Component {

    updateContentModal() {
        const { news } = this.props
        this.props.modalContent(news)
    }

    render () {
        return (
             <TouchableOpacity onPress={() => {
                    this.props.selectNews(this.props.news.id)
                    this.updateContentModal()                 
                    return this.props.closeModal({prop: 'isOpen', value: true})}
                }>
                <Card news={this.props.news} />
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = state => {
    return { selectNewsId: state.selectedNewsId }
}

export default connect(mapStateToProps, actions)(NewsItem)