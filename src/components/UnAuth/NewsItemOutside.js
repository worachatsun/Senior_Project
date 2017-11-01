import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as actions from '../../actions'
import { connect } from 'react-redux' 
import { Card, BigCard } from '../../common'

class NewsItemOutside extends Component {

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
        const selectCard = this.props.rowID == 0 ? <BigCard description={this.props.news.news_title} count_favorite={this.props.news.news_favorite.length} img={this.props.news.picture} /> : <Card color={this.state.color} description={this.props.news.news_title} count_favorite={this.props.news.news_favorite.length} img={this.props.news.picture} />
        return (
            <TouchableOpacity onPress={() => {
                    this.props.selectNews(this.props.news._id)
                    this.updateContentModal()            
                    return Actions.modal({outside: true})}
                }>
                {selectCard}
            </TouchableOpacity>
        )
    }
}

NewsItemOutside.propTypes = {
  ableBigCard: PropTypes.bool,
}

NewsItemOutside.defaultProps = {
  ableBigCard: false,
}

export default connect(null, actions)(NewsItemOutside)