import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React,{useEffect,useState} from "react";
import commonStyles, { PH20 } from "../../../utils/CommonStyles";
import { Spacer } from "../../../components/Spacer";
import ProfilePhoto from "../../../components/ProfilePhoto";
import CustomInputs from "./molecules/CustomInputs";
import ClientEditProfile from "./molecules/ClientEditProfile";
import VolunteerEditProfile from "./molecules/VolunteerEditProfile";
import { scale } from "react-native-size-matters";
import { Avatar } from "react-native-elements";
import { images } from "../../../../assets/images";
import { icons } from "../../../../assets/icons";

const EditProfile = ({ route,navigation }) => {

  const [authUser, setAuthUser] = useState(null)

  // console.log("RoutesType",route?.params?.type?.params?.userType)

  console.log("RoutesType",authUser)


  useEffect(() => {

    setAuthUser(route?.params?.AuthUser)
 
  }, [route?.params])
  return (
    <View style={commonStyles.commonMain}>
      <ScrollView>
        <PH20>
          <Spacer height={50} />
          <View
            style={{
              height: 85,
              width: 85,
              borderRadius: 50,
              alignSelf: "center",
              zIndex: 100,
            }}
          >
            <Avatar
              source={images.userAvatar}
              rounded
              size={85}
              containerStyle={{}}
            />
            <Avatar
              source={icons.cameraPlus}
              rounded
              size={40}
              containerStyle={{
                alignSelf: "center",
                position: "absolute",
                bottom: -5,
                right: -5,
              }}
            />
          </View>

          {/* <ProfilePhoto
            width={scale(80)}
            height={scale(80)}
            addPhoto
            alignSelf="center"
          /> */}

          {authUser?.currentUser === "Client" ? (
            <ClientEditProfile   navigation={navigation}/>
          ) : (
            <VolunteerEditProfile  navigation={navigation}/>
          )}
        </PH20>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
