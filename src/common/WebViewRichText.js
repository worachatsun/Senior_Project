import React, { Component } from 'react'
import { 
    View,
    WebView
} from 'react-native'
import HTMLView from 'react-native-htmlview'

class WebViewRichText extends Component {
    render() {
        return (
            <View style={styles.webView}>
                <HTMLView
                    value={this.props.webText}
                    renderNode={renderNode}
                    stylesheet={styles.webViewText}
                />
            </View>
        )
    }
}

function renderNode(node, index, siblings, parent, defaultRenderer) {
  if (node.name == 'iframe') {
    const a = node.attribs
    const iframeHtml = `<iframe frameborder="0" style="overflow:hidden;" seamless="seamless" scrolling="no" src="${a.src}"></iframe>`
    return (
      <View key={index} style={{width: 278, height: 160}}>
        <WebView scrollEnabled={false} source={{html: iframeHtml}} />
      </View>
    )
  }
}

const styles = {
    webView: {
        margin: 12,
    },
    webViewText: {
        textAlign: 'center',
    }
}


export { WebViewRichText }