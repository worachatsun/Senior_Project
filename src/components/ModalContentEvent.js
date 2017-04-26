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
    WebViewRichText 
} from '../common'

class ModalContentEvent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <ModalHeaderPlain headerText={this.props.modalContent.event_name} />
                </View>
                <ScrollView>
                    <ImageModal img={this.props.modalContent.assets.picture[0]} />
                    <EmptyCard>
                        <View style={{margin: 5, justifyContent: 'center', alignItems: 'center'}}>
                            <View>
                                <Text style={{textAlign: 'center'}}>{this.props.modalContent.event_name}</Text>
                            </View>
                            <CardSection />
                            <View style={{flexDirection: 'row',}}>
                                <Text>{this.props.modalContent.event_date_begin}</Text>
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
        flex: 1,
        backgroundColor: '#353535'
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
