import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { ModalHeaderPlain } from '../common/ModalHeader'
import { ImageModal, EmptyCard, CardSection, Map } from '../common'

class ModalGetTicket extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View>
                    <ModalHeaderPlain headerText={"TICKET"} />
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
