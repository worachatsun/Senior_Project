import _ from 'lodash'
import React, { Component } from 'react'

import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native'
import * as actions from '../actions'
import { Actions } from 'react-native-router-flux'
import { Header, EmptyCard, RoundImage, CardSection } from '../common'
import NewsFavorite from './NewsFavorite'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class ProfilePage extends Component {

    renderWorkplace() {
        const workplace = _.get(this.props.profile, 'profile_workplace')
        if(_.isEmpty(workplace)) return null

        const options = [
            {
                icon: 'briefcase',
                text: workplace.WorkPlaceName
            },
            {
                icon: 'account-location',
                text: `${workplace.AddressNo} ${workplace.HouseNo} ถ.${workplace.Street} หมู่ ${workplace.Moo} ต.${workplace.TambonName} อ.${workplace.AmphurName} จ.${workplace.ProvinceName} ${workplace.PostCode}`,
            },
            {
                icon: 'at',
                text: workplace.EmailWork
            }
        ]

        return (
            <View style={{margin: 14, width: '77%'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon style={{color: "#ff7f11"}} name={"information"} size={20}/>
                    <Text style={{marginLeft: 3, color: "#ff7f11"}}>Workplace</Text>
                </View>
                <CardSection />
                {_.map(options, (option, index) => (
                    !_.isEmpty(option.text) && (
                        <View key={index} style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Icon style={styles.iconStyle} name={option.icon} size={20}/>
                            <Text>
                                {option.text}
                            </Text>
                        </View>
                    )
                ))}  
            </View>
        )
    }

    render () {
        const { assets, name, email, surname, uid, faculty, award_histories, career_histories, graduate_histories } = this.props.profile.user_detail.user
        const profile_user = this.props.profile.profile_user
        
        return (
            <View style={{flex: 1}}>
                <Header headerText={'Profile'} rightIcon={'edit'} leftIcon={'back'}/>
                <ScrollView>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 18}}>
                        <RoundImage img={'http://apollo.kmutt.ac.th/kmuttstdpic/default.aspx?&stdcode=51450001'} />
                        <Text style={{ margin: 12, fontSize: 18}}>{profile_user.StdPrefix}{profile_user.StdFirstName} {profile_user.StdLastName}</Text>
                    </View>
                    <CardSection />
                    <View style={{margin: 14, width: '77%'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon style={{color: "#ff7f11"}} name={"information"} size={20}/>
                            <Text style={{marginLeft: 3, color: "#ff7f11"}}>Info</Text>
                        </View>
                        <CardSection />
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Icon style={styles.iconStyle} name={"account-outline"} size={20}/>
                            <Text>
                                {profile_user.StdCode}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Icon style={styles.iconStyle} name={"school"} size={20}/>
                            <Text>
                                {faculty}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Icon style={styles.iconStyle} name={"account-card-details"} size={20}/>
                            <Text>
                                {profile_user.IDCard}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Icon style={styles.iconStyle} name={"email"} size={20}/>
                            <Text>
                                {profile_user.Email1}
                            </Text>
                            <Text>
                                {profile_user.Email2}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Icon style={styles.iconStyle} name={"cellphone-iphone"} size={20}/>
                            <Text>
                                {profile_user.Mobile1}
                            </Text>
                            <Text>
                                {profile_user.Mobile2}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Icon style={styles.iconStyle} name={"account-location"} size={20}/>
                            <Text>
                                {profile_user.AddressNo} {profile_user.HouseNo} ถ.{profile_user.Street} ต.{profile_user.TambonName} 
                                อ.{profile_user.AmphurName} จ.{profile_user.ProvinceName} {profile_user.PostCode}
                            </Text>
                        </View>
                    </View>
                
                    {graduate_histories.length===0?<View/>:
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
                    }
                    {career_histories.length===0?<View/>:
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
                    }
                    {award_histories.length===0?<View/>:
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
                    }
                    <View style={{margin: 14, width: '77%'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon style={{color: "#ff7f11"}} name={"information"} size={20}/>
                            <Text style={{marginLeft: 3, color: "#ff7f11"}}>Donate amount</Text>
                        </View>
                        <CardSection />
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Icon style={styles.iconStyle} name={"cash"} size={20}/>
                            <Text>
                                {profile_user.DonateAmount} Bath.
                            </Text>
                        </View>
                    </View>
                    {this.renderWorkplace()}
                </ScrollView>
            </View>
        )
    }
}

const styles = {
    iconStyle: {
        marginLeft: 25,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
        color: "#ff7f11"
    }
}

const {height, width} = Dimensions.get('window')

const mapStateToProps = state => {
    return { profile: state.auth }
}

export default connect(mapStateToProps, actions)(ProfilePage)