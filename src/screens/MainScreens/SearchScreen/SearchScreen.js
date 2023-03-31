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
import { getEvents } from "../../../services/Events";

const SearchScreen = ({ navigation }) => {
  const focused = useIsFocused();

  const [events, setEvents] = useState([]);
  const [eventType, setEventType] = useState([]);
  const [orgData, setOrgData] = useState("");
  const [eventData, setEventData] = useState("");
  const [organizationName, setOrganizationName] = useState([]);
  const [search, setSearch] = useState("");
  const [searchError, setSearchError] = useState(false);

  useEffect(() => {
    getEventData();
  }, [focused]);

  console.log("eventType", events);

  const getEventData = async () => {
    const orgName = [];
    const eventType = [];
    //  console.log("EventData", resp?.data)
    getEvents().then((r) => {
      let data = r.data;
      data.forEach((item) => {
        orgName.push({
          name: item.organization,
        });
      });
      data.forEach((item) => {
        eventType.push({
          name: item.eventType,
        });
      });
     
    });
  

    setEventType(eventType);
    setOrganizationName(orgName);
  };
  useEffect(() => {
    onSearchEvents();
  }, [orgData, eventData]);
  const onSearchEvents = async (txt) => {
    // const resp = await GetEvent();
    getEvents().then((r) => {
      let data = r.data;
      if (eventData) {
        const eventTypes = data.filter((item) => {
          return item?.eventType == eventData;
        });

        if (eventTypes.length != 0) {
          console.log("EventsFilter", eventTypes);

          setTimeout(() => {
            navigation.navigate("Welcome", { data: eventTypes });
          }, 1000);
          setEventData("")
          setSearchError(false);
        } else {
          setEventData("")

          setSearchError(true);
        }
      } else if (orgData) {
        const companyData = data.filter((item) => {
          return item?.organization == orgData;
        });

        if (companyData.length != 0) {
          console.log("filterOrg", companyData);

          setTimeout(() => {
            navigation.navigate("Welcome", { data: companyData });
          }, 1000);
          setOrgData("")

          setSearchError(false);
        } else {
          setOrgData("")

          setSearchError(true);
        }
      }
    });
    // if (eventData) {
    //   const filterEvents = resp?.data?.filter((item) => {
    //     return item?.eventType == eventData;
    //   });

    //   if (filterEvents.length != 0) {
    //     console.log("EventsFilter", filterEvents);

    //     setTimeout(() => {
    //       navigation.navigate("Welcome", { data: filterEvents });
    //     }, 1000);
    //     setSearchError(false);
    //   } else {
    //     setSearchError(true);
    //   }
    // }
    // else if (orgData) {
    //   const filterOrg = resp?.data?.filter((item) => {
    //     return item?.organization == orgData;
    //   });
    //   if (filterOrg.length != 0) {
    //     console.log("filterOrg", filterOrg);

    //     setTimeout(() => {
    //       navigation.navigate("Welcome", { data: filterOrg });
    //     }, 1000);

    //     setSearchError(false);
    //   } else {
    //     setSearchError(true);
    //   }
    // }
  };
  const onSearchText = (txt) => {
    setSearchError(false);

    setSearch(txt);
  };
  const onPressSearch = async () => {
    if (search.length == 0) {
      return;
    } else {
      getEvents().then((r) => {
        let data = r.data;
        const filterSearch = data.filter((item) => {
          return `${item?.house} ${item?.place}  ${item?.zip}`
            .toLowerCase()
            .trim()
            .includes(search.toLowerCase().trim());
        });
        if (filterSearch.length != 0) {
          // console.log("filterSearchYahai", filterSearch);
  
          setTimeout(() => {
            navigation.navigate("Welcome", { data: filterSearch });
          }, 1000);
          setSearchError(false);
        } else {
          setSearchError(true);
        }
       
       
      });
     
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

        <SearchBody
          onChangeText={onSearchText}
          search={search}
          onRightPress={onPressSearch}
        />
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
              label={
                searchError
                  ? "Hmmm,  we’re not getting any results Our bad - try another search "
                  : "Search Events"
              }
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
