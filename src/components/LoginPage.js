import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { View, Text, TextInput, TouchableOpacity, Image, StatusBar, Platform } from 'react-native'
import AlertContainer from './Alerts/AlertContainer'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux' 

class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            errors: {},
            loading: false
        }

        this.onSignIn = this.onSignIn.bind(this)
    }

    onSignIn() {
        let { email, password, errors } = this.state
        if (!email) {
            errors.email = "Please enter an email."
        }
        if (!password) {
            errors.password = "Please enter a password."
        }
        this.setState({
            loading: true
        })
        this.props.loginUser(email, password).then(() => {
            this.setState({
                loading: false
            })
        })
    }

    render() {
        let { email, password, errors } = this.state

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
                <View style={{flex: 1}}>
                    <MyStatusBar backgroundColor="#FF7F11" barStyle="light-content" />
                    <View style={styles.container}>
                        <View style={styles.titleContainer}>
                            <Image source={require('../env/images/kmutt.png')} style={{ height: 160, width: 160 }}/>
                            <Text style={styles.title}>Alumni</Text>
                        </View>
                        <View style={styles.field}>
                            <TextInput value={email} onChangeText={email => this.setState({email})} autoCorrect={false} autoFocus={true} placeholder={"Username"} style={styles.textInput}/>
                        </View>
                        <View style={styles.field}>
                            <TextInput value={password} onChangeText={password => this.setState({password})} autoCorrect={false} placeholder={"Password"} style={styles.textInput}/>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity onPress={this.onSignIn}>
                                <Text style={styles.textButton}>Sign in</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Actions.signup()}>
                                <Text style={[styles.textButton, { backgroundColor: '#ff7f11', borderColor: 'white', color: 'white' }]}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                            <TouchableOpacity>
                                <Text style={{ color: '#ff7f11' }}>Forget password ?</Text>
                            </TouchableOpacity>
                        </View>
                        <AlertContainer />
                    </View>
                </View>
            )
        }
    }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
)

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        paddingBottom: 80,
        paddingLeft: 20,
        paddingRight: 20,
    },
    titleContainer: {
        padding: 10,
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 35
    },
    title: {
        color: '#ff7f11',
        fontSize: 18,
        marginBottom: 20
    },
    field: {
        borderRadius: 5,
        padding: 5,
        paddingLeft: 8,
        margin: 7,
        marginTop: 0,
        borderBottomWidth: 1,
        borderColor: '#ff7f11'
    },
    textInput: {
        height: 26
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
    textButton: {
        margin: 10, 
        borderColor: '#ff7f11', 
        borderRadius: 3,
        borderWidth: 1, 
        padding: 8, 
        color: '#ff7f11'
    },
}

export default connect(null, actions)(LoginPage)