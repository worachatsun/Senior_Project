import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { ModalHeaderPlain } from '../common/ModalHeader'
import { 
    ImageModal, 
    EmptyCard, 
    CardSection, 
    // Map,
    WebViewRichText,
    ImageCard,
    ModalHeaderOpacity
} from '../common'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class ModalContentEvent extends Component {

    dateFormat = date => {
        const arrDate = (new Date(date)).toUTCString().split(" ")
        return `${arrDate[1]} ${arrDate[2]} ${arrDate[3]}`
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{flex: 1}}>
                        <ImageCard height={400} img={this.props.modalContent.picture} description={this.props.modalContent.event_name} />
                        <ModalHeaderOpacity/>
                    </View>
                    <View style={{margin: 10}}>
                        <View style={{marginBottom: 5, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: '#ddd', fontSize: 18, fontWeight: 'bold'}}>Info</Text>
                        </View>
                        <CardSection />
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                            <Icon style={{color: 'black'}} name={"calendar-clock"} size={20}/>
                            <Text style={{marginLeft: 5}}>{this.dateFormat(this.props.modalContent.event_date_begin)} - {this.dateFormat(this.props.modalContent.event_date_end)}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                            <Icon style={{color: 'black'}} name={"map-marker"} size={20}/>
                            <Text numberOfLines={2} style={{marginLeft: 5}}>{this.props.modalContent.location}</Text>
                        </View>
                    </View>
                    {/*<Map />*/}
                    <View style={{margin: 10}}>
                        <View style={{marginBottom: 5, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: '#ddd', fontSize: 18, fontWeight: 'bold'}}>Detail</Text>
                        </View>
                        <CardSection />
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                            <WebViewRichText webText={this.props.modalContent.event_description} />
                        </View>
                    </View>
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
