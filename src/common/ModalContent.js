import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ListView, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Card, ImageModal, CardSection } from './index'
import ModalHeader from './ModalHeader'

class ModalContent extends Component {
    componentDidMount(){
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
        const { modalContent } = this.props
        const { headerTextStyle, contentTextStyle, viewStyle } = styles
        return (
            <View style={{flex: 1}}>
                <View>
                    <ModalHeader headerText={modalContent.news_title} />
                </View>
                <ScrollView>
                    <ImageModal img={modalContent.assets.picture} />
                    <View style={{borderBottomWidth: 1, borderColor: '#ddd',}}>
                        <Text style={headerTextStyle}>{modalContent.news_title}</Text>
                    </View>
                    <View style={viewStyle}>
                        <Text style={contentTextStyle}>     {modalContent.news_text}</Text>
                    </View>
                    <CardSection />
                    <Text style={{ color: '#ddd', marginTop: 10}}>Category: {modalContent.category}</Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = {
    headerTextStyle: {
        margin: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25
    },
    contentTextStyle: {
        margin: 20,
        textAlign: 'center'
    },
    viewStyle: {
        alignItems: 'center'
    }
}

const mapStateToProps = state => {
    return { newsList: state.newsList, modalContent: state.modalContent }
}

export default connect(mapStateToProps)( ModalContent )

