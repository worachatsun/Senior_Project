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

    // componentWillReceiveProps(nextProps){
    //     this.setState({
    //         tel: '080-000-0000',
    //         email: 'bie_sukrit@gmail.com',
    //         location: 'เชียงใหม่ ประเทศไทย',
    //         faculty: 'KMUTT',
    //         job: 'นักร้อง',
    //         trophy: 'ผลงานศิสเก่า'
    //     })
    // }

    render () {
        return (
            <View style={{flex: 1, backgroundColor: '#ddd'}}>
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
                                <TextInput style={{borderColor: 'gray', borderWidth: 1, width: 200}} onChangeText={(tel) => this.setState({tel})} value={this.state.tel} />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <Image style={styles.iconStyle} source={require('../env/images/email.png')} /> 
                                <TextInput style={{borderColor: 'gray', borderWidth: 1, width: 200}} onChangeText={(email) => this.setState({email})} value={this.state.email} />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <Image style={styles.iconStyle} source={require('../env/images/location.png')} /> 
                                <TextInput style={{borderColor: 'gray', borderWidth: 1, width: 200}} onChangeText={(location) => this.setState({location})} value={this.state.location} />
                            </View>
                        </View>
                    </EmptyCard>
                    <EmptyCard>
                        <View style={{margin: 14}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={styles.iconStyle} source={require('../env/images/hat.png')} /> 
                                <TextInput style={{borderColor: 'gray', borderWidth: 1, width: 200}} onChangeText={(faculty) => this.setState({faculty})} value={this.state.faculty} />
                            </View>
                        </View>
                    </EmptyCard>
                    <EmptyCard>
                        <View style={{margin: 14}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={styles.iconStyle} source={require('../env/images/career.png')} /> 
                                <TextInput style={{borderColor: 'gray', borderWidth: 1, width: 200}} onChangeText={(job) => this.setState({job})} value={this.state.job} />
                            </View>
                        </View>
                    </EmptyCard>
                    <EmptyCard>
                        <View style={{margin: 14}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={styles.iconStyle} source={require('../env/images/trophy.png')} />
                                <TextInput style={{borderColor: 'gray', borderWidth: 1, width: 200}} onChangeText={(trophy) => this.setState({trophy})} value={this.state.trophy} />
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