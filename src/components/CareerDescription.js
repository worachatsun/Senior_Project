import React, { Component } from 'react'
import { View, WebView, ScrollView, Text, TouchableOpacity } from 'react-native'
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


    render() {
        console.log(this.props.career)
        return (
            <View style={{flex: 1}}>
                <ModalHeaderPlain headerText={this.props.career.career_name} backSign={'arrow'}/>
                <ScrollView style={{flex: 1}}>
                    <ImageModal img={this.props.career.assets.picture} />
                    <EmptyCard style={{borderColor: "#FF7F11", borderWidth: 1}}>
                        <View style={{margin: 5, justifyContent: 'center', alignItems: 'center', paddingBottom: 10, paddingTop: 10}}>
                            <View>
                                <Text style={{textAlign: 'center'}}>Company: {this.props.career.company}</Text>
                            </View>
                            <CardSection />
                            <View>
                                <Text style={{textAlign: 'center'}}>Salary: {this.props.career.salary}</Text>
                            </View>
                            <CardSection />
                            <View>
                                <Text style={{textAlign: 'center'}}>Capacity: {this.props.career.capacity}</Text>
                            </View>
                        </View>
                    </EmptyCard>
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
                <TouchableOpacity onPress={() => Actions.modalDonate(this.props.career)}>
                    <View style={styles.footerBar}>
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
        backgroundColor: '#FF7F11', 
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
    }
}

export default CareerDescription