import React, { Proptype } from 'react'
import { View, Text } from 'react-native'

const Content = () => {
    const { viewStyle, textStyle } = styles
    return (
        <View style={viewStyle}>
            <Text style={textStyle} numberOfLines={2}>
                คณะเทคโนโลยีสารสนเทศ (SIT) ร่วมกับบริษัทอินเตอรฺ์ลิ้งค์ คอมมิวนิเคชั่น จำกัด (มหาชน) ผู้นำธุรกิจสายสัญญาณคอมพิวเตอร์และสื่อสารโทรคมนาคม  ได้จัดกิจกรรม Link Campus Cabling 2017 ในหัวข้อ "Open Cabling System for the Future" ให้กับนักศึกษา SIT 
            </Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        padding: 15,
        height: 100
    },
    textStyle: {
        fontSize: 12
    }
}

export { Content }