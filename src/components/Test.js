import React, { Component } from 'react'
import { View, Animated, TouchableOpacity, Text, ListView } from 'react-native'
import { Header } from '../common'
import AllNewsComponent from './AllNewsComponent'
import DropDown, {
  Select,
  Option,
  OptionList,
} from 'react-native-selectme'

export default class Test extends Component {
    constructor(props) {
    super(props);
 
    this.state = {
      canada: 1
    };
  }

    _getOptionList() {
    return this.refs['OPTIONLIST'];
  }
 
  
  _canada(province) {

  this.setState({
      ...this.state,
      canada: province
    });
  }

    render() {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Select
                width={40}
                height={30}
                style={{backgroundColor: '#ff7f11', borderRadius: 5, borderWidth: 0, justifyContent: 'center'}}
                ref="SELECT1"
                optionListRef={this._getOptionList.bind(this)}
                defaultValue={0}
                onSelect={this._canada.bind(this)}>
                <Option key={1} value={1}>1</Option>
                <Option key={2} value={0}>0</Option>
            </Select>
    
            <Text>Selected Canada's province: {this.state.canada}</Text>
            
            <OptionList ref="OPTIONLIST"/>
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
