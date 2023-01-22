import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as Auth from '../../screens/auth-screens'
import RouteNames from '../contants/route-names'
const Stack = createStackNavigator();
const options = {
    headerShown: false
}
const AuthNavigationStack = () => {
    return (
        <Stack.Navigator screenOptions={options}>
            <Stack.Screen name={RouteNames.introScreen} component={Auth.AppIntroScreen} />

            <Stack.Screen name={RouteNames.phoneNumberScreen} component={Auth.PhoneNumberScreen} />
            <Stack.Screen name={RouteNames.otpScreen} component={Auth.OtpScreen} />
            <Stack.Screen name={RouteNames.locationScreen} component={Auth.LocationSelectScreen} />
        </Stack.Navigator>
    );
}
export default AuthNavigationStack