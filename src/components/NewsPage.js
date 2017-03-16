import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
    View, 
    Text, 
    TouchableOpacity,
    StatusBar,
    Image,
    ScrollView
} from 'react-native'
import { 
    Header, 
    BigCard, 
    CardSection, 
    Content,
    SlideupContainer,
    BottomNavBar,
    Card,
    ModalContent
} from '../common'
import Modal from 'react-native-modalbox'
import { closeModal } from '../actions'

class NewsPage extends Component {
    constructor() {
        super()
    }

    render () {
        return (
            <View style={styles.container}>
                <Header headerText={this.props.header}/>
                <ScrollView>
                    <TouchableOpacity onPress={() => this.props.closeModal({prop: 'isOpen', value: true})}>
                        <BigCard>
                            <Image source={{uri: 'https://www.w3schools.com/css/img_forest.jpg'}}
            style={{resizeMode: 'stretch', width: null, height: 230}} />
                        </BigCard>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.closeModal({prop: 'isOpen', value: true})}>
                        <Card>
                            <Image source={{uri: 'https://www.w3schools.com/css/img_fjords.jpg'}}
            style={{resizeMode: 'stretch', width: 130, height: 90}} />
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.closeModal({prop: 'isOpen', value: true})}>
                        <Card>
                            <Image source={{uri: 'https://www.w3schools.com/css/img_fjords.jpg'}}
            style={{resizeMode: 'stretch', width: 130, height: 90}} />
                        </Card>
                    </TouchableOpacity>
                    <Card>
                        <Image source={{uri: 'https://www.w3schools.com/css/img_fjords.jpg'}}
        style={{resizeMode: 'stretch', width: 130, height: 90}} />
                    </Card>
                </ScrollView>
                <BottomNavBar />    
                <Modal ref={'modal'} isOpen={this.props.isOpen}>
                    <ModalContent closeModal={this.onClose} />
                </Modal>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#353535'
    }
}

const mapStateToProps = state => {
    const { isOpen } = state.closeModal

    return { isOpen }
}

export default connect(mapStateToProps, { closeModal })(NewsPage)