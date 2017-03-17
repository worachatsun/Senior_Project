import React from 'react'
import { View, Text } from 'react-native'

const BigCard = (props) => {
    const { containerStyle, viewStyle, textStyle } = styles
    return (
        <View style={containerStyle}>
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
    }
}

export { BigCard }