import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { ImageModal } from './'
import { Col, Row, Grid } from "react-native-easy-grid"

const Card = (props) => {
    const { containerStyle, viewStyle, textStyle } = styles
    
    return (
        <View style={styles.containerStyle}>
            <View>
                <Image source={{uri: props.img}} style={{resizeMode: 'stretch', width: 130, height: 90}} />
            </View>
            <View style={viewStyle}>
                <Text style={textStyle} numberOfLines={2}>
                    {props.description}
                </Text>
            </View>
        </View>
    )
}

const BigCard = (props) => {
    const { containerStyle, viewStyle, textStyle, rowContainerStyle } = styles

    return (
        <View style={rowContainerStyle}>
            <View>
                <Image source={{uri: props.img}} style={{resizeMode: 'stretch', width: null, height: 230}} />
            </View>
            <View style={viewStyle}>
                <Text style={textStyle} numberOfLines={2}>
                    {props.description}
                </Text>
            </View>
        </View>
    )
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
        fontSize: 15
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