import React, { Component } from 'react'
import { 
    View, 
    Text, 
    TouchableHighlight,
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
    Card
} from '../common'

class NewsPage extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Header headerText={this.props.header}/>
                <ScrollView>
                    <BigCard>
                        <Image source={{uri: 'https://www.w3schools.com/css/img_forest.jpg'}}
        style={{resizeMode: 'stretch', width: null, height: 230}} />
                    </BigCard>
                    <Card>
                        <Image source={{uri: 'https://www.w3schools.com/css/img_fjords.jpg'}}
        style={{resizeMode: 'stretch', width: 130, height: 90}} />
                    </Card>
                    <Card>
                        <Image source={{uri: 'https://www.w3schools.com/css/img_fjords.jpg'}}
        style={{resizeMode: 'stretch', width: 130, height: 90}} />
                    </Card>
                    <Card>
                        <Image source={{uri: 'https://www.w3schools.com/css/img_fjords.jpg'}}
        style={{resizeMode: 'stretch', width: 130, height: 90}} />
                    </Card>
                </ScrollView>
                <BottomNavBar />    
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

export default NewsPage