import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image, ScrollView, TextInput } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { ModalHeaderPlain, EmptyCard, RoundImage } from '../common'
import NewsFavorite from './NewsFavorite'

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

    componentWillReceiveProps(nextProps){
        this.setState({
            tel: '080-000-0000',
            email: 'bie_sukrit@gmail.com',
            location: 'เชียงใหม่ ประเทศไทย',
            faculty: 'KMUTT',
            job: 'นักร้อง',
            trophy: 'ผลงานศิสเก่า'
        })
    }

    render () {
        return (
            <View style={{flex: 1}}>
                <ModalHeaderPlain headerText={'Profile'}/>
                <ScrollView>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 18}}>
                        <RoundImage img={"https://www4.sit.kmutt.ac.th/files/story_pictures/IMG_0027.jpg"} />
                        <Text style={{ margin: 12, fontSize: 18}}>Sukrit Wisetkaeo</Text>
                    </View>
                    <EmptyCard>
                        <View style={{margin: 14}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={styles.iconStyle} source={require('../env/images/tel.png')} /> 
                                <Text>
                                    {this.state.tel}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <Image style={styles.iconStyle} source={require('../env/images/email.png')} /> 
                                <Text>
                                    {this.state.email}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <Image style={styles.iconStyle} source={require('../env/images/location.png')} /> 
                                <Text>
                                    {this.state.location}
                                </Text>
                            </View>
                        </View>
                    </EmptyCard>
                    <EmptyCard>
                        <View style={{margin: 14}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={styles.iconStyle} source={require('../env/images/hat.png')} /> 
                                <Text>
                                    {this.state.faculty}
                                </Text>
                            </View>
                        </View>
                    </EmptyCard>
                    <EmptyCard>
                        <View style={{margin: 14}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={styles.iconStyle} source={require('../env/images/career.png')} /> 
                                <Text>
                                    {this.state.job}
                                </Text>
                            </View>
                        </View>
                    </EmptyCard>
                    <EmptyCard>
                        <View style={{margin: 14}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={styles.iconStyle} source={require('../env/images/trophy.png')} /> 
                                <Text>
                                    {this.state.trophy}
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

export default EditProfile