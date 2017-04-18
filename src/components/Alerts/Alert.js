import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import * as actions from '../../actions'

class Alert extends Component {

    onRemoveAlert() {
        this.props.removeAlert(this.props.alert.id)
    }

    render() {
        return (
            <TouchableOpacity onPress={this.onRemoveAlert.bind(this)}>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        {this.props.alert.text}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 16,
        backgroundColor: '#f2dede',
        borderColor: '#ebccd1',
        borderTopWidth: 2
    },
    text: {
        color: '#a94442'
    }
}

export default connect(null, actions)(Alert)