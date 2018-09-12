import React, { Component } from 'react'
import { View, ScrollView, ListView, Dimensions, RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Actions } from 'react-native-router-flux'
import { Header, ImageModal } from '../common'
import EventItem from './EventItem'

class EventPage extends Component {

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

    _onRefresh() {
        this.setState({refreshing: true, datas: []})
        this.props.fetchEvent(0, 20).then(() => {
            this.setState({refreshing: false})
        })
    }

    componentWillMount() {
        this.setState({
            loading: true
        })
        this.props.fetchEvent(this.state.offset, this.state.limit).then(() => {
            this.setState({
                loading: false
            })
        })
    }

    componentWillReceiveProps(nextProps){
        const datas = this.state.datas.concat(nextProps.eventList)
        this.setState({
            datas,
            dataSource: this.state.dataSource.cloneWithRows(datas),
            offset: this.state.offset + 20
        })
    }

    renderRow(event, sectionID, rowID) {
        return <EventItem key={event._id} event={event} rowID={rowID}/>
    }

    fetchEndReached() {
        setTimeout(() => {
            this.props.fetchEvent(this.state.offset, this.state.limit)
        }, 1500)
    }

    render () {
        const { limit, dataSource } = this.state

        return (
            <View style={styles.containerStyle}>
                <Header headerText={'Event'} route_to={'event'} />
                <View style={{flex: 1}}>
                    <View>
                        {/*<View style={styles.halfCardContainer}>*/}
                            {/*<ListView
                                dataSource={this.dataSource.cloneWithRows(this.props.event.fetchEvent)}
                                renderRow={this.renderRow.bind(this)}
                                enableEmptySections={true}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={this.state.refreshing}
                                        onRefresh={this._onRefresh.bind(this)}
                                    />
                                }
                            />*/}

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
                            {/*<ListView contentContainerStyle={styles.halfCardContainer}
                                dataSource={this.dataSource.cloneWithRows(this.props.event.fetchEvent)}
                                renderRow={this.renderRow.bind(this)}
                                enableEmptySections={true}
                            />*/}
                        {/*</View>*/}
                    </View>
                </View>
            </View>
        )
    }
}

const {height, width} = Dimensions.get('window')

const styles = {
    containerStyle: {
        flex: 1
    },
    halfCardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
}

const mapStateToProps = state => {
    return { 
        eventList: state.event.fetchEvent
    }
}

export default connect(mapStateToProps, actions)(EventPage)