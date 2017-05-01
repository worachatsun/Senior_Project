import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native'
import * as actions from '../actions'
import { Actions } from 'react-native-router-flux'
import { Header, EmptyCard, RoundImage } from '../common'
import NewsFavorite from './NewsFavorite'

class ProfilePage extends Component {

    componentWillMount() {
        
    }


    render () {
        const { assets, name, email, surname } = this.props.profile.user_detail.existingUser

        return (
            <View style={{flex: 1, marginBottom: 50}}>
                <Header headerText={'Profile'} rightIcon={"edit"} leftIcon={'back'}/>
                <ScrollView>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 18}}>
                        <RoundImage img={assets.picture} />
                        <Text style={{ margin: 12, fontSize: 18}}>{name} {surname}</Text>
                    </View>
                    <EmptyCard>
                        <View style={{margin: 14}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={styles.iconStyle} source={require('../env/images/tel.png')} /> 
                                <Text>
                                    080-000-0000
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, justifyContent: 'center' }}>
                                <Image style={styles.iconStyle} source={require('../env/images/email.png')} /> 
                                <Text>
                                    {email}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 , justifyContent: 'center'}}>
                                <Image style={styles.iconStyle} source={require('../env/images/location.png')} /> 
                                <Text>
                                    เชียงใหม่ ประเทศไทย
                                </Text>
                            </View>
                        </View>
                    </EmptyCard>
                    <EmptyCard>
                        <View style={{margin: 14}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={styles.iconStyle} source={require('../env/images/hat.png')} /> 
                                <Text>
                                    KMUTT
                                </Text>
                            </View>
                        </View>
                    </EmptyCard>
                    <EmptyCard>
                        <View style={{margin: 14}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={styles.iconStyle} source={require('../env/images/career.png')} /> 
                                <Text>
                                    นักร้อง
                                </Text>
                            </View>
                        </View>
                    </EmptyCard>
                    <EmptyCard>
                        <View style={{margin: 14}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={styles.iconStyle} source={require('../env/images/trophy.png')} /> 
                                <Text>
                                    ผลงานศิสเก่า
                                </Text>
                            </View>
                        </View>
                    </EmptyCard>
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