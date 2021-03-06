import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { View, Text, ListView, RefreshControl } from 'react-native'
import NewsItemOutside from './NewsItemOutside'

class AllNewsFaculty extends Component {
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
            refreshing: false,
            loading: false
        }

        this.fetchEndReached = this.fetchEndReached.bind(this)
    }

    componentWillMount() {
        this.setState({
            loading: true
        })
        this.props.fetchNewsFaculty('Event', this.state.offset, this.state.limit).then(() => {
            this.setState({
                loading: false
            })
        })
    }

    fetchEndReached() {
        setTimeout(() => {
            this.props.fetchNewsFaculty('Event', this.state.offset, this.state.limit)
        }, 1500)
    }

    _onRefresh() {
        this.setState({refreshing: true, datas: []});
        this.props.fetchNewsFaculty('Event', 0, 20).then(() => {
            this.setState({refreshing: false});
        });
    }

     componentWillReceiveProps(nextProps){
        const datas = this.state.datas.concat(nextProps.newsFaculty)
        this.setState({
            datas,
            dataSource: this.state.dataSource.cloneWithRows(datas),
            offset: this.state.offset + 20
        })
    }

    renderRow(news, sectionID, rowID) {
        return <NewsItemOutside outside={true} news={news} rowID={rowID}/>
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
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                    />
                }
            />
        )
    }
}

const mapStateToProps = state => {
    return { newsFaculty: state.newsList.news_faculty }
}

export default connect(mapStateToProps, actions)(AllNewsFaculty)