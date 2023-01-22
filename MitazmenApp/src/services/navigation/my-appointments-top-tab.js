import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon } from 'react-native-elements'
import * as App from '../../screens/app-screens'
import RouteNames from '../contants/route-names'
import colors from '../contants/colors'
import MyAppointmentsTopTab from '../../components/my-appointments-top-tab';
const Tab = createMaterialTopTabNavigator()
const options = {
    headerShown: true,
}
const MyAppointmentsTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={options} tabBar={props => <MyAppointmentsTopTab {...props} />} >
            <Tab.Screen
                name={RouteNames.upcomingAppointmentsScreen}
                component={App.UpcomingAppointmentsScreen}
                options={{ title: 'Upcoming' }}
            />
            <Tab.Screen
                name={RouteNames.pastAppointmentsScreen}
                component={App.PastAppointmentsScreen}
                options={{ title: 'Past' }}
            />
            <Tab.Screen
                name={RouteNames.cancelledAppointmentsScreen}
                component={App.CancelledAppointmentsScreen}
                options={{ title: 'Cancelled' }}
            />
        </Tab.Navigator>
    )
}
export default MyAppointmentsTabNavigation