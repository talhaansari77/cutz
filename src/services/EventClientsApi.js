import axios from "axios";
import Toast from "react-native-root-toast";
import { URLS } from "./Urls";

export const GetClientEvent = async (token) => {
  console.log("ClietnToken", token);
  try {
    return await axios.get(`${URLS.BASE_URL}${URLS.GET_CLIENT}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (error) {}
};

export const GetVolunteerEvent = async (token) => {
  console.log("ClietnToken", token);
  try {
    return await axios.get(`${URLS.BASE_URL}${URLS.GET_VOLUNTEER}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (error) {}
};
export const GetEvent = async () => {
  try {
    return await axios.get(`${URLS.BASE_URL}${URLS.GET_EVENTS}`, {
      headers: {
        Accept: "application/json",
      },
    });
    z;
  } catch (error) {}
};

export const UpdateVolunteerEvent = async (
  token,
  data,
  AuthUser,
  dispatch,
  setLoading
) => {
  const options = {
    method: "PATCH",
    url: `${URLS.BASE_URL}${URLS.GET_VOLUNTEER}`,
    headers: { Authorization: "Bearer " + token },
    data: data,
  };
  setLoading(true);

  try {
    await axios
      .request(options)
      .then(async function (response) {
        console.log("userCreated", response?.message);
        if (response) {
          // setLoading(false);
          const res = await GetVolunteerEvent(token);
          const data = res?.data;
          data["token"] = token;
          data["currentUser"] = AuthUser.checkUser;
          setLoading(false);

          Toast.show("Profile is updated");
          console.log("UpdatedData", JSON.stringify(data, null, 2));

          dispatch(LoginActions(data));
          //   return res
        } else {
          Toast.show("something wrong");
          setLoading(false);

          console.log("AccountExist");
        }
      })
      .catch((error) => {
        setLoading(false);
        // Toast.show("Account is already exist");
      });

    return res;
  } catch (error) {
    return error;
  }
};

export const DeleteVolunteerEvent = async (token) => {
  try {
    return await axios.delete(`${URLS.BASE_URL}${URLS.GET_VOLUNTEER}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (error) {}
};

export const UpdateClientEvent = async (
  token,
  data,
  AuthUser,
  dispatch,
  setLoading
) => {
  console.log("TokenData", token);
  const options = {
    method: "PATCH",
    url: `${URLS.BASE_URL}${URLS.GET_CLIENT}`,
    headers: { Authorization: "Bearer " + token },
    data: data,
  };
  setLoading(true);

  try {
    await axios
      .request(options)
      .then(async function (response) {
        // console.log("userCreated", response?.message);
        if (response) {
          const res = await GetClientEvent(token);
          const data = res?.data;
          data["token"] = token;
          data["currentUser"] = AuthUser.checkUser;
          Toast.show("Profile is updated");
          console.log("UpdatedData", JSON.stringify(data, null, 2));
          setLoading(false);

          dispatch(LoginActions(data));
          //   return res
        } else {
          setLoading(false);


          Toast.show("something wrong");

          console.log("AccountExist");
        }
      })
      .catch((error) => {
        setLoading(false);
        // Toast.show("Account is already exist");
      });

    return res;
  } catch (error) {
    return error;
  }
};

export const DeleteClientEvent = async (token) => {
  try {
    return await axios.delete(`${URLS.BASE_URL}${URLS.GET_CLIENT}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (error) {}
};
