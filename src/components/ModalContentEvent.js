import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ModalHeader from '../common/ModalHeader'
import { ImageModal, EmptyCard, CardSection, Map } from '../common'

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
                <Map />
            </View>
        )
    }
}

const styles = {
    
}

export default ModalContentEvent
