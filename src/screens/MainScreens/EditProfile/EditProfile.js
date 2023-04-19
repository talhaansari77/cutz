import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
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
import * as ImagePicker from "expo-image-picker";
import Loader from "../../../utils/Loader";
import loaderAnimation from "../../../../assets/Loaders/index";


export const onClickImage = async (setImageUri,setImage) => {
  try {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      includeBase64: true,
      // base64: true,
    });
    if (result) {
      setImageUri(result);
      setImage(result.uri);
      // console.log("ResulteImageData",result.type)
    } else {
      setImageUri("");
    }
  } catch (error) {
    console.log("Error reading an image", error);
  }
};
const EditProfile = ({ route, navigation }) => {
  const [authUser, setAuthUser] = useState(null);
  const [imageUri, setImageUri] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  // console.log("RoutesType",route?.params?.type?.params?.userType)
  console.log("ImageAssets", authUser);
  useEffect(() => {
    // setImage(route?.params?.AuthUser?.profilePicture)
    setImage(route?.params?.AuthUser?.profilePicture);

    setAuthUser(route?.params?.AuthUser);
  }, [route?.params]);
  console.log("ImageUrl", image);
 
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
              // zIndex: 100,
            }}
          >
            {image ? (
              <>
                <Image
                  source={{ uri: image }}
                  resizeMode="contain"
                  style={{
                    height: 85,
                    width: 85,
                    borderRadius: 50,
                  }}
                />

                <TouchableOpacity activeOpacity={0.6} onPress={()=>{
                  onClickImage(setImageUri,setImage)

                }}>
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
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Avatar
                  source={images.userAvatar}
                  rounded
                  size={85}
                  containerStyle={{}}
                />

                <TouchableOpacity activeOpacity={0.6} onPress={()=>{
                                    onClickImage(setImageUri,setImage)


                }}>
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
                </TouchableOpacity>
              </>
            )}
          </View>

          {/* <ProfilePhoto
            width={scale(80)}
            height={scale(80)}
            addPhoto
            alignSelf="center"
          /> */}

          {authUser?.currentUser === "Client" ? (
            <ClientEditProfile
              setLoading={setLoading}
              imageUri={imageUri}
              setImageUri={setImageUri}
              navigation={navigation}
            />
          ) : (
            <VolunteerEditProfile
              navigation={navigation}
              setLoading={setLoading}
              imageUri={imageUri}
              setImageUri={setImageUri}
            />
          )}
          <Spacer height={30} />
        </PH20>
      </ScrollView>
      {/* <Loader loading={loading}/> */}
      <Loader file={loaderAnimation} loading={loading} />
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
