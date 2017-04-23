import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as actions from '../actions'
import { Card, BigCard } from '../common'

class NewsItem extends Component {

    updateContentModal() {
        const { news } = this.props
        this.props.modalContent(news)
    }

    render () {
        const selectCard = this.props.rowID == 0 ? <BigCard description={this.props.news.news_title} img={this.props.news.assets.picture} /> : <Card description={this.props.news.news_title} img={this.props.news.assets.picture} />
        if(this.props.ableBigCard){
            return (
                <TouchableOpacity onPress={() => {
                        this.props.selectNews(this.props.news._id)
                        this.updateContentModal()
                        this.props.checkFavoriteNews(this.props.news._id)              
                        return Actions.modal()}
                    }>
                    <Card description={this.props.news.news_title} img={this.props.news.assets.picture} />
                </TouchableOpacity>
            )
        }else{
            return (
                <TouchableOpacity onPress={() => {
                        this.props.selectNews(this.props.news._id)
                        this.updateContentModal()
                        this.props.checkFavoriteNews(this.props.news._id)              
                        return Actions.modal()}
                    }>
                    {selectCard}
                </TouchableOpacity>
            )
        } 
    }
}

const mapStateToProps = state => {
    return { selectNewsId: state.selectedNewsId }
}

NewsItem.propTypes = {
  ableBigCard: PropTypes.bool,
}

NewsItem.defaultProps = {
  ableBigCard: false,
}

export default connect(mapStateToProps, actions)(NewsItem)