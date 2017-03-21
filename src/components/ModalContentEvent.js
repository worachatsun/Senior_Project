import React, { Component } from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps'
import ModalHeader from '../common/ModalHeader'
import { ImageModal, EmptyCard, CardSection } from '../common'

class ModalContentEvent extends Component {
    render () {
        return (
            <View>
                <View>
                    <ModalHeader headerText={'TEXT'} />
                </View>
                <ImageModal img={'https://twistedsifter.files.wordpress.com/2016/07/dulmen_bornste_waldweg.jpg'} />
                <EmptyCard>
                    <View>
                        <Text>sun</Text>
                    </View>
                    <CardSection />
                    <View style={{flexDirection: 'row',}}>
                        <Text>1 กุมภาพันธ์ 2558 | 6:00 PM</Text>
                    </View>
                    <View style={{flexDirection: 'row',}}>
                        <Text numberOfLines={2}>ณ สนามฟุตบอล มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</Text>
                    </View>
                </EmptyCard>
                <View style={styles.container}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                        }}
                    />
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
}

export default ModalContentEvent
