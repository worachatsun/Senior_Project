import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { View, TouchableOpacity, AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as actions from '../actions'
import { Card, BigCard } from '../common'

class NewsItem extends Component {

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
        const { news } = this.props
        this.props.modalContent(news)
        this.props.countFavoriteNews(news._id)
    }

    render () {
        const selectCard = this.props.rowID == 0 ? <BigCard color={this.state.color} description={this.props.news.news_title} count_favorite={this.props.news.news_favorite.length} img={this.props.news.picture} /> : <Card color={this.state.color} description={this.props.news.news_title} count_favorite={this.props.news.news_favorite.length} img={this.props.news.picture} />
        if(this.props.ableBigCard){
            return (
                <TouchableOpacity onPress={() => {
                        this.props.selectNews(this.props.news._id)
                        this.updateContentModal()
                        this.props.checkFavoriteNews(this.props.news._id, this.props.user.profile._id)              
                        return Actions.modal()}
                    }>
                    <Card color={this.state.color} description={this.props.news.news_title} img={this.props.news.picture} />
                </TouchableOpacity>
            )
        }else{
            return (
                <TouchableOpacity onPress={() => {
                        this.props.selectNews(this.props.news._id)
                        this.updateContentModal()
                        this.props.checkFavoriteNews(this.props.news._id, this.props.profile.user._id)              
                        return Actions.modal()}
                    }>
                    {selectCard}
                </TouchableOpacity>
            )
        } 
    }
}

const mapStateToProps = state => {
    return { profile: state.auth.user_detail, selectNewsId: state.selectedNewsId }
}

NewsItem.propTypes = {
  ableBigCard: PropTypes.bool,
}

NewsItem.defaultProps = {
  ableBigCard: false,
}

export default connect(mapStateToProps, actions)(NewsItem)