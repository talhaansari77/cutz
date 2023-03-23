import constants from "../constants"
export const SignupActions=(payload)=>{
    return {type:constants.SIGNUP,payload:payload}
}
export const LoginActions=(payload)=>{
    return {type:constants.LOGIN,payload:payload}

}