import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import AlertContainer from './Alerts/AlertContainer'
import * as actions from '../actions'
import { connect } from 'react-redux'

class SignupComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            errors: {},
            loading: false,
            name: '',
            surname: '',
            tel: '',
            address: ''
        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp() {
        let { email, password, errors, name, surname, tel, address } = this.state
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
        this.props.signupUser(email, password, name, surname, tel, address).then(() => {
            this.setState({
                loading: false
            })
        })
    }

    render() {
        let { email, password, errors, name, surname, tel, address } = this.state

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
                        <Text style={styles.title}>REGISTER</Text>
                    </View>
                    <View style={styles.field}>
                        <TextInput value={email} autoCapitalize = 'none' onChangeText={email => this.setState({email})} placeholder={"email"} style={styles.textInput}/>
                    </View>
                    <View style={styles.field}>
                        <TextInput value={password} secureTextEntry={true} autoCapitalize = 'none' onChangeText={password => this.setState({password})} placeholder={"password"} style={styles.textInput}/>
                    </View>
                    <View style={styles.field}>
                        <TextInput value={name} onChangeText={name => this.setState({name})} placeholder={"name"} style={styles.textInput}/>
                    </View>
                    <View style={styles.field}>
                        <TextInput value={surname} onChangeText={surname => this.setState({surname})} placeholder={"surname"} style={styles.textInput}/>
                    </View>
                    <View style={styles.field}>
                        <TextInput value={tel} autoCapitalize = 'none' onChangeText={tel => this.setState({tel})} placeholder={"tel"} style={styles.textInput}/>
                    </View>
                    <View style={styles.field}>
                        <TextInput value={address} autoCapitalize = 'none' onChangeText={address => this.setState({address})} placeholder={"address"} style={styles.textInput}/>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress={this.onSignUp}>
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

export default connect(null, actions)(SignupComponent)