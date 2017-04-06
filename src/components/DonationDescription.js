import React, { Component } from 'react'
import { View, WebView, ScrollView } from 'react-native'
import HTMLView from 'react-native-htmlview'
import { Header } from '../common'


class DonationDescription extends Component {
    render() {
        const htmlContent = `<p style="text-align: center;"><span class="fr-video fr-fvc fr-dvb fr-draggable" contenteditable="false" draggable="true"><iframe width="640" height="360" src="https://www.youtube.com/embed/kNxnwgzpCwE?wmode=opaque" frameborder="0" allowfullscreen=""></iframe></span></p>
<p>Froala Editor is a lightweight WYSIWYG HTML Editor written in Javascript that enables rich text editing capabilities for your applications.</p>
<p>Its complete <a href="/wysiwyg-editor/docs" title="Documentation">documentation</a>, specially designed <a href="#frameworks" title="Frameworks">framework plugins</a> and <a href="/wysiwyg-editor/examples" title="Examples">tons of examples</a> make it easy to integrate. We&#39;re continuously working to add in new features and take the Javascript web WYSIWYG editing capabilities beyond its current limits.</p>
`

        return (
            <View>
                <Header headerText={'Donation Description'} />
                <ScrollView>
                    <HTMLView
                        value={htmlContent}
                        renderNode={renderNode}
                    />
                </ScrollView>
            </View>
        )
    }
}

function renderNode(node, index, siblings, parent, defaultRenderer) {
  if (node.name == 'iframe') {
    const a = node.attribs
    const iframeHtml = `<iframe frameborder="0" scrolling="no" src="${a.src}"></iframe>`
    return (
      <View key={index} style={{width: Number(a.width), height: 170}}>
        <WebView source={{html: iframeHtml}} />
      </View>
    )
  }
}

const styles = {
    HTML_view_style: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    }
}

export default DonationDescription