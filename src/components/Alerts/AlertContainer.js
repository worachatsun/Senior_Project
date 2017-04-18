import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import Alert from './Alert'

class AlertContainer extends Component {

    render() {
        let renderAlerts = () => {
            return this.props.alerts.map(alert => {
                return (
                    <Alert alert={alert} key={alert.id} />
                )
            })
        }
        return (
            <View style={styles.container}>
                {renderAlerts()}
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    }
}

const mapStateToProps = state => {
    return {
        alerts: state.alerts
    }
}

export default connect(mapStateToProps)(AlertContainer)