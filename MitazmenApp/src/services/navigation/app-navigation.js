import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as App from '../../screens/app-screens'
import RouteNames from '../contants/route-names'
import HomeBottomTabNavigation from './home-bottom-tab';
const Stack = createStackNavigator();
const options = {
    headerShown: false
}

const AppNavigationStack = () => {
    return (
        <Stack.Navigator screenOptions={options}>
            <Stack.Screen name={RouteNames.homeBottomTab} component={HomeBottomTabNavigation} />

            <Stack.Screen name={RouteNames.salonListScreen} component={App.SalonListScreen} />
            <Stack.Screen name={RouteNames.salonDetailScreen} component={App.SalonDetailScreen} />

            <Stack.Screen name={RouteNames.appointmentChooseServiceScreen} component={App.ChooseServiceScreen} />
            <Stack.Screen name={RouteNames.appointmentDateAndTimeScreen} component={App.AppointementDateAndTimeScreen} />
            <Stack.Screen name={RouteNames.appointmentSummaryScreen} component={App.AppointmentSummaryScreen} />
            <Stack.Screen name={RouteNames.appointmentPaymentScreen} component={App.AppointmentPaymentScreen} />
            <Stack.Screen name={RouteNames.appointmentConfirmationScreen} component={App.AppointmentConfirmationScreen} />

            <Stack.Screen name={RouteNames.myAppointments} component={App.MyAppointmentsScreen} />

            <Stack.Screen name={RouteNames.homeServiceBarberListScreen} component={App.HomeServiceBarberListScreen} />
            <Stack.Screen name={RouteNames.homeServiceBarberDetailScreen} component={App.HomeServiceBarberDetailScreen} />

            <Stack.Screen name={RouteNames.reminderScreen} component={App.ReminderScreen} />
        </Stack.Navigator>
    );
}
export default AppNavigationStack