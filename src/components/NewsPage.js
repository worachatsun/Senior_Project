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
                        <Image source={{uri: 'https://www4.sit.kmutt.ac.th/files/story_pictures/IMG_5299.JPG#overlay-context=content/sit-%25E0%25B8%2588%25E0%25B8%25B1%25E0%25B8%259A%25E0%25B8%25A3%25E0%25B9%2588%25E0%25B8%25A7%25E0%25B8%25A1%25E0%25B8%25A1%25E0%25B8%25B7%25E0%25B8%25AD%25E0%25B8%2581%25E0%25B8%25B1%25E0%25B8%259A-interlink-%25E0%25B8%2588%25E0%25B8%25B1%25E0%25B8%2594-link-campus-cabling-2017'}}
        style={{resizeMode: 'stretch', width: null, height: 230}} />
                    </BigCard>
                    <Card>
                        <Image source={{uri: 'https://www4.sit.kmutt.ac.th/files/story_pictures/IMG_5299.JPG#overlay-context=content/sit-%25E0%25B8%2588%25E0%25B8%25B1%25E0%25B8%259A%25E0%25B8%25A3%25E0%25B9%2588%25E0%25B8%25A7%25E0%25B8%25A1%25E0%25B8%25A1%25E0%25B8%25B7%25E0%25B8%25AD%25E0%25B8%2581%25E0%25B8%25B1%25E0%25B8%259A-interlink-%25E0%25B8%2588%25E0%25B8%25B1%25E0%25B8%2594-link-campus-cabling-2017'}}
        style={{resizeMode: 'stretch', width: null, height: 230}} />
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
        backgroundColor: '#30332E'
    }
}

export default NewsPage