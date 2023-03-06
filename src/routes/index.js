import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer,} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AuthStack from './AuthStack/AuthStack'

const RootNavigator = () => {
    const Stack=createStackNavigator()
  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false,}}>
              <Stack.Screen name='AuthStack' component={AuthStack}/>


          </Stack.Navigator>


      </NavigationContainer>
  )
   
}

export default RootNavigator

const styles = StyleSheet.create({})