//import liraries
import React, { Component, useState } from 'react'
import { View, Text, FlatList, } from 'react-native'
import HeaderBackButton from '../../../../components/header-back-button'
import MyAppointmentsCard from '../../../../components/my-appointments-card'
import styles from './styles'
const UpcomingAppointmentsScreen = ({ navigation }) => {
    const [appointments, setAppointments] = useState([
        {
            date: new Date(),
            name: 'Red Chair',
            barberName: 'Pavan Chavan',
            type: 'Hair Cut Hair Spa',
            number: '+91234567890',
        },
        {
            date: new Date(),
            name: 'Red Chair',
            barberName: 'Pavan Chavan',
            type: 'Hair Cut Hair Spa',
            number: '+91234567890',
        },
        {
            date: new Date(),
            name: 'Red Chair',
            barberName: 'Pavan Chavan',
            type: 'Hair Cut Hair Spa',
            number: '+91234567890',
        },
        {
            date: new Date(),
            name: 'Red Chair',
            barberName: 'Pavan Chavan',
            type: 'Hair Cut Hair Spa',
            number: '+91234567890',
        },
        {
            date: new Date(),
            name: 'Red Chair',
            barberName: 'Pavan Chavan',
            type: 'Hair Cut Hair Spa',
            number: '+91234567890',
        },
        {
            date: new Date(),
            name: 'Red Chair',
            barberName: 'Pavan Chavan',
            type: 'Hair Cut Hair Spa',
            number: '+91234567890',
        },
        {
            date: new Date(),
            name: 'Red Chair',
            barberName: 'Pavan Chavan',
            type: 'Hair Cut Hair Spa',
            number: '+91234567890',
        },
        {
            date: new Date(),
            name: 'Red Chair',
            barberName: 'Pavan Chavan',
            type: 'Hair Cut Hair Spa',
            number: '+91234567890',
        },
        {
            date: new Date(),
            name: 'Red Chair',
            barberName: 'Pavan Chavan',
            type: 'Hair Cut Hair Spa',
            number: '+91234567890',
        },
        {
            date: new Date(),
            name: 'Red Chair',
            barberName: 'Pavan Chavan',
            type: 'Hair Cut Hair Spa',
            number: '+91234567890',
        },
        {
            date: new Date(),
            name: 'Red Chair',
            barberName: 'Pavan Chavan',
            type: 'Hair Cut Hair Spa',
            number: '+91234567890',
        },
        {
            date: new Date(),
            name: 'Red Chair',
            barberName: 'Pavan Chavan',
            type: 'Hair Cut Hair Spa',
            number: '+91234567890',
        },
        {
            date: new Date(),
            name: 'Red Chair',
            barberName: 'Pavan Chavan',
            type: 'Hair Cut Hair Spa',
            number: '+91234567890',
        },
    ])
    const renderItem = ({ item, index }) => {
        return (
            <MyAppointmentsCard item={item} navigation={navigation} />
        )
    }
    return (
        <View style={styles.container}>
            {/* <HeaderBackButton navigation={navigation} title="My Appointments" /> */}
            <FlatList
                style={styles.flatList}
                data={appointments}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
export default UpcomingAppointmentsScreen