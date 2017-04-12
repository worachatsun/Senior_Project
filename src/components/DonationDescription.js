import React, { Component } from 'react'
import { View, WebView, ScrollView, Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import HTMLView from 'react-native-htmlview'
import { ModalHeaderPlain, WebViewRichText, CardSection, ImageModal } from '../common'

class DonationDescription extends Component {


    render() {
        return (
            <View style={{flex: 1}}>
                <ModalHeaderPlain headerText={this.props.donation.project_name} backSign={'arrow'}/>
                <ScrollView style={{flex: 1}}>
                    <ImageModal img={this.props.donation.assets.picture} />
                    <View style={styles.HTML_view_style}>
                        <WebViewRichText webText={this.props.donation.project_description} />
                    </View>
                    <View style={{ margin: 10 }}>
                        <CardSection />
                        <Text style={{color: '#ddd', marginTop: 5}}>{this.props.donation.created_by}</Text>
                    </View>
                </ScrollView>
                <TouchableOpacity onPress={() => Actions.modalDonate(this.props.donation)}>
                    <View style={styles.footerBar}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>DONATE</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = {
    HTML_view_style: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    footerBar: {
        justifyContent: 'flex-end', 
        backgroundColor: '#FF7F11', 
        position: 'relative', 
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default DonationDescription