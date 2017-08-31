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

    constructor(props) {
        super(props)

        this.state = {
            index: 0
        }
    }

    onPress(index) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)

    this.setState({index})
  }

    render () {
        const fromOutside = this.props.fromOutside ? {} : {marginBottom: 50}

        return (
            <View style={styles.container}>
                <Header headerText={'News'} route_to={'news'}/>
                <ScrollableTabView
                 renderTabBar={() => <DefaultTabBar 
                                        style={styles.tabbar} 
                                        underlineStyle={{backgroundColor:"#FF7F11"}}
                                        activeTextColor="#FF7F11"
                                        inactiveTextColor="black"/>}>
                    <View tabLabel="Information" style={[{flex: 1}, fromOutside]}>
                        <AllNewsComponent outside={true} />
                    </View>
                    <View tabLabel="Event" style={[{flex: 1}, fromOutside]}>
                        <AllNewsFaculty outside={true} />
                    </View>
                </ScrollableTabView>   
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: "white"
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

NewsPage.defaultProps = {
    fromOutside: false
}

export default connect(mapStateToProps, actions)(NewsPage)