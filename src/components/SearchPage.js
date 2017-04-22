import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { BottomNavBar, Header } from '../common'

class SearchPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchText: ''
        }
        
        this.setSearchText = this.setSearchText.bind(this)
        this.filterNotes = this.filterNotes.bind(this)
    }

    setSearchText(searchText) {
        this.setState({searchText})
        let filteredData = this.filterNotes(searchText, a)
        console.log(filteredData)
    }

    filterNotes(searchText, notes) {
        let text = searchText.toLowerCase()

        return notes.filter((n) => {
            let note = n.toLowerCase();
            return note.search(text) !== -1;
        })
    }

    render () {
        return (
            <View style={styles.container}>
                <Header headerText={'Search'} />
                <TextInput
                    style={styles.searchBar}
                    value={this.state.searchText}
                    //onChange={this.setSearchText.bind(this)}
                    onChangeText={this.setSearchText}
                    placeholder={'Search'} />
            </View>
        )
    }
}

const a = [
    "asd",
    "asff",
    "zxcz",
    "x",
    "qweq",
    "qwasw"
]

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
        borderColor: '#E4E4E4'
    }
}

export default SearchPage