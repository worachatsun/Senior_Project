import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import { ImageModal } from './'
import { Col, Row, Grid } from "react-native-easy-grid"

const Card = (props) => {
    const { containerStyle, viewStyle, textStyle } = styles

    return (
        <View style={styles.containerStyle}>
            <View>
                <Image source={{uri: props.news.picture}} style={{resizeMode: 'stretch', width: 130, height: 90}} />
            </View>
            <View style={viewStyle}>
                <Text style={textStyle} numberOfLines={2}>
                    {props.news.title}
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
                {props.children}
            </View>
            <View style={viewStyle}>
                <Text style={textStyle} numberOfLines={2}>
                    คณะเทคโนโลยีสารสนเทศ (SIT) ร่วมกับบริษัทอินเตอรฺ์ลิ้งค์ คอมมิวนิเคชั่น จำกัด (มหาชน) ผู้นำธุรกิจสายสัญญาณคอมพิวเตอร์และสื่อสารโทรคมนาคม  ได้จัดกิจกรรม Link Campus Cabling 2017 ในหัวข้อ "Open Cabling System for the Future" ให้กับนักศึกษา SIT 
                </Text>
            </View>
        </View>
    )
}

const HalfScreenCard = (props) => {
    const { halfCardContainer, textStyle } = styles

    return (
        <Grid>
            <Col style={halfCardContainer}>
                <View>
                    <ImageModal height={130} img={'https://twistedsifter.files.wordpress.com/2016/07/dulmen_bornste_waldweg.jpg'} />
                    <Text style={{padding: 10, fontSize: 13}} numberOfLines={2}>คณะเทคโนโลยีสารสนเทศ (SIT) ร่วมกับบริษัทอินเตอรฺ์ลิ้งค์ คอมมิวนิเคชั่น จำกัด (มหาชน) ผู้นำธุรกิจสายสัญญาณคอมพิวเตอร์และสื่อสารโทรคมนาคม  ได้จัดกิจกรรม Link Campus Cabling 2017 ในหัวข้อ "Open Cabling System for the Future" ให้กับนักศึกษา SIT </Text>
                </View>
            </Col>
        </Grid>
    )
}

var {height, width} = Dimensions.get('window');
                
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
        height: 200,
        marginTop: 12,
        marginLeft: 10,
        marginRight: 5,
        borderColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    }
}

export { Card, BigCard, HalfScreenCard }