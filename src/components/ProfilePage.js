import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native'
import * as actions from '../actions'
import { Actions } from 'react-native-router-flux'
import { Header, EmptyCard, RoundImage, CardSection } from '../common'
import NewsFavorite from './NewsFavorite'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class ProfilePage extends Component {

    componentWillMount() {
        
    }


    render () {
        const { assets, name, email, surname, uid } = this.props.profile.user_detail.user

        return (
            <View style={{flex: 1}}>
                <Header headerText={'Profile'} rightIcon={"edit"} leftIcon={'back'}/>
                <ScrollView>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 18}}>
                        <RoundImage img={'http://apollo.kmutt.ac.th/kmuttstdpic/default.aspx?&stdcode='+uid} />
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
                            <Text>
                                080-000-0000
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Image style={styles.iconStyle} source={require('../env/images/email.png')} /> 
                            <Text>
                                {email}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Image style={styles.iconStyle} source={require('../env/images/location.png')} /> 
                            <Text>
                                เชียงใหม่ ประเทศไทย
                            </Text>
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
                            <Text>
                                KMUTT
                            </Text>
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
                            <Text>
                                นักร้อง
                            </Text>
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
                            <Text>
                                ผลงานศิสเก่า
                            </Text>
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

export default connect(mapStateToProps, actions)(ProfilePage)