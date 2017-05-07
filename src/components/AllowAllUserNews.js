import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import NewsPageOutside from './UnAuth/NewsPageOutside'
import { Actions } from 'react-native-router-flux'

class AllowAllUserNews extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <NewsPageOutside fromOutside={true} />
                <TouchableOpacity onPress={() => Actions.login()}>
                        <View style={styles.footerBar}>
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
        backgroundColor: '#FF7F11', 
        position: 'relative', 
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default AllowAllUserNews