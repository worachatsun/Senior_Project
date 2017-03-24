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
} from '../common'
import * as actions from '../actions'
import NewsItem from './NewsItem'

class NewsPage extends Component {

    componentdidMount() {
        console.log('did')
    }

    componentWillMount() {
        this.props.fetchNews()

        this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1!==r2})
    }

    renderRow(news) {
        return <NewsItem news={news}/>
    }

    render () {
        return (
            <View style={styles.container}>
                <Header headerText={'News'}/>
                <ScrollView>
                    <TouchableOpacity onPress={() => this.props.closeModal({prop: 'isOpen', value: true})}>
                        <BigCard>
                            <Image source={{uri: 'https://www.w3schools.com/css/img_forest.jpg'}}
            style={{resizeMode: 'stretch', width: null, height: 230}} />
                        </BigCard>
                    </TouchableOpacity>
                    <ListView
                        dataSource={this.dataSource.cloneWithRows(this.props.newsList)}
                        renderRow={this.renderRow.bind(this)}
                    />
                </ScrollView>
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
    return { isOpen, newsList: state.newsList, selectNewsId: state.selectedNewsId }
}

export default connect(mapStateToProps, actions)(NewsPage)