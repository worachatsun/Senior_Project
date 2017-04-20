import React, { Component } from 'react'
import { View, Text, ScrollView, ListView } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Actions } from 'react-native-router-flux'
import { Header, Card } from '../common'
import CareerItem from '../components/CareerItem'

class CareerPage extends Component {

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
    }

    componentWillMount() {
        Actions.refresh({key: 'drawer', open: false})
        this.setState({
            loading: true
        })
        this.props.fetchCareer(this.state.offset, this.state.limit).then(() => {
            this.setState({
                loading: true
            })
        })
    }

    componentWillReceiveProps(nextProps){
        const datas = this.state.datas.concat(nextProps.fetchCareerItem)
        this.setState({
            datas,
            dataSource: this.state.dataSource.cloneWithRows(datas),
            offset: this.state.offset + 20
        })
    }

    renderRow(career, sectionID, rowID) {
        return <CareerItem career={career} rowID={rowID}/>
    }

    render() {
        const { limit, dataSource } = this.state
        return (
            <View style={{flex: 1, marginBottom: 50}}>
                <Header headerText={'Career'} style={{marginBottom: 12}}/>
                <ListView
                    contentContainerStyle={{ flexDirection: 'column', flexWrap: 'wrap' }}
                    initialListSize={limit}
                    dataSource={dataSource}
                    renderRow={this.renderRow.bind(this)}
                    enableEmptySections={true}
                    onEndReached={() => this.props.fetchCareer(this.state.offset, this.state.limit)}
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { 
        fetchCareerItem: state.career.fetchCareer
    }
}


export default connect(mapStateToProps, actions)(CareerPage)