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
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import { Actions } from 'react-native-router-flux'
import NewsItem from './NewsItem'

class NewsPage extends Component {

    componentWillMount() {
        this.props.fetchNews()
        this.props.fetchNewsFaculty('SIT')
        Actions.refresh({key: 'drawer', open: false})
        this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1!==r2})
    }

    renderRow(news) {
        return <NewsItem news={news}/>
    }

    render () {
        return (
            <View style={styles.container}>
                <Header headerText={'News'}/>
                <ScrollableTabView
                 renderTabBar={() => <DefaultTabBar 
                                        style={styles.tabbar} 
                                        underlineStyle={{backgroundColor:"#FF7F11"}}
                                        activeTextColor="#FF7F11"
                                        inactiveTextColor="black"/>}>
                    <View tabLabel="All">
                        <ScrollView style={{marginBottom:50}}>
                            <TouchableOpacity onPress={() => this.props.closeModal({prop: 'isOpen', value: true})}>
                                <BigCard>
                                    <Image source={{uri: 'https://www.w3schools.com/css/img_forest.jpg'}}
                    style={{resizeMode: 'stretch', width: null, height: 230}} />
                                </BigCard>
                            </TouchableOpacity>
                            <ListView
                            dataSource={this.dataSource.cloneWithRows(this.props.newsList)}
                            renderRow={this.renderRow.bind(this)}
                            enableEmptySections={true}
                            />
                        </ScrollView>
                    </View>
                    <View tabLabel="Faculty" style={{flex: 1}}>
                        <ScrollView style={{marginBottom:50, marginTop: 12}}>
                            <ListView
                                dataSource={this.dataSource.cloneWithRows(this.props.newsFaculty)}
                                renderRow={this.renderRow.bind(this)}
                                enableEmptySections={true}
                            />
                        </ScrollView>
                    </View>
                </ScrollableTabView>   
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#353535'
    },
    tabbar: {
        height: 40, 
        alignItems: 'center', 
        paddingTop: 10,
        backgroundColor: "white",
        borderColor: '#353535',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        borderTopColor: '#FF7F11',
        borderTopWidth: 1
    }
}

const mapStateToProps = state => {
    const { isOpen } = state.closeModal
    return { 
        isOpen, 
        newsList: state.newsList.news,
        newsFaculty: state.newsList.news_faculty,
        selectNewsId: state.selectedNewsId 
    }
}

export default connect(mapStateToProps, actions)(NewsPage)