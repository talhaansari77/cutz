import axios from "axios";
import { URLS } from "./Urls";

export const GetClientEvent = async (token) => {
    console.log("ClietnToken",token)
  try {
    return await axios.get(`${URLS.BASE_URL}${URLS.GET_CLIENT}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (error) {}
};
export const GetVolunteerEvent = async (token) => {
  console.log("ClietnToken",token)
try {
  return await axios.get(`${URLS.BASE_URL}${URLS.GET_VOLUNTEER}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
} catch (error) {}
};
