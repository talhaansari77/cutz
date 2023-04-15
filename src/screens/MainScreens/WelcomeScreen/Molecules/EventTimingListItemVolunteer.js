import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors } from "../../../../utils/Colors";
import { Spacer } from "../../../../components/Spacer";
import CustomText from "../../../../components/CustomText";

const EventTimingListItemVolunteer = ({ label }) => {
  const [status, setStatus] = useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        // justifyContent:'center'
        paddingHorizontal: "20%",
        paddingVertical: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => setStatus(!status)}
        style={{
          height: 20,
          width: 20,
          backgroundColor: status ? colors.primary : colors.gray1,
        }}
      />
      <Spacer width={10} />
      <CustomText label={label} fontFamily={"semiBold"} />
    </View>
  );
};

export default EventTimingListItemVolunteer;
