import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
    View, 
    Text, 
} from 'react-native'
import { 
    Header, 
} from '../common'
import * as actions from '../actions'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import { Actions } from 'react-native-router-flux'
import AllNewsComponent from './AllNewsComponent'
import AllNewsFaculty from './AllNewsFaculty'

class NewsPage extends Component {

    componentWillMount() {
        Actions.refresh({key: 'drawer', open: false})
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
                    <View tabLabel="All" style={{flex: 1, marginBottom: 50}}>
                        <AllNewsComponent />
                    </View>
                    <View tabLabel="Faculty" style={{flex: 1, marginBottom: 50}}>
                        <AllNewsFaculty />
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
        selectNewsId: state.selectedNewsId 
    }
}

export default connect(mapStateToProps, actions)(NewsPage)