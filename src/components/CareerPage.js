import React, { Component } from 'react'
import { View, Text, ScrollView, ListView } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Actions } from 'react-native-router-flux'
import { Header, Card } from '../common'
import CareerItem from '../components/CareerItem'

class CareerPage extends Component {

    componentWillMount() {
        Actions.refresh({key: 'drawer', open: false})
        this.props.fetchCareer()
    }

    renderRow(career, sectionID, rowID) {
        return <CareerItem career={career} rowID={rowID}/>
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header headerText={'Career'} style={{marginBottom: 12}}/>
                <ScrollView style={{flex: 1}}>
                    <ListView
                        dataSource={ds.cloneWithRows(this.props.fetchCareerItem)}
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
        fetchCareerItem: state.career.fetchCareer
    }
}


export default connect(mapStateToProps, actions)(CareerPage)