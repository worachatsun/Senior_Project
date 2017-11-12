import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { View, ScrollView, Text, TextInput, TouchableOpacity, PixelRatio, Image, AsyncStorage } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import AlertContainer from './Alerts/AlertContainer'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { ModalHeaderPlain } from '../common/ModalHeader'

class SignupComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',
            errors: {},
            loading: false,
            name: '',
            surname: '',
            tel: '',
            address: '',
            avatarSource: null,
            videoSource: null,
            color: '#FF7F11'
        }

        AsyncStorage.getItem('color').then(data => {
            this.setState({color: data})
        })

        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp() {
        let { email, password, errors, name, surname, tel, address, avatarSource, username } = this.state
        if (!email) {
            errors.email = "Please enter an email."
        }
        if (!password) {
            errors.password = "Please enter a password."
        }
        if (!name) {
            errors.name = "Please enter a name."
        }
        if (!surname) {
            errors.surname = "Please enter a surname."
        }
        if (!tel) {
            errors.tel = "Please enter a tel."
        }
        if (!address) {
            errors.address = "Please enter a address."
        }
        this.setState({
            loading: true
        })
        this.props.signupUser(email, password, name, surname, tel, address, avatarSource, username).then(() => {
            this.setState({
                loading: false
            })
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

    render() {
        let { email, username, password, errors, name, surname, tel, address } = this.state

        if (this.state.loading) {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>
                        Loading
                    </Text>
                </View>
            )
        }else{
            return (
                <ScrollView>
                    <View style={styles.container}>
                        <ModalHeaderPlain color={this.state.color} backSign={true} headerText={'Register'}/>
                        <TouchableOpacity onPress={this.onClickImagePicker.bind(this)} style={{marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
                            <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                                { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
                                <Image style={styles.avatar} source={this.state.avatarSource} />
                                }
                            </View>
                        </TouchableOpacity>
                        <View style={[styles.field, {borderColor: this.state.color||'#ff7f11'}]}>
                            <TextInput value={username} autoCapitalize='none' onChangeText={username => this.setState({username})} placeholder={"Username"} style={styles.textInput}/>
                        </View>
                        <View style={[styles.field, {borderColor: this.state.color||'#ff7f11'}]}>
                            <TextInput value={password} secureTextEntry={true} autoCapitalize = 'none' onChangeText={password => this.setState({password})} placeholder={"Password"} style={styles.textInput}/>
                        </View>
                        <View style={[styles.field, {borderColor: this.state.color||'#ff7f11'}]}>
                            <TextInput value={email} autoCapitalize='none' onChangeText={email => this.setState({email})} placeholder={"Email"} style={styles.textInput}/>
                        </View>
                        <View style={[styles.field, {borderColor: this.state.color||'#ff7f11'}]}>
                            <TextInput value={name} onChangeText={name => this.setState({name})} placeholder={"Name"} style={styles.textInput}/>
                        </View>
                        <View style={[styles.field, {borderColor: this.state.color||'#ff7f11'}]}>
                            <TextInput value={surname} onChangeText={surname => this.setState({surname})} placeholder={"Surname"} style={styles.textInput}/>
                        </View>
                        <View style={[styles.field, {borderColor: this.state.color||'#ff7f11'}]}>
                            <TextInput value={tel} autoCapitalize = 'none' onChangeText={tel => this.setState({tel})} placeholder={"Tel"} style={styles.textInput}/>
                        </View>
                        <View style={[styles.field, {borderColor: this.state.color||'#ff7f11'}]}>
                            <TextInput value={address} autoCapitalize = 'none' onChangeText={address => this.setState({address})} placeholder={"Address"} style={styles.textInput}/>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity onPress={this.onSignUp}>
                                <Text style={{margin: 10, borderColor: this.state.color||'#ff7f11', borderWidth: 1, padding: 10}}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                        <AlertContainer />
                    </View>
                </ScrollView>
            )
        }
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    titleContainer: {
        padding: 10
    },
    title: {
        color: 'white',
        fontSize: 35
    },
    field: {
        borderRadius: 5,
        paddingLeft: 8,
        margin: 7,
        borderBottomWidth: 1,
        height: 47
    },
    textInput: {
        height: 47
    },
    formError: {
        color: 'red'
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
    }
}

export default connect(null, actions)(SignupComponent)