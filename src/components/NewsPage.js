import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
    View, 
    Text, 
    TouchableOpacity,
    StatusBar,
    Image,
    ScrollView,
    ListView
} from 'react-native'
import { 
    Header, 
    BigCard, 
    CardSection, 
    Content,
    SlideupContainer,
    BottomNavBar,
    Card
} from '../common'
import Modal from 'react-native-modalbox'
import { closeModal } from '../actions'
import ModalContent from '../common/ModalContent'

class NewsPage extends Component {
    constructor() {
        super()
    }

    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        
        this.dataSource = ds.cloneWithRows(this.props.newsList)
    }

    renderRow(news) {
        return (
            <TouchableOpacity onPress={() => this.props.closeModal({prop: 'isOpen', value: true})}>
                <Card news={news} />
            </TouchableOpacity>
        )
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
                    <ListView
                        dataSource={this.dataSource}
                        renderRow={this.renderRow.bind(this)}
                    />
                </ScrollView>
                <BottomNavBar />    
                <Modal ref={'modal'} isOpen={this.props.isOpen} swipeToClose={false} >
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
    return { isOpen, newsList: state.newsList }
}

export default connect(mapStateToProps, { closeModal })(NewsPage)