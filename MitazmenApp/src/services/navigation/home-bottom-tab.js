import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import * as App from '../../screens/app-screens'
import RouteNames from '../contants/route-names'
import colors from '../contants/colors'
import MyAppointmentsTabNavigation from './my-appointments-top-tab'
const Tab = createBottomTabNavigator()
const options = {
    headerShown: false,
    tabBarActiveTintColor: colors.appColorWhite,
    inactiveTintColor: colors.appColorWhite,
    tabBarActiveBackgroundColor: colors.appColorDarkBlue,
    tabBarInactiveBackgroundColor: colors.appColorDarkBlue,
    tabBarStyle: {
        backgroundColor: colors.appColorDarkBlue,
        // borderColor: 'red',
        // borderWidth:1,
        margin: 0,
        height: 60,
        paddingBottom: 5,
        paddingTop: 7,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderLeftWidth: 0.2,
        borderRightWidth: 0.2,
        borderTopWidth: 0.2,
        position: 'absolute',
        overflow: 'hidden',
    },
}
const HomeBottomTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={options} >
            <Tab.Screen name={RouteNames.homeScreen} component={App.HomeScreen} options={{ tabBarIcon: ({ focused, color, size }) => <Icon type='entypo' size={size} color={color} name="home" /> }} />
            <Tab.Screen name={RouteNames.myAppointments} component={MyAppointmentsTabNavigation} options={{ tabBarIcon: ({ focused, color, size }) => <Icon type='material' size={size} color={color} name="contact-phone" /> }} />
            <Tab.Screen name={RouteNames.messaegsScreen} component={App.MyAppointmentsScreen} options={{ tabBarIcon: ({ focused, color, size }) => <Icon type='material-community' size={size} color={color} name="facebook-messenger" /> }} />
            <Tab.Screen name={RouteNames.profileScreen} component={App.MyAppointmentsScreen} options={{ tabBarIcon: ({ focused, color, size }) => <Icon type='simple-line-icon' size={size} color={color} name="user" /> }} />
        </Tab.Navigator>
    )
}
export default HomeBottomTabNavigation