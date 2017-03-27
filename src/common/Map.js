import React, { Component } from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'

class Map extends Component {
    render () {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                    latitude: 13.6520976,
                    longitude: 100.493794,
                    latitudeDelta: 0.0042,
                    longitudeDelta: 0.0042,
                    }}
                />
            </View>
        )
    }
}

const styles = {
    container: {
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 200
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
}

export { Map }