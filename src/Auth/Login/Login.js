import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomLogo from '../../components/CustomLogo'
import { Spacer } from '../../components/Spacer'
import CustomTextInput from '../../components/CustomTextInput'
import LoginBody from './molecules/LoginBody'
import LoginBottom from './molecules/LoginBottom'
import commonStyles from '../../utils/CommonStyles'
import { verticalScale } from 'react-native-size-matters'


const Login = ({navigation,route}) => {
    const [checkUser, setCheckUser] = useState("Client");

    const user=route?.params?.checkUser
    console.log("user",user)
  return (
    <SafeAreaView style={{...commonStyles.commonMain,paddingHorizontal:20}}>
        {/* <ScrollView> */}
        <Spacer height={50} />
        <CustomLogo   />
        <LoginBody 
         setCheckUser={setCheckUser}
         checkUser={checkUser}
         navigation={navigation}
        user={user}/>

        {/* </ScrollView> */}
   

    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({})