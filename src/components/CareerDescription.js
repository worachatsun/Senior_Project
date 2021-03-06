import React, { Component } from 'react'
import { View, WebView, ScrollView, Text, TouchableOpacity, Image, AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'
import HTMLView from 'react-native-htmlview'
import { 
    ModalHeaderPlain, 
    WebViewRichText, 
    CardSection, 
    ImageModal, 
    EmptyCard 
} from '../common'

class CareerDescription extends Component {
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
                <ModalHeaderPlain color={this.state.color} headerText={this.props.career.career_name} backSign={'arrow'}/>
                <ScrollView style={{flex: 1}}>
                    <ImageModal img={this.props.career.picture} />
                    <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 10}}>
                        <View style={{margin: 10}}>
                            <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold'}}>{this.props.career.company}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <Image style={styles.iconStyle} source={require('../env/images/capacity.png')} /> 
                        <Text>
                            {this.props.career.capacity}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <Image style={styles.iconStyle} source={require('../env/images/salary.png')} /> 
                        <Text>
                            {this.props.career.salary}
                        </Text>
                    </View>
                    <CardSection />
                    <View style={styles.HTML_view_style}>
                        <WebViewRichText webText={this.props.career.career_description} />
                    </View>
                    <CardSection />
                    <View style={styles.HTML_view_style}>
                        <Text style={styles.textHeadSection}>Qualification</Text>
                        <WebViewRichText webText={this.props.career.qualification} />
                    </View>
                    <CardSection />
                    <Text style={{color: '#ddd', marginLeft: 10}}>{this.props.career.created_by.name}</Text>
                </ScrollView>
                <TouchableOpacity onPress={() => Actions.modalCareer(this.props.career)}>
                    <View style={[styles.footerBar, {backgroundColor: this.state.color||'#FF7F11'}]}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>JOB POSITION</Text>
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
    },
    textHeadSection: {
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 25
    },
    iconStyle: {
        width: 30,
        height: 30,
        marginLeft: 25,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5
    }
}

export default CareerDescription