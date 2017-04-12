import React, { Component } from 'react'
import { View, WebView, ScrollView } from 'react-native'
import HTMLView from 'react-native-htmlview'
import { Header, WebViewRichText } from '../common'

class DonationDescription extends Component {

    
    render() {
        console.log(this.props)
        return (
            <View style={{flex: 1}}>
                <Header headerText={'Donation Description'} />
                <View style={styles.HTML_view_style}>
                    <ScrollView>
                        <WebViewRichText webText={this.props.project_description} />
                    </ScrollView>
                </View>
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