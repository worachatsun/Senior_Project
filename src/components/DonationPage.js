import React, { Component } from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity, ListView, RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Actions } from 'react-native-router-flux'
import { Header, BigCard } from '../common'
import DonationItem from './DonationItem'

class DonationPage extends Component{

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
        //Actions.refresh({key: 'drawer', open: false})
        this.setState({
            loading: true
        })
        this.props.fetchDonation(this.state.offset, this.state.limit).then(() => {
            this.setState({
                loading: false
            })
        })
    }

    componentWillReceiveProps(nextProps){
        const datas = this.state.datas.concat(nextProps.fetchDonate)
        this.setState({
            datas,
            dataSource: this.state.dataSource.cloneWithRows(datas),
            offset: this.state.offset + 20
        })
    }

    _onRefresh() {
        this.setState({refreshing: true})
        this.props.fetchDonation(0, 20).then(() => {
            this.setState({refreshing: false})
        })
    }

    renderRow(donation, sectionID, rowID) {
        return <DonationItem donation={donation} rowID={rowID}/>
    }

    fetchEndReached() {
        setTimeout(() => {
            this.props.fetchDonation(this.state.offset, this.state.limit)
        }, 1500)
    }


    render() {
        const { limit, dataSource } = this.state
        return (
            <View style={{flex: 1, backgroundColor: '#353535'}}>
                <Header headerText={'Donation'}/>
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
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { 
        fetchDonate: state.donation.fetchDonate
    }
}


export default connect(mapStateToProps, actions)(DonationPage)