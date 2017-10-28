import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, ListView, AsyncStorage } from 'react-native'
import * as actions from '../actions'
import NewsItem from './NewsItem'
import { ModalHeaderPlain } from '../common'

class NewsFavorite extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: '#FF7F11'
        }

        AsyncStorage.getItem('color').then(data => {
            this.setState({color: data})
        })
    }

    componentWillMount() {
        this.props.fetchFavoriteNews(this.props.profile._id)
    }

    renderRow(news) {
        return <NewsItem news={news}/>
    }

    render () {
        return (
            <View style={{ flex: 1 }}>
                <ModalHeaderPlain color={this.state.color} headerText={'Favorite News'} style={{marginBottom: 10}} backSign={'arrow'} />
                <ListView
                    dataSource={this.props.favorite_data}
                    renderRow={this.renderRow.bind(this)}
                    enableEmptySections={true}
                />
            </View>
        )
    }
}

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1!==r2})

const mapStateToProps = state => {
    return {  
        profile: state.auth.user_detail.user,
        user: state.user,
        favorite_data: ds.cloneWithRows(state.user.fetch_favorite_news)
    }
}

export default connect(mapStateToProps, actions)(NewsFavorite)