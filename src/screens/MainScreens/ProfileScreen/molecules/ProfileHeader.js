import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfilePhoto from '../../../../components/ProfilePhoto'
import CustomText from '../../../../components/CustomText'
import { colors } from '../../../../utils/Colors'
import { scale, verticalScale } from 'react-native-size-matters'
import SepratorLine from '../../../../components/SepratorLine'

const ProfileHeader = () => {
  return (
      <>
        <View style={{flexDirection:"row",alignItems:"center",paddingVertical:verticalScale(12)}}>
        <ProfilePhoto addPhoto/>
        <View style={{marginLeft:scale(15)}}>
        <CustomText
          label="Username"
          fontFamily="bold"
          fontSize={18}
          color={colors.lightGray}
        />
          <CustomText
          label="Welcome to Cutz"
        //   fontFamily=""
          fontSize={14}
          color={colors.lightGray}
        />

        </View>
    </View>
      </>
  
  )
}

export default ProfileHeader

const styles = StyleSheet.create({})