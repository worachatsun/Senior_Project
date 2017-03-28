import React, { Component } from 'react'
import { 
    View, 
    Text, 
    ScrollView,
    Button,
    TextInput
} from 'react-native'
import { connect } from 'react-redux'
import { ModalHeaderPlain } from '../common/ModalHeader'
import { ImageModal, EmptyCard, CardSection, Map } from '../common'

class ModalGetTicket extends Component {
    render() {
        console.log(this.props.modalContent)
        return (
            <View style={styles.container}>
                <View>
                    <ModalHeaderPlain headerText={this.props.modalContent.event_name}/>
                </View>
                <View>
                    <EmptyCard>
                        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                            <Text>Tickets</Text>
                            <CardSection />
                            <Text>Do you have promotion code for this event ?</Text>
                        </View>
                        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 10}}/>                        
                        <View style={{ borderColor: '#FF7F11', borderWidth: 1, borderRadius: 3, margin: 10 }}>
                            <Button color="#FF7F11" title={'Use Code'} />
                        </View>
                    </EmptyCard>
                </View>
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

export default connect(mapStateToProps)( ModalGetTicket )
