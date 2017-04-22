import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
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
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Login</Text>
                    </View>
                    <View style={styles.field}>
                        <TextInput value={email} onChangeText={email => this.setState({email})} placeholder={"email"} style={styles.textInput}/>
                        
                    </View>
                    <View style={styles.field}>
                        <TextInput value={password} onChangeText={password => this.setState({password})} placeholder={"password"} style={styles.textInput}/>
                        
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress={this.onSignIn}>
                            <Text style={{margin: 10, borderColor: '#ddd', borderWidth: 1, padding: 10}}>Sign in</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Actions.signup()}>
                            <Text style={{margin: 10, borderColor: '#ddd', borderWidth: 1, padding: 10}}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                    <AlertContainer />
                </View>
            )
        }
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        paddingTop: 20,
        backgroundColor: '#aaa'
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
        padding: 5,
        paddingLeft: 8,
        margin: 7,
        marginTop: 0,
        backgroundColor: 'white'
    },
    textInput: {
        height: 26
    },
    formError: {
        color: 'red'
    }
}

export default connect(null, actions)(LoginPage)