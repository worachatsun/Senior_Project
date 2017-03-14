import React, { Component } from 'react'
import { 
    View, 
    Text, 
    TouchableHighlight,
    StatusBar,
    Image
} from 'react-native'
import { Header, BigCard, CardSection, Content } from '../common'

class NewsPage extends Component {
    render () {
        return (
            <View>
                <Header headerText={"News"}/>
                <BigCard>
                    <Image source={{uri: 'https://www4.sit.kmutt.ac.th/files/story_pictures/IMG_5299.JPG#overlay-context=content/sit-%25E0%25B8%2588%25E0%25B8%25B1%25E0%25B8%259A%25E0%25B8%25A3%25E0%25B9%2588%25E0%25B8%25A7%25E0%25B8%25A1%25E0%25B8%25A1%25E0%25B8%25B7%25E0%25B8%25AD%25E0%25B8%2581%25E0%25B8%25B1%25E0%25B8%259A-interlink-%25E0%25B8%2588%25E0%25B8%25B1%25E0%25B8%2594-link-campus-cabling-2017'}}
       style={{resizeMode: 'contain',width: null,height: 210}} />
                    <CardSection />
                    <Content />
                </BigCard>
            </View>
        )
    }
}

export default NewsPage