import React, { Component } from 'react'
import { 
    View, 
    Text, 
    TouchableOpacity, 
    ListView, 
    ScrollView,
    WebView
} from 'react-native'
import { connect } from 'react-redux'
import HTMLView from 'react-native-htmlview'
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
                    <ModalHeader headerText={modalContent.news_title} favorite_Id={modalContent._id} />
                </View>
                <ScrollView>
                    <ImageModal img={modalContent.assets.picture} />
                    <View style={{borderBottomWidth: 1, borderColor: '#ddd',}}>
                        <Text style={headerTextStyle}>{modalContent.news_title}</Text>
                    </View>
                    <View style={styles.webView}>
                        <HTMLView
                            value={modalContent.news_text}
                            renderNode={renderNode}
                            stylesheet={styles.webViewText}
                        />
                    </View>
                    <CardSection />
                    <Text style={{ color: '#ddd', marginTop: 10}}>Category: {modalContent.category}</Text>
                </ScrollView>
            </View>
        )
    }
}

function renderNode(node, index, siblings, parent, defaultRenderer) {
  if (node.name == 'iframe') {
    const a = node.attribs
    const iframeHtml = `<iframe frameborder="0" style="overflow:hidden;" seamless="seamless" scrolling="no" src="${a.src}"></iframe>`
    return (
      <View key={index} style={{width: Number(a.width), height: 160}}>
        <WebView scrollEnabled={false} source={{html: iframeHtml}} />
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

