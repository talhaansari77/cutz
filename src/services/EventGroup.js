import axios from "axios";
import Toast from "react-native-root-toast";
import { URLS } from "./Urls";

export const getEventGroup = async (id) => {
    console.log(id)
  try {
    return await axios.get(`${URLS.BASE_URL}${URLS.EVENT_GROUP}${"/"+id+"?"}`);
  } catch (error) {}
};
