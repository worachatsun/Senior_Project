import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ImageModal } from './'
import { Col, Row, Grid } from 'react-native-easy-grid'
import ProgressiveImage from '../components/ProgressiveImage'

const Card = (props) => {
    const { containerStyle, viewStyle, textStyle } = styles
    
    if(props.capacity) {
        return (
            <View style={styles.containerStyle}>
                <View>
                    <ProgressiveImage
                        thumbnailSource={{ uri: 'https://i.imgur.com/O249H4P.png?bust' + Math.random() }}
                        imageSource={{ uri: props.img }}
                        style={{ flex: 1, alignItems: 'stretch', width: 130, height: 90 }}
                    />
                </View>
                <View style={viewStyle}>
                    <Text style={textStyle} numberOfLines={2}>
                        {props.description}
                    </Text>
                </View>
                <View style={{width: 50, height: 22, backgroundColor: '#ff7f11', position: 'absolute', right: 0, bottom: 0, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Icon style={{color: "white"}} name={"account"} size={20}/>
                        <Text style={{color: "white"}}>{props.capacity}</Text>
                    </View>
                </View>
            </View>
        )
    }else{
        return (
            <View style={styles.containerStyle}>
                <View>
                    <ProgressiveImage
                        thumbnailSource={{ uri: 'https://i.imgur.com/O249H4P.png?bust' + Math.random() }}
                        imageSource={{ uri: props.img }}
                        style={{ flex: 1, alignItems: 'stretch', width: 130, height: 90 }}
                    />
                    { countFavorite(props.count_favorite) }
                </View>
                <View style={viewStyle}>
                    <Text style={textStyle} numberOfLines={2}>
                        {props.description}
                    </Text>
                </View>
            </View>
        )
    }
}

const dateFormat = date => {
    const arrDate = (new Date(date)).toUTCString().split(" ")
    return `${arrDate[1]} ${arrDate[2]} ${arrDate[3]}`
}

const countFavorite = count => {
    if(count || count==0){
        return (
            <View style={{position: 'absolute', backgroundColor: '#ff7f11', bottom: 0, right: 0 , padding: 5, flexDirection: 'row', alignItems: 'center'}}>
                <Icon style={{color: "white"}} name={"star"} size={17}/>
                <Text style={{color: 'white', marginLeft: 3}}>{count}</Text>
            </View>
        )
    }
}

const BigCard = (props) => {
    const { containerStyle, viewStyle, textStyle, rowContainerStyle } = styles

    if(props.startDate) {
        return (
            <View style={rowContainerStyle}>
                <View>
                    <ProgressiveImage
                        thumbnailSource={{ uri: 'https://i.imgur.com/O249H4P.png?bust' + Math.random() }}
                        imageSource={{ uri: props.img }}
                        style={{ alignItems: 'stretch', height: 230 }}
                    />
                </View>
                <View style={viewStyle}>
                    <Text style={[textStyle, {fontWeight: 'bold'}]} numberOfLines={1}>
                        {props.description}
                    </Text>
                    <Text style={{fontSize: 13, marginTop: 4}} numberOfLines={1}>
                        เริ่ม: {dateFormat(props.startDate)} จบ: {dateFormat(props.endDate)}
                    </Text>
                </View>
            </View>
        )
    }else{
        return (
            <View style={rowContainerStyle}>
                <View>
                    <ProgressiveImage
                        thumbnailSource={{ uri: 'https://i.imgur.com/O249H4P.png?bust' + Math.random() }}
                        imageSource={{ uri: props.img }}
                        style={{ alignItems: 'stretch', height: 230 }}
                    />
                    { countFavorite(props.count_favorite) }
                </View>
                <View style={viewStyle}>
                    <Text style={textStyle} numberOfLines={2}>
                        {props.description}
                    </Text>
                </View>
            </View>
        )
    }
}

const HalfScreenCard = (props) => {
    const { halfCardContainer, textStyle } = styles
    const {height, width} = Dimensions.get('window')
    
    return (
        <View style={halfCardContainer}>
            <View>
                <ImageModal style={{marginBottom: 12,}} height={140} img={props.content.assets.picture[0]} />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{padding: 13, fontSize: 15}} numberOfLines={2}>
                    {props.content.event_name}
                </Text>
            </View>
        </View>
    )
}

const EmptyCard = (props) => {
    const { containerStyle, viewStyle, textStyle, EmptyCardStyle } = styles

    return (
        <View style={[EmptyCardStyle, props.style]}>
            <View style={{ alignItems: 'center', marginTop: 5 }}>
                {props.children}
            </View>
        </View>
    )
}

const {height, width} = Dimensions.get('window')
                
const styles = {
    containerStyle: {
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 12,
        height: 90,
        flexDirection: 'row',
        backgroundColor: '#FEFEFF'
    },
    rowContainerStyle: {
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 12,
        marginTop: 12,
        height: 300,
        backgroundColor: '#FEFEFF'
    },
    viewStyle: {
        padding: 15,
        height: 100,
        flex: 1,
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 16
    },
    halfCardContainer: {
        height: 220,
        width: width/2-20,
        marginLeft: 12,
        marginRight: 4,
        marginBottom: 12,
        borderColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    EmptyCardStyle: {
        marginTop: 10,
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 12,
        backgroundColor: '#FEFEFF'
    }
}

export { Card, BigCard, HalfScreenCard, EmptyCard }