import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Image, 
    StatusBar, 
    Platform, 
    Linking,
    AppState
} from 'react-native'
import AlertContainer from './Alerts/AlertContainer'
import PushNotification from 'react-native-push-notification'
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

    componentDidMount() {
        PushNotification.configure({
            onNotification: function(notification) {
                console.log('NOTOFICATION:', notification)
            }
        })

        PushNotification.localNotificationSchedule({
            message: "My Notification Message", // (required)
            date: new Date(Date.now() + (10 * 1000)), // in 60 secs
            number: 0
        })
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
        this.props.loginLdap(email, password).then(() => {
            this.setState({
                email: '',
                password: '',
                loading: false
            })
        })
    }

    onForgetPassword() {
        Linking.openURL('https://accountrecovery.kmutt.ac.th/changepwd/changepasswdTH.php').catch(err => console.error('An error occurred', err))
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
                        <View style={[styles.field, {height: 45}]}>
                            <TextInput style={{height: 20}} value={email} autoCapitalize = 'none' onChangeText={email => this.setState({email})} autoCorrect={false} autoFocus={true} placeholder={"Username"} style={styles.textInput}/>
                        </View>
                        <View style={[styles.field, {height: 45}]}>
                            <TextInput style={{height: 55}} value={password} secureTextEntry={true} autoCapitalize = 'none' onChangeText={password => this.setState({password})} autoCorrect={false} placeholder={"Password"} style={styles.textInput}/>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity onPress={this.onSignIn}>
                                <Text style={[styles.textButton, { backgroundColor: '#ff7f11', borderColor: 'white', color: 'white' }]}>Sign in</Text>
                            </TouchableOpacity>
                            {/*<TouchableOpacity onPress={() => Actions.signup()}>
                                <Text style={[styles.textButton, { backgroundColor: '#ff7f11', borderColor: 'white', color: 'white' }]}>Sign up</Text>
                            </TouchableOpacity>*/}
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                            <TouchableOpacity onPress={this.onForgetPassword}>
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
        // padding: 5,
        paddingLeft: 8,
        margin: 7,
        borderBottomWidth: 1,
        borderColor: '#ff7f11'
    },
    textInput: {
        height: 55
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

const mapStateToProps = state => {
    return { a: state }
}

export default connect(mapStateToProps, actions)(LoginPage)