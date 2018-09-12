import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image, ScrollView, TextInput } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { ModalHeaderPlain, EmptyCard, RoundImage, CardSection } from '../common'
import NewsFavorite from './NewsFavorite'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class EditProfile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tel: '080-000-0000',
            email: 'bie_sukrit@gmail.com',
            location: 'เชียงใหม่ ประเทศไทย',
            faculty: 'KMUTT',
            job: 'นักร้อง',
            trophy: 'ผลงานศิสเก่า'
        }
    }

    render () {
        const { assets, name, email, surname } = this.props.profile.user_detail.user

        return (
            <View style={{flex: 1}}>
                <ModalHeaderPlain headerText={'Profile'}/>
                <ScrollView>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 18}}>
                        <RoundImage img={assets.picture} />
                        <Text style={{ margin: 12, fontSize: 18}}>{name} {surname}</Text>
                    </View>
                    <CardSection />
                    <View style={{margin: 14}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon style={{color: "#ff7f11"}} name={"information"} size={20}/>
                            <Text style={{marginLeft: 3, color: "#ff7f11"}}>Info</Text>
                        </View>
                        
                        <CardSection />
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Image style={styles.iconStyle} source={require('../env/images/tel.png')} /> 
                            <TextInput value={this.state.tel} onChangeText={(tel) => this.setState({tel})}/>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Image style={styles.iconStyle} source={require('../env/images/email.png')} /> 
                            <TextInput value={email} />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Image style={styles.iconStyle} source={require('../env/images/location.png')} /> 
                            <TextInput value={this.state.location} onChangeText={(location) => this.setState({location})}/>
                        </View>
                    </View>
                
                
                    <View style={{margin: 14}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon style={{color: "#ff7f11"}} name={"school"} size={20}/>
                            <Text style={{marginLeft: 3, color: "#ff7f11"}}>Graduated</Text>
                        </View>
                        <CardSection />
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Image style={styles.iconStyle} source={require('../env/images/hat.png')} /> 
                            <TextInput value={this.state.faculty} onChangeText={(faculty) => this.setState({faculty})}/>
                        </View>
                    </View>
                
                    <View style={{margin: 14}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon style={{color: "#ff7f11"}} name={"worker"} size={20}/>
                            <Text style={{marginLeft: 3, color: "#ff7f11"}}>Career</Text>
                        </View>
                        <CardSection />
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Image style={styles.iconStyle} source={require('../env/images/career.png')} /> 
                            <TextInput value={this.state.job} onChangeText={(job) => this.setState({job})}/>
                        </View>
                    </View>
                
                    <View style={{margin: 14}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon style={{color: "#ff7f11"}} name={"trophy"} size={20}/>
                            <Text style={{marginLeft: 3, color: "#ff7f11"}}>Trophy</Text>
                        </View>
                        <CardSection />
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Image style={styles.iconStyle} source={require('../env/images/trophy.png')} /> 
                            <TextInput value={this.state.trophy} onChangeText={(trophy) => this.setState({trophy})}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = {
    iconStyle: {
        width: 15,
        height: 15,
        marginLeft: 25,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5
    }
}

const {height, width} = Dimensions.get('window')

const mapStateToProps = state => {
    return { profile: state.auth }
}

export default connect(mapStateToProps, actions)(EditProfile)