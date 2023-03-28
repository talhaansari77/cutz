import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import AppHeader from "../../../components/AppHeader";
import commonStyles, { PH20 } from "../../../utils/CommonStyles";
import SearchHeader from "./molecules/SearchHeader";
import { Spacer } from "../../../components/Spacer";
import SearchBody from "./molecules/SearchBody";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/Colors";
import { icons } from "../../../../assets/icons";
import { useIsFocused } from "@react-navigation/native";
import { scale } from "react-native-size-matters";
import { GetEvent } from "../../../services/EventClientsApi";

const SearchScreen = ({ navigation }) => {
  const focused = useIsFocused();

  const [events, setEvents] = useState([]);
  const [eventType, setEventType] = useState([]);
  const [orgData, setOrgData] = useState("");
  const [eventData, setEventData] = useState("");
  const [organizationName, setOrganizationName] = useState([]);

  useEffect(async () => {
    getEvents();
  }, [focused]);

  console.log("eventType", events);

  const getEvents = async () => {
    const orgName = [];
    const eventType = [];
    const resp = await GetEvent();
    //  console.log("EventData", resp?.data)

    resp?.data.forEach((item) => {
      orgName.push({
        name: item.organization,
      });
    });
    resp?.data.forEach((item) => {
      eventType.push({
        name: item.eventType,
      });
    });

    setEventType(eventType);
    setOrganizationName(orgName);
  };
  useEffect(() => {
    onSearchEvents();
  }, [orgData, eventData]);
  const onSearchEvents = async (txt) => {
    const resp = await GetEvent();
    if (eventData) {
      const filterEvents = resp?.data?.filter((item) => {
        return item?.eventType == eventData;
      });
      if (filterEvents.length != 0) {
        console.log("EventsFilter", filterEvents);
        navigation.navigate("Welcome", { data: filterEvents });
      }
    } else if (orgData) {
      const filterOrg = resp?.data?.filter((item) => {
        return item?.organization == orgData;
      });
      if (filterOrg.length != 0) {
        console.log("filterOrg", filterOrg);

        navigation.navigate("Welcome", { data: filterOrg });
      }
    }
  };
  return (
    <SafeAreaView style={commonStyles.commonMain}>
      <Spacer height={Platform.OS == "ios" ? 0 : 30} />
      <AppHeader />
      <PH20>
        <Spacer height={10} />
        <SearchHeader
          organizationName={organizationName}
          eventType={eventType}
          setEventData={setEventData}
          setOrgData={setOrgData}
        />
        <Spacer height={20} />

        <SearchBody />
        <View style={{ paddingTop: "50%" }}>
          <View style={styles.circle}>
            <Image
              resizeMode="contain"
              source={icons.searchSome}
              style={{ width: 60, height: 60 }}
            />
          </View>
          <Spacer height={20} />
          <View
            style={{ width: "80%", alignSelf: "center", alignItems: "center" }}
          >
            <CustomText
              color={colors.secondary}
              fontSize={14}
              // marginRight={20}
              textAlign="center"
              label="Search Events"
            />
          </View>
        </View>
      </PH20>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  circle: {
    width: scale(100),
    height: scale(100),
    borderWidth: 4,
    borderRadius: 100,
    borderColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});
