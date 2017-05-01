import React, { Component } from 'react'
import { View, Text, TextInput, ListView } from 'react-native'
import { BottomNavBar, ModalHeaderPlain } from '../common'
import { connect } from 'react-redux'
import * as actions from '../actions'
import DonationItem from './DonationItem'

class SearchPageDonation extends Component {
    constructor(props) {
        super(props)

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

        this.state = {
            searchText: '',
            dataSource: ds.cloneWithRows([])
        }
        
        this.setSearchText = this.setSearchText.bind(this)
        this.filterNotes = this.filterNotes.bind(this)
        this.renderRow = this.renderRow.bind(this)
    }

    componentWillMount() {
        this.props.fetchAllDonation()
    }

    setSearchText(searchText) {
        this.setState({searchText})
        let filteredData = this.filterNotes(searchText, this.props.all_donate)
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(filteredData)
        })
    }

    filterNotes(searchText, notes) {
        let text = searchText.toLowerCase()

        return notes.filter((n) => {
            let note = n.project_name.toLowerCase();
            return note.search(text) !== -1;
        })
    }

    renderRow(donation, sectionID, rowID) {
        return <DonationItem donation={donation} rowID={rowID+1}/>
    }

    render () {
        if(this.state.searchText){
            return (
                <View style={styles.container}>
                    <ModalHeaderPlain headerText={'Search Donation'} backSign={true}/>
                    <View>
                        <TextInput
                            style={styles.searchBar}
                            value={this.state.searchText}
                            onChangeText={this.setSearchText}
                            placeholder={'Search'}
                            autoCorrect={false}
                        />
                    </View>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow}
                        enableEmptySections={true}
                        style={{marginTop: 10}}
                    />
                </View>
            )
        }else{
            return (
                <View style={styles.container}>
                    <ModalHeaderPlain headerText={'Search Donation'} backSign={true}/>
                    <View>
                        <TextInput
                            style={styles.searchBar}
                            value={this.state.searchText}
                            onChangeText={this.setSearchText}
                            placeholder={'Search'}
                            autoCorrect={false}
                        />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <Text style={{textAlign: 'center', color: '#333333', marginBottom: 10}}>Search for Title</Text>
                    </View>
                </View>
            )
        }
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#FEFEFF'
    },
    searchBar: {
        height: 50,
        borderWidth: 1,
        paddingLeft: 30,
        fontSize: 18,
        borderColor: '#E4E4E4',
    }
}

const mapStateToProps = state => {
    return { all_donate: state.donation.all_donate }
}

export default connect(mapStateToProps, actions)(SearchPageDonation)