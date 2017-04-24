import React, { Component } from 'react'
import { View, Animated, TouchableOpacity, Text } from 'react-native'
import AllNewsComponent from './AllNewsComponent'

export default class Test extends Component {

    constructor(props) {
        super(props)

        this.state = {
            _rowOpacity : new Animated.Value(1),
            searchHeaderOpacity : new Animated.Value(0)
        }

        this.hideHeader = this.hideHeader.bind(this)
    }

    _defaultTransition  = 250


    hideHeader() {
        Animated.timing(this.state._rowOpacity, {
           toValue  : 0,
           duration : this._defaultTransition
       }).start()

       Animated.timing(this.state.searchHeaderOpacity, {
           toValue  : 1,
           duration : this._defaultTransition
       }).start()
    }

    showHeader() {
        Animated.timing(this.state._rowOpacity, {
           toValue  : 1,
           duration : this._defaultTransition
       }).start()

        Animated.timing(this.state.searchHeaderOpacity, {
           toValue  : 0,
           duration : this._defaultTransition
       }).start()
    }

    render() {
        // const leftHeader = this.state.index == 0 ? { flex: 1 } : { width: 0 }
        // const rightHeader = this.state.index == 1 ? { flex: 1 } : { width: 0 }

        return (
            <View style={{marginTop: 20, flex: 1}}>
                <View style={{flexDirection: 'row'}}>
                    <Animated.View  style={[styles.header, {height: 50, backgroundColor: 'blue'}, {opacity: this.state._rowOpacity}]}>
                        <TouchableOpacity onPress={() => this.hideHeader()}>
                            <Text>Hide</Text>
                        </TouchableOpacity>
                    </Animated.View >
                    <Animated.View  style={[styles.header, {height: 50, backgroundColor: 'red'}, {opacity: this.state.searchHeaderOpacity}]}>
                        <TouchableOpacity onPress={() => this.showHeader()}>
                            <Text>Show</Text>
                        </TouchableOpacity>
                    </Animated.View >
                </View>
            </View>
        )
    }
}

const styles = {
   header: {
     position: 'absolute',
     top: 0,
     bottom: 0,
     left: 0,
     right: 0,
   },
 }
