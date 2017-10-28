import React, { Component } from 'react'
import { View, TouchableOpacity, Text, AppState, AsyncStorage } from 'react-native'
import NewsPageOutside from './UnAuth/NewsPageOutside'
import PushNotification from 'react-native-push-notification'
import { Actions } from 'react-native-router-flux'

class AllowAllUserNews extends Component {

    constructor(props) {
        super(props)

        this.state = {
            color: '#FF7F11'
        }

        AsyncStorage.getItem('color').then(data => {
            this.setState({color: data})
        })
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <NewsPageOutside fromOutside={true} />
                <TouchableOpacity onPress={() => Actions.login()}>
                        <View style={[styles.footerBar, {backgroundColor: this.state.color||'#FF7F11'}]}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>SIGN IN FOR MORE FUNCTION</Text>
                        </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = {
    footerBar: {
        justifyContent: 'flex-end',
        position: 'relative', 
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default AllowAllUserNews