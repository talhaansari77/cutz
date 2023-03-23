import constants from "../constants";
const initialState = {
  authState: {},
};

const authReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case constants.SIGNUP: {
      let SignupState = { ...state, authState: actions.payload };
      return SignupState;
    }
    case constants.LOGIN: {
      let LoginState = { ...state, authState: actions.payload };
      return LoginState;
    }
    default:
      return state;
  }
};

export default authReducers;
