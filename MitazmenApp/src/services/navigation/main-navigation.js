import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import RouteNames from "../contants/route-names"
import AppNavigationStack from "./app-navigation"
import AuthNavigationStack from './auth-navigation'
const Stack = createStackNavigator()
const options = {
    headerShown: false
}
const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={options} initialRouteName={RouteNames.auth}>
                <Stack.Screen name={RouteNames.auth} component={AuthNavigationStack} />
                <Stack.Screen name={RouteNames.app} component={AppNavigationStack} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainNavigator