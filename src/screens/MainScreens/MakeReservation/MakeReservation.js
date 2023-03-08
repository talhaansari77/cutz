import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MakeReservation = () => {
    const InfoText = () => (
        <View style={{ alignSelf: "center", alignItems: "center" }}>
          <CustomText label={"REVIEW RESERVATION THEN"} color={colors.secondary} />
          <CustomText label={"CONFIRM OR CANCEL"} color={colors.secondary} />
          <Spacer height={15} />
          <CustomText
            label={"DO NOT enter the property,"}
            color={colors.secondary}
          />
          <CustomText
            label={"until the time of your reservation."}
            color={colors.secondary}
          />
        </View>
      );
  return (
    <View>
      <InfoText/>
    </View>
  )
}

export default MakeReservation

const styles = StyleSheet.create({})