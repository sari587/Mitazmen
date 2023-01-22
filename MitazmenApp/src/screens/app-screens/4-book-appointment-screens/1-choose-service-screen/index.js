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
const ChooseServiceScreen = ({ navigation }) => {
    const [currentPosition] = useState(0)
    const [selectedOption, setSelectedOption] = useState(0)
    const [staff, setStaff] = useState([1, 2, 3, 4])
    const renderReviewFlatList = ({ item, index }) => {
        return (
            <ReviewCard />
        )
    }
    const renderServicesFlatList = ({ item, index }) => {
        return (
            <ServiceCard />
        )
    }
    const renderStaffListItem = ({ item, index }) => {
        return (
            <Image style={styles.staffListItem} source={images.userImage} />
        )
    }
    const reviewFooter = () => {
        return (
            <View style={[styles.callCheckMainContainer, styles.reviewInputMainContainer]} >
                <TextInput style={styles.reviewInput} placeholder="Write a review" placeholderTextColor={colors.appColorGreyText} />
                <TouchableOpacity style={styles.sendButtonContainer} >
                    <Icon type='feather' name='send' size={responsiveFontSize(2.5)} color={colors.appColorWhite} />
                </TouchableOpacity>
            </View>
        )
    }
    return (
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
                Red Chair Salon
            </Text>
            <View style={styles.bottomSheetContainer} >
                <View style={[styles.experienceContainer, styles.tabBarContainer]}>
                    <TouchableOpacity onPress={() => setSelectedOption(0)} style={selectedOption == 0 ? styles.focusedCell : styles.unfocusedCell} >
                        <Text style={selectedOption == 0 ? styles.focusedText : styles.unfocusedText}>
                            About
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedOption(1)} style={selectedOption == 1 ? styles.focusedCell : styles.unfocusedCell} >
                        <Text style={selectedOption == 1 ? styles.focusedText : styles.unfocusedText}>
                            Services
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedOption(2)} style={selectedOption == 2 ? styles.focusedCell : styles.unfocusedCell} >
                        <Text style={selectedOption == 2 ? styles.focusedText : styles.unfocusedText}>
                            Reviews
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.aboutMainContainer} >
                    {
                        selectedOption == 0 && (
                            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, }} >
                                <View>
                                    <View style={styles.timeInfoMainContainer} >
                                        <View style={styles.row} >
                                            <View style={styles.messageButtonContainer} >
                                                <Icon type='feather' name='clock' size={responsiveFontSize(3.5)} color={colors.appColorLightBlue} />
                                            </View>
                                            <View>
                                                <Text style={styles.timeHeaderText} >
                                                    Time
                                                </Text>
                                                <Text style={styles.timeDetailText}>
                                                    {moment().format('hh:mm a')} - {moment().format('hh:mm a')}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={styles.row} >
                                            <View style={styles.messageButtonContainer} >
                                                <Icon type='evilicon' name='location' size={responsiveFontSize(3.5)} color={colors.appColorLightBlue} />
                                            </View>
                                            <View>
                                                <Text style={styles.timeHeaderText} >
                                                    Location
                                                </Text>
                                                <Text style={styles.timeDetailText}>
                                                    New Sangvi
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <Text style={styles.subtitleMotoText} >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non nisi nec massa vestibulum facilisis. Integer sed venenatis urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                    </Text>
                                    <Text style={styles.staffTitleText}>
                                        Our Staff
                                    </Text>
                                    <View>
                                        <FlatList
                                            horizontal
                                            showsHorizontalScrollIndicator={false}
                                            style={styles.serviceFlatListContainer}
                                            data={staff}
                                            renderItem={renderStaffListItem}
                                        />
                                    </View>
                                </View>

                            </ScrollView>
                        )
                    }
                    {
                        selectedOption == 1 && (
                            <FlatList
                                data={[1, 2, 3, 4]}
                                showsVerticalScrollIndicator={false}
                                renderItem={renderServicesFlatList}
                            />
                        )
                    }
                    {
                        selectedOption == 1 && (
                            <View style={styles.servicesSelectedContainer} >
                                <View>
                                    <Text style={styles.timeHeaderText} >
                                        2 Service
                                    </Text>
                                    <Text style={styles.focusedText} >
                                        INR 400
                                    </Text>
                                </View>
                                <TouchableOpacity style={styles.bookAppointmentContainer} onPress={() => navigation.navigate(RouteNames.appointmentDateAndTimeScreen)} >
                                    <Text style={[styles.focusedText, styles.bookAppointmentText]} >
                                        Continue
                                    </Text>
                                    <Icon type='ant-design' name='arrowright' size={responsiveFontSize(2.5)} color={colors.appColorWhite} />
                                </TouchableOpacity>
                            </View>
                        )
                    }

                    {
                        selectedOption == 2 && (
                            <FlatList
                                data={[1, 2, 3, 4]}
                                showsVerticalScrollIndicator={false}
                                ListFooterComponent={reviewFooter}
                                renderItem={renderReviewFlatList}
                            />
                        )
                    }
                </View>
            </View>
        </View>
    );
};



export default ChooseServiceScreen;
