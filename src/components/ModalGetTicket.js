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
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu'
import { Actions} from 'react-native-router-flux'
import { ModalHeaderPlain } from '../common/ModalHeader'
import { ImageModal, EmptyCard, CardSection, Map } from '../common'

class ModalGetTicket extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dropdownSelection: 1,
            coupon: null,
            ticket: 1,
        }
    }

    componentWillMount() {
        this.props.checkEventAvailable(this.props.modalEvent._id)
    }

    onButtonPress(coupon = null) {
        if(coupon){
            if(this.state.coupon){
                this.props.getTicket(null, this.props.modalEvent._id, this.state.coupon)
            }else{
                Alert.alert(
                    'Coupon not found',
                    'Press insert coupon',
                )
            }
        }
    }

    onButtonPressWithoutCoupon() {
        this.props.getTicket(null, this.props.modalEvent._id)
        Alert.alert(
            'Event Alert',
            'Joined success',
            {text: 'OK', onPress: Actions.EventJoined()}
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <ModalHeaderPlain headerText={this.props.modalEvent.event_name}/>
                </View>
                <View>
                    <EmptyCard>
                        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Tickets</Text>
                            <CardSection />
                            <Text>Do you have promotion code for this event ?</Text>
                            <TextInput placeholder={'Type in promotional code'} value={this.state.coupon} onChangeText={coupon => {this.setState({coupon})}} keyboardType='default' style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 3, borderRadius: 4, width: width-70}}/>                        
                        </View>
                        <View style={{ borderColor: '#FF7F11', borderWidth: 1, width: width-70, borderRadius: 3, margin: 5 }}>
                            <Button color="#FF7F11" title={'Use Code'} onPress={() => this.onButtonPress('coupon')} />
                        </View>
                        <View style={{ backgroundColor: 'gray', height: 1, width: width-70, margin: 5, justifyContent: 'space-between' }}/>
                        <View style={{ margin: 10 }}>
                            <View style={{ flexDirection: 'row', width: width-70, justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'column'}}>
                                    <Text style={{ fontWeight: 'bold', marginBottom: 3 }}>Seat</Text>
                                    <Text style={{ fontWeight: 'bold', marginTop: 3 }}>Free</Text>
                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    <MenuContext style={{ flex: 1 }} ref="MenuContext">
                                        <Menu style={styles.dropdown} onSelect={(value) => this.setState({ dropdownSelection: value })}>
                                            <MenuTrigger>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <View>
                                                        <Text style={{ color: 'white' }}>{this.state.dropdownSelection}</Text>
                                                    </View>
                                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                        <Image style={{ width: 10, height: 10 }} source={require('../env/images/arrow.png')}/>
                                                    </View>
                                                </View>
                                            </MenuTrigger>
                                            <MenuOptions optionsContainerStyle={styles.dropdownOption}
                                                        renderOptionsContainer={(options) => <ScrollView>{options}</ScrollView>}>
                                            <MenuOption value={1}>
                                                <Text style={{ color: '#FF7F11' }}>1</Text>
                                            </MenuOption>
                                            <MenuOption value={0}>
                                                <Text style={{ color: '#FF7F11' }}>0</Text>
                                            </MenuOption>
                                            </MenuOptions>
                                        </Menu>
                                    </MenuContext>
                                </View>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'gray', height: 1, width: width-70, margin: 5, justifyContent: 'space-between' }}/>
                        <View style={{ backgroundColor: '#FF7F11', borderRadius: 3, width: width-70, margin: 5, marginBottom: 10 }}>
                            <Button color="white" title={'Get Tickets'} onPress={() => this.onButtonPressWithoutCoupon()} disabled={!this.props.event.eventAvailable}/>
                        </View>
                    </EmptyCard>
                </View>
            </View>
        )
    }
}

const {height, width} = Dimensions.get('window')

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#353535'
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
        marginTop: 30,
        borderColor: '#FF7F11',
        borderWidth: 2,
        width: 300,
        height: 200,
        backgroundColor: 'white',
        color: '#FF7F11'
    }
}

const mapStateToProps = state => {
    return { modalContent: state.modalContent, event: state.event }
}

export default connect(mapStateToProps, actions)( ModalGetTicket )
