import React, { Component } from 'react'
import { View, WebView, ScrollView, Text, TouchableOpacity, AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'
import HTMLView from 'react-native-htmlview'
import { ModalHeaderPlain, WebViewRichText, CardSection, ImageModal } from '../common'

class DonationDescription extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: '#FF7F11'
        }

        AsyncStorage.getItem('color').then(data => {
            this.setState({color: data})
        })
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ModalHeaderPlain color={this.state.color} headerText={this.props.donation.project_name} backSign={'arrow'}/>
                <ScrollView style={{flex: 1}}>
                    <ImageModal img={this.props.donation.picture} />
                    <View style={styles.HTML_view_style}>
                        <WebViewRichText webText={this.props.donation.project_description} />
                    </View>
                    <View style={{ margin: 10 }}>
                        <CardSection />
                        <Text style={{color: '#ddd', marginTop: 5}}>{this.props.donation.created_by}</Text>
                    </View>
                </ScrollView>
                <TouchableOpacity onPress={() => Actions.modalDonate(this.props.donation)}>
                    <View style={[styles.footerBar, {backgroundColor: this.state.color||'#FF7F11'}]}>
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
        position: 'relative', 
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default DonationDescription