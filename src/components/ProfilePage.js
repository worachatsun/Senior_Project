import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Header, EmptyCard, RoundImage } from '../common'
import NewsFavorite from './NewsFavorite'

class ProfilePage extends Component {

    componentWillMount() {
        Actions.refresh({key: 'drawer', open: false})
    }


    render () {
        return (
            <View style={{flex: 1, marginBottom: 50}}>
                <Header headerText={'Profile'} rightIcon={"edit"}/>
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
                                    080-000-0000
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <Image style={styles.iconStyle} source={require('../env/images/email.png')} /> 
                                <Text>
                                    bie_sukrit@gmail.com
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <Image style={styles.iconStyle} source={require('../env/images/location.png')} /> 
                                <Text>
                                    เชียงใหม่ ประเทศไทย
                                </Text>
                            </View>
                        </View>
                    </EmptyCard>
                    <EmptyCard>
                        <View style={{margin: 14}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={styles.iconStyle} source={require('../env/images/hat.png')} /> 
                                <Text>
                                    KMUTT
                                </Text>
                            </View>
                        </View>
                    </EmptyCard>
                    <EmptyCard>
                        <View style={{margin: 14}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={styles.iconStyle} source={require('../env/images/career.png')} /> 
                                <Text>
                                    นักร้อง
                                </Text>
                            </View>
                        </View>
                    </EmptyCard>
                    <EmptyCard>
                        <View style={{margin: 14}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={styles.iconStyle} source={require('../env/images/trophy.png')} /> 
                                <Text>
                                    ผลงานศิสเก่า
                                </Text>
                            </View>
                        </View>
                    </EmptyCard>
                    <TouchableOpacity onPress={() => Actions.NewsFavorite()}>
                        <EmptyCard>
                            <Text>Favorite News</Text>
                        </EmptyCard>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Actions.EventJoined()}>
                        <EmptyCard>
                            <Text>Joined Event</Text>
                        </EmptyCard>
                    </TouchableOpacity>
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

export default ProfilePage