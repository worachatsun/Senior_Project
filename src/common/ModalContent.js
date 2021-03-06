import React, { Component } from 'react'
import { 
    View, 
    Text, 
    TouchableOpacity, 
    ListView, 
    ScrollView,
    AsyncStorage
} from 'react-native'
import { connect } from 'react-redux'
import { Card, ImageModal, CardSection, ModalHeaderPlain } from './index'
import ModalHeader from './ModalHeader'
import { WebViewRichText } from './WebViewRichText'

class ModalContent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: '#FF7F11'
        }

        AsyncStorage.getItem('color').then(data => {
            this.setState({color: data})
        })
    }

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
        const headerFrom = !this.props.outside ? <ModalHeader color={this.state.color} headerText={modalContent.news_title} favorite_Id={modalContent._id} /> : <ModalHeaderPlain color={this.state.color} headerText={modalContent.news_title} />
        return (
            <View style={{flex: 1}}>
                <View>
                    {headerFrom}
                </View>
                <ScrollView>
                    <ImageModal img={modalContent.picture} />
                    <View style={{borderBottomWidth: 1, borderColor: '#ddd',}}>
                        <Text style={headerTextStyle}>{modalContent.news_title}</Text>
                    </View>
                    <WebViewRichText webText={modalContent.news_text} />
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
    },
    webView: {
        margin: 12,
    },
    webViewText: {
        textAlign: 'center',
    }
}

const mapStateToProps = state => {
    return { newsList: state.newsList, modalContent: state.modalContent }
}

export default connect(mapStateToProps)( ModalContent )

