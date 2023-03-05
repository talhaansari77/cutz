import { StyleSheet, Text, View,Image,Dimensions } from 'react-native'
import React from 'react'
import { images } from '../../assets/images'
import commonStyles from '../utils/CommonStyles'
import { scale, verticalScale } from 'react-native-size-matters'

const windowWidth=Dimensions.get('screen').width;
const windowHeight=Dimensions.get('screen').height;


const CustomLogo = (props) => {
  return (
    <View style={{width: props.width ||"100%" ,height:props.height || scale(250),alignSelf:"center",}}>
        <Image  resizeMode={props.resizeMode ||"cover"} source={ props.logo?images.logo: images.mainLogo} style={commonStyles.img}/>
    </View>
  )
}

export default CustomLogo

const styles = StyleSheet.create({})