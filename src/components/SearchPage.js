import React, { Component } from 'react'
import { View, Text, TextInput, ListView } from 'react-native'
import { BottomNavBar, Header } from '../common'
import { connect } from 'react-redux'
import * as actions from '../actions'
import NewsItem from './NewsItem'

class SearchPage extends Component {
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
        this.props.fetchAllNews()
    }

    setSearchText(searchText) {
        this.setState({searchText})
        let filteredData = this.filterNotes(searchText, this.props.all_news)
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(filteredData)
        })
    }

    filterNotes(searchText, notes) {
        let text = searchText.toLowerCase()

        return notes.filter((n) => {
            let note = n.news_title.toLowerCase();
            return note.search(text) !== -1;
        })
    }

    renderRow(news, sectionID, rowID) {
        return <NewsItem ableBigCard={true} news={news} rowID={rowID}/>
    }

    render () {
        console.log(this.props)
        return (
            <View style={styles.container}>
                <Header headerText={'Search'} rightIcon={'no'}/>
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
                    style={{marginTop: 10, marginBottom: 50}}
                />
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#FEFEFF'
    },
    searchBar: {
        height: 50,
        borderWidth: 9,
        paddingLeft: 30,
        fontSize: 18,
        borderColor: '#E4E4E4',
    }
}

const mapStateToProps = state => {
    return { all_news: state.newsList.all_news }
}

export default connect(mapStateToProps, actions)(SearchPage)