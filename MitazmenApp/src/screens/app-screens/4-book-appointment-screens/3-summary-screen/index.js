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
const AppointmentSummaryScreen = ({ navigation }) => {
    const [currentPosition] = useState(2)
    const [selectedOption, setSelectedOption] = useState(0)
    const [staff, setStaff] = useState([1, 2, 3, 4])
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
                    Review & Confirm
                </Text>
                <View style={styles.bottomSheetContainer} >
                    <View style={styles.detailContainer}>
                        <View style={styles.row} >
                            <Icon type='entypo' name='back-in-time' size={responsiveFontSize(2.5)} color={colors.appColorLightBlue} />
                            <Text style={styles.itemHeaderStyle}>
                                Picking Time:
                            </Text>
                            <Text style={styles.itemDetailStyle}>
                                {moment().format('hh:mm A, DD MMM, YYYY')}
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.itemDetailStyle}>
                                Change
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.detailContainer}>
                        <View style={styles.row} >
                            <Icon type='feather' name='scissors' size={responsiveFontSize(2.5)} color={colors.appColorLightBlue} />
                            <Text style={styles.itemHeaderStyle}>
                                Barber Shop:
                            </Text>
                            <Text style={styles.itemDetailStyle}>
                                Red Chair
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.itemDetailStyle}>
                                Change
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.detailContainer}>
                        <View style={styles.row} >
                            <Icon type='feather' name='scissors' size={responsiveFontSize(2.5)} color={colors.appColorLightBlue} />
                            <Text style={styles.itemHeaderStyle}>
                                Service:
                            </Text>
                            <Text style={styles.itemDetailStyle}>
                                Hair Cut
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.itemDetailStyle}>
                                Change
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.detailContainer}>
                        <View style={styles.row} >
                            <Icon type='entypo' name='location-pin' size={responsiveFontSize(2.5)} color={colors.appColorLightBlue} />
                            <Text style={styles.itemHeaderStyle}>
                                Location:
                            </Text>
                            <Text style={styles.itemDetailStyle}>
                                Some Place, Pune
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.itemDetailStyle}>
                                Change
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.detailContainer, { marginBottom: responsiveHeight(2) }]}>
                        <View style={styles.row} >
                            <Icon type='font-awesome-5' name='hand-scissors' size={responsiveFontSize(2.5)} color={colors.appColorLightBlue} />
                            <Text style={styles.itemHeaderStyle}>
                                Barber:
                            </Text>
                            <Text style={styles.itemDetailStyle}>
                                Some Dude Pavan
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.itemDetailStyle}>
                                Change
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.titleStyle}>
                    Add Booking Notes
                </Text>
                <Text style={[styles.itemDetailStyle, {marginLeft: responsiveWidth(5), marginVertical: responsiveHeight(1)}]}>
                    Include comments or hairstyle reference if you wish
                </Text>
                <TextInput
                    multiline
                    numberOfLines={3}
                    placeholder="Type message..."
                    placeholderTextColor={colors.appColorGreyText}
                    style={styles.textInput}
                />
                <View style={styles.servicesSelectedContainer} >
                    <Text style={styles.focusedText} >
                        Total cost INR 400
                    </Text>
                    <TouchableOpacity style={styles.bookAppointmentContainer} onPress={() => navigation.navigate(RouteNames.appointmentPaymentScreen)} >
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



export default AppointmentSummaryScreen;
