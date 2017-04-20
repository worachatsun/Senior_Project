import React, { Component } from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity, ListView } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Actions } from 'react-native-router-flux'
import { Header, BigCard } from '../common'
import DonationItem from './DonationItem'

class DonationPage extends Component{
    
    componentWillMount() {
        Actions.refresh({key: 'drawer', open: false})
        this.props.fetchDonation().then(() => {
            
        })
    }

    renderRow(donation, sectionID, rowID) {
        return <DonationItem donation={donation} rowID={rowID}/>
    }


    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#353535'}}>
                <Header headerText={'Donation'}/>
                <ScrollView>
                    <ListView
                        dataSource={ds.cloneWithRows(this.props.fetchDonate)}
                        renderRow={this.renderRow.bind(this)}
                        enableEmptySections={true}
                    />
                </ScrollView>
            </View>
        )
    }
}

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1!==r2})

const mapStateToProps = state => {
    return { 
        fetchDonate: state.donation.fetchDonate
    }
}


export default connect(mapStateToProps, actions)(DonationPage)