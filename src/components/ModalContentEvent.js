import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { ModalHeaderPlain } from '../common/ModalHeader'
import { 
    ImageModal, 
    EmptyCard, 
    CardSection, 
    Map, 
    WebViewRichText,
    ImageCard
} from '../common'

class ModalContentEvent extends Component {

    dateFormat = date => {
        const arrDate = (new Date(date)).toUTCString().split(" ")
        return `${arrDate[1]} ${arrDate[2]} ${arrDate[3]}`
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <ModalHeaderPlain style={{backgroundColor: 'rgba(0,0,0,0)'}} headerText={this.props.modalContent.event_name} />
                </View>
                <ScrollView>
                    <View style={{flex: 1}}>
                        <ImageCard img={this.props.modalContent.assets.picture[0]} description={this.props.modalContent.event_name} />
                    </View>
                    <EmptyCard>
                        <View style={{margin: 5, justifyContent: 'center', alignItems: 'center'}}>
                            <View>
                                <Text style={{textAlign: 'center'}}>{this.props.modalContent.event_name}</Text>
                            </View>
                            <CardSection />
                            <View style={{flexDirection: 'row',}}>
                                <Text>{this.dateFormat(this.props.modalContent.event_date_begin)} - {this.dateFormat(this.props.modalContent.event_date_end)}</Text>
                            </View>
                            <View style={{flexDirection: 'row',}}>
                                <Text numberOfLines={2}>{this.props.modalContent.location}</Text>
                            </View>
                        </View>
                    </EmptyCard>
                    <Map />
                    <EmptyCard>
                        <WebViewRichText webText={this.props.modalContent.event_description} />
                    </EmptyCard>
                </ScrollView>
                <TouchableOpacity onPress={() => Actions.modalTicket({modalEvent: this.props.modalContent})}>
                    <View style={styles.footerBar}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>JOIN EVENT</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1
    },
    footerBar: {
        justifyContent: 'flex-end', 
        backgroundColor: '#FF7F11', 
        position: 'relative', 
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

const mapStateToProps = state => {
    return { modalContent: state.modalContent }
}

export default connect(mapStateToProps)( ModalContentEvent )
