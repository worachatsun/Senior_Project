import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { View, Text, ListView } from 'react-native'
import NewsItem from './NewsItem'

class AllNewsComponent extends Component {
    constructor(props) {
        super(props)

        const dataDs = new ListView.DataSource({
            rowHasChanged: () => (r1, r2) => r1.id !== r2.id
        })

        this.state = {
            dataSource: dataDs.cloneWithRows([]),
            datas: [],
            limit: 20,
            offset: 0,
            loading: false
        }

        this.fetchEndReached = this.fetchEndReached.bind(this)
    }

    componentWillMount() {
        this.setState({
            loading: true
        })
        this.props.fetchNews(this.state.offset, this.state.limit).then(() => {
            this.setState({
                loading: false
            })
        })
    }

    fetchEndReached() {
        setTimeout(() => {
            this.props.fetchNews(this.state.offset, this.state.limit)
        }, 1500)
    }

     componentWillReceiveProps(nextProps){
        const datas = this.state.datas.concat(nextProps.newsList)
        this.setState({
            datas,
            dataSource: this.state.dataSource.cloneWithRows(datas),
            offset: this.state.offset + 20
        })
    }

    renderRow(news, sectionID, rowID) {
        return <NewsItem news={news} rowID={rowID}/>
    }

    render() {
        const { limit, dataSource } = this.state
        return (
            <ListView
                contentContainerStyle={{ flexDirection: 'column', flexWrap: 'wrap' }}
                initialListSize={limit}
                dataSource={dataSource}
                renderRow={this.renderRow.bind(this)}
                enableEmptySections={true}
                onEndReached={this.fetchEndReached}
                onEndReachedThreshold={100}
            />
        )
    }
}

const mapStateToProps = state => {
    return { newsList: state.newsList.news }
}

export default connect(mapStateToProps, actions)(AllNewsComponent)