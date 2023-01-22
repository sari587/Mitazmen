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
const AppointmentDateAndTimeScreen = ({ navigation }) => {
    const [currentPosition] = useState(1)
    const [selectedOption, setSelectedOption] = useState(0)
    const [staff, setStaff] = useState([1, 2, 3, 4])
    const renderStaffFlatList = ({ item, index }) => {
        return (
            <StaffCard />
        )
    }
    const renderDatePickerFlatList = ({ item, index }) => {
        return (
            <DatePickerCard />
        )
    }
    const renderTimePickerFlatList = ({ item, index }) => {
        return (
            <TimerPickerCard />
        )
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <HeaderBackButton title="Book Appointment" navigation={navigation} />
                <View style={styles.stepIndicatorStyle} >
                    <StepIndicator
                        customStyles={customStyles}
                        currentPosition={currentPosition}
                        labels={labels}
                        stepCount={labels.length}
                    />
                </View>
                <Text style={styles.titleStyle}>
                    Select Staff
                </Text>
                <View>
                    <FlatList
                        data={[1, 2, 3]}
                        showsVerticalScrollIndicator={false}
                        renderItem={renderStaffFlatList}
                    />
                </View>
                <View style={styles.row} >
                    <Text style={styles.titleStyle}>
                        Select Date
                    </Text>
                </View>
                <View>
                    <FlatList
                        horizontal
                        data={[1, 2, 3, 4, 5, 6, 7]}
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderDatePickerFlatList}
                    />
                </View>
                <View style={styles.timeFlatListContainer} >
                    <FlatList
                        numColumns={4}
                        data={[1, 2, 3, 4, 5, 6, 7, 8,]}
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderTimePickerFlatList}
                    />
                </View>
                <View style={styles.servicesSelectedContainer} >
                    <View>
                        <Text style={styles.timeHeaderText} >
                            2 Service
                        </Text>
                        <Text style={styles.focusedText} >
                            INR 400
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.bookAppointmentContainer} onPress={() => navigation.navigate(RouteNames.appointmentSummaryScreen)} >
                        <Text style={[styles.focusedText, styles.bookAppointmentText]} >
                            Continue
                        </Text>
                        <Icon type='ant-design' name='arrowright' size={responsiveFontSize(2.5)} color={colors.appColorWhite} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};



export default AppointmentDateAndTimeScreen;
