import React, { Component } from 'react'
import { View, Animated, TouchableOpacity, Text, ListView } from 'react-native'
import { Header } from '../common'
import AllNewsComponent from './AllNewsComponent'
import { ImageCard } from '../common'

export default class Test extends Component {
    render() {
      return (
        <View style={{flex: 1}}>
          <ImageCard img={"https://pbs.twimg.com/profile_images/473506797462896640/_M0JJ0v8.png"}/>
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
