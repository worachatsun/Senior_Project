import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image, ScrollView, TextInput, PixelRatio, AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import ImagePicker from 'react-native-image-picker'
import { ModalHeaderPlain, EmptyCard, RoundImage, CardSection } from '../common'
import NewsFavorite from './NewsFavorite'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class EditProfile extends Component {

    constructor(props) {
        super(props)
        const { tel, email, address, name, surname, assets } = this.props.profile.user_detail.user
        this.state = {
            tel,
            email,
            name,
            surname,
            location: address,
            faculty: 'KMUTT',
            job: 'นักร้อง',
            trophy: 'ผลงานศิสเก่า',
            avatarSource: assets.picture,
            color: '#FF7F11'
        }

        AsyncStorage.getItem('color').then(data => {
            this.setState({color: data})
        })
    }

    onClickImagePicker = () => {
        const options = {
            quality: 0.5,
            maxWidth: 250,
            maxHeight: 250,
            storageOptions: {
              skipBackup: true
            }
          }
      
          ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response)
      
            if (response.didCancel) {
              console.log('User cancelled photo picker');
            }
            else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            }
            else {

                let source = { uri: 'data:image/jpeg;base64,' + response.data }
      
              this.setState({
                avatarSource: source
              })
            }
          })
    }

    onEditInfo() {
        this.props.updateUserData(this.state, this.props.profile.user_detail.user._id)
    }

    render () {
        const { assets, name, email, surname } = this.props.profile.user_detail.user

        return (
            <View style={{flex: 1}}>
                <ModalHeaderPlain color={this.state.color} headerText={'Edit profile'}/>
                <ScrollView>
                    {/* <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 18}}>
                        <RoundImage img={assets.picture} />
                        <Text style={{ margin: 12, fontSize: 18}}>{name} {surname}</Text>
                    </View> */}
                    <CardSection />
                    <View style={{margin: 14}}>
                        <TouchableOpacity onPress={this.onClickImagePicker.bind(this)} style={{marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
                            <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                                { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
                                <Image style={styles.avatar} source={this.state.avatarSource} />
                                }
                            </View>
                        </TouchableOpacity>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon style={{color: this.state.color||"#ff7f11"}} name={"information"} size={20}/>
                            <Text style={{marginLeft: 3, color: this.state.color||"#ff7f11"}}>Info</Text>
                        </View>
                        
                        <CardSection />
                        <View style={styles.field}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon style={{color: this.state.color||"#ff7f11"}} name={"rename-box"} size={20}/>
                                <Text style={{marginLeft: 3, color: this.state.color||"#ff7f11"}}>Name</Text>
                            </View>
                            <TextInput value={this.state.name} onChangeText={name => this.setState({name})} placeholder={"Name"} style={[styles.textInput, {borderColor: this.state.color||"#ff7f11"}]}/>
                        </View>
                        <View style={styles.field}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon style={{color: this.state.color||"#ff7f11"}} name={"rename-box"} size={20}/>
                                <Text style={{marginLeft: 3, color: this.state.color||"#ff7f11"}}>Surname</Text>
                            </View>
                            <TextInput value={this.state.surname} onChangeText={surname => this.setState({surname})} placeholder={"Surname"} style={[styles.textInput, {borderColor: this.state.color||"#ff7f11"}]}/>
                        </View>
                        <View style={styles.field}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon style={{color: this.state.color||"#ff7f11"}} name={"cellphone"} size={20}/>
                                <Text style={{marginLeft: 3, color: this.state.color||"#ff7f11"}}>Tel</Text>
                            </View>
                            <TextInput value={this.state.tel} onChangeText={tel => this.setState({tel})} placeholder={"Tel"} style={[styles.textInput, {borderColor: this.state.color||"#ff7f11"}]}/>
                        </View>
                        <View style={styles.field}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon style={{color: this.state.color||"#ff7f11"}} name={"email"} size={20}/>
                                <Text style={{marginLeft: 3, color: this.state.color||"#ff7f11"}}>Email</Text>
                            </View>
                            <TextInput value={this.state.email} onChangeText={email => this.setState({email})} placeholder={"Email"} style={[styles.textInput, {borderColor: this.state.color||"#ff7f11"}]}/>
                        </View>
                        <View style={styles.field}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon style={{color: this.state.color||"#ff7f11"}} name={"map-marker"} size={20}/>
                                <Text style={{marginLeft: 3, color: this.state.color||"#ff7f11"}}>Address</Text>
                            </View>
                            <TextInput value={this.state.location} onChangeText={location => this.setState({location})} placeholder={"Address"} style={[styles.textInput, {borderColor: this.state.color||"#ff7f11"}]}/>
                        </View>
                    </View>
                
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => this.onEditInfo()}>
                            <Text style={{margin: 10, borderColor: this.state.color||'#ff7f11', borderWidth: 1, padding: 10}}>Edit info</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={{margin: 14}}>
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
                    </View> */}
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
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        borderRadius: 75,
        width: 150,
        height: 150
    },
    field: {
        borderRadius: 5,
        paddingLeft: 8,
        margin: 7,
        borderBottomWidth: 1,        
    },
    textInput: {
        height: 26
    }
}

const {height, width} = Dimensions.get('window')

const mapStateToProps = state => {
    return { profile: state.auth }
}

export default connect(mapStateToProps, actions)(EditProfile)