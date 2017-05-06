import React, { Component } from 'react'
import { 
    View, 
    Text, 
    ScrollView,
    Button,
    TextInput,
    Dimensions,
    Picker,
    Image,
    Alert
} from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu'
import { Actions} from 'react-native-router-flux'
import { ModalHeaderPlain } from '../common/ModalHeader'
import { ImageModal, EmptyCard, CardSection, Map } from '../common'
import DropDown, {
  Select,
  Option,
  OptionList,
} from 'react-native-selectme'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'

class ModalGetTicket extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dropdownSelection: 1,
            coupon: null,
            ticket: 1,
            dropdown: 1
        }
    }

    _getOptionList() {
        return this.refs['OPTIONLIST'];
    }

    componentWillMount() {
        this.props.checkEventAvailable(this.props.modalEvent._id)
    }

    _dropdown(value) {

        this.setState({
            dropdown: value
        });
    }

    onButtonPress(coupon = null) {
        if(coupon){
            if(this.state.coupon){
                this.props.getTicket(this.props.profile._id, this.props.modalEvent._id, this.state.coupon)
            }else{
                Alert.alert(
                    'Coupon not found',
                    'Press insert coupon',
                )
            }
        }
    }

    onButtonPressWithoutCoupon() {
        this.props.getTicket(this.props.profile._id, this.props.modalEvent._id)
        Alert.alert(
            'Event Alert',
            'Joined success',
            {text: 'OK', onPress: Actions.EventJoined()}
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ModalHeaderPlain headerText={this.props.modalEvent.event_name}/>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10}}>Tickets</Text>
                        <View style={{borderBottomColor: '#ddd', borderBottomWidth: 1, margin: 10}} />
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{ fontWeight: 'bold', marginBottom: 3 }}>Seat</Text>
                            
                            <View style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
                                <Select
                                    width={40}
                                    height={30}
                                    style={{backgroundColor: '#ff7f11', borderRadius: 5, borderWidth: 0, justifyContent: 'center'}}
                                    ref="SELECT1"
                                    optionListRef={this._getOptionList.bind(this)}
                                    defaultValue={0}
                                    onSelect={this._dropdown.bind(this)}>
                                    <Option key={1} value={1}>1</Option>
                                    <Option key={2} value={0}>0</Option>
                                </Select>
                                <OptionList ref="OPTIONLIST"/>
                            </View>
                            <Text style={{marginTop: 10 }}>Price: Free</Text>
                            <View style={{borderBottomColor: '#ddd', borderBottomWidth: 1, margin: 10}} />
                        </View>

                        <View style={{ backgroundColor: '#FF7F11', borderRadius: 3, width: width-70, margin: 5, marginBottom: 10 }}>
                            <Button color="white" title={'Get Tickets'} onPress={() => this.onButtonPressWithoutCoupon()} disabled={!this.props.event.eventAvailable}/>
                        </View>
                    </View>
                    {/*<View tabLabel="Use Coupon" style={[{flex: 1}]}>
                        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10}}>Tickets</Text>
                            <Text style={{margin: 10}}>Do you have promotion code for this event ?</Text>
                            <View style={{borderBottomColor: '#ff7f11', borderBottomWidth: 1, margin: 10}}>
                                <TextInput placeholder={'Type in promotional code'} value={this.state.coupon} autoCorrect={false} onChangeText={coupon => {this.setState({coupon})}} keyboardType='default' style={{height: 40, marginBottom: 0, borderRadius: 4, width: width-70}}/>                        
                            </View>
                            <View style={{ borderColor: '#FF7F11', borderWidth: 1, width: width-70, borderRadius: 3, margin: 10 }}>
                                <Button color="#FF7F11" title={'Use Code'} onPress={() => this.onButtonPress('coupon')} />
                            </View>
                        </View>
                    </View>*/}
            </View>
        )
    }
}

const {height, width} = Dimensions.get('window')

const styles = {
    container: {
        flex: 1,
    },
    footerBar: {
        justifyContent: 'flex-end', 
        backgroundColor: '#FF7F11', 
        position: 'relative', 
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dropdown: {
        width: 40,
        borderColor: '#FF7F11',
        borderWidth: 1,
        padding: 5,
        backgroundColor: '#FF7F11',
        borderRadius: 5,
    },
    dropdownOptions: {
        flex: 1,
        marginTop: 30,
        borderColor: '#FF7F11',
        borderWidth: 2,
        width: 300,
        height: 200,
        backgroundColor: 'white',
        color: '#FF7F11'
    },
    tabbar: {
        height: 40, 
        alignItems: 'center', 
        paddingTop: 10,
        backgroundColor: "white",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        borderTopColor: '#FF7F11',
        borderTopWidth: 1
    }
}

const mapStateToProps = state => {
    return { profile: state.auth.user_detail.user, modalContent: state.modalContent, event: state.event }
}

export default connect(mapStateToProps, actions)( ModalGetTicket )
