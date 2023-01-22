import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView, TextInput } from 'react-native';
import StepIndicator from 'react-native-step-indicator'
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'
import moment from 'moment'
import { Icon } from 'react-native-elements';
import styles from './styles';
import HeaderBackButton from '../../../../components/header-back-button'
import { labels, customStyles } from '../../../../services/contants/appointment-steps';
import images from '../../../../assets/images';
import colors from '../../../../services/contants/colors';
import ReviewCard from '../../../../components/review-card';
import ServiceCard from '../../../../components/service-type-card';
import RouteNames from '../../../../services/contants/route-names'
import StaffCard from '../../../../components/staff-card';
import DatePickerCard from '../../../../components/date-picker-item';
import TimerPickerCard from '../../../../components/time-picker-item';
const AppointmentConfirmationScreen = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <Image source={images.confirmation} style={styles.image} />
                <Text style={styles.confirmedTitle}>
                    Booking Confirmed!
                </Text>
                <Text style={styles.confirmDetailText}>
                    A confirmation message has been sent to your registered phone number
                </Text>
                <View style={styles.bottomSheetContainer} >
                    <Text style={styles.titleStyle}>
                        Booking Details
                    </Text>
                    <View style={styles.detailContainer}>
                        <View style={styles.row} >
                            <Text style={styles.itemHeaderStyle}>
                                Booking ID:
                            </Text>
                            <Text style={styles.itemDetailStyle}>
                                12345
                            </Text>
                        </View>
                    </View>
                    <View style={styles.detailContainer}>
                        <View style={styles.row} >
                            <Text style={styles.itemHeaderStyle}>
                                Salon Name:
                            </Text>
                            <Text style={styles.itemDetailStyle}>
                                Red Chair
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.detailContainer, { marginBottom: responsiveHeight(2) }]}>
                        <View style={styles.row} >
                            <Text style={styles.itemHeaderStyle}>
                                Appointment Date & Time:
                            </Text>
                            <Text style={styles.itemDetailStyle}>
                                {moment().format('DD MMM, hh:mm A')}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.servicesSelectedContainer} >
                    <TouchableOpacity style={styles.bookAppointmentContainer} onPress={() => navigation.navigate(RouteNames.homeBottomTab)} >
                        <Text style={styles.focusedText} >
                            Finish
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};



export default AppointmentConfirmationScreen;
