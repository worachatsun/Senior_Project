import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ListView, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Card, ImageModal, CardSection } from './index'
import ModalHeader from './ModalHeader'

class ModalContent extends Component {
    componentWillMount(){
        const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
        })
    
        this.dataSource = ds.cloneWithRows(this.props.newsList)
    }
    
    renderRow(news) {
        return (
            <View>
                <Text>{news.title}</Text>
                <CardSection />
            </View>
        )
    }


    render () {
        console.log(this.props)
        return (
            <View style={{flex: 1}}>
                <View>
                    <ModalHeader headerText={'SIT NEWS'} />
                </View>
                <ScrollView>
                    <ImageModal />
                    <ListView
                        dataSource={this.dataSource}
                        renderRow={this.renderRow}
                    />
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { newsList: state.newsList }
}

export default connect(mapStateToProps)( ModalContent )

