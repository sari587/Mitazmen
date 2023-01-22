import React, { Component, useState } from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView, TextInput } from 'react-native'
import styles from './styles'
import images from '../../../assets/images'
import { Icon } from 'react-native-elements'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import colors from '../../../services/contants/colors'
import moment from 'moment'
import { FlatList } from 'react-native-gesture-handler'
import ReviewCard from '../../../components/review-card'
import RouteNames from '../../../services/contants/route-names'
const SalonDetailScreen = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = useState(0)
    const [staff, setStaff] = useState([1, 2, 3, 4])
    const renderReviewFlatList = ({ item, index }) => {
        return (
            <ReviewCard />
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
    const renderStaffListItem = ({ item, index }) => {
        return (
            <Image style={styles.staffListItem} source={images.userImage} />
        )
    }
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.coverImage} source={images.userImage} >
                <TouchableOpacity style={styles.backIconContainer} >
                    <Icon type='feather' name='chevron-left' size={responsiveFontSize(3.5)} color={colors.appColorWhite} />
                </TouchableOpacity>
                <View style={styles.salonNameContainer} >
                    <Text style={styles.focusedText} >
                        Red Chair
                    </Text>
                    <Text style={styles.todayBookingText} >
                        Today's bookings
                    </Text>
                    <View style={styles.row}>
                        <Image style={styles.todayBookingImage} source={images.locationLogo} />
                        <Image style={styles.todayBookingImage} source={images.intro1} />
                        <Image style={styles.todayBookingImage} source={images.intro2} />
                        <Image style={styles.todayBookingImage} source={images.logo} />
                    </View>
                </View>
            </ImageBackground>
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
                                <View style={styles.bottomButtonsMainContainer} >
                                    <TouchableOpacity style={styles.messageButtonContainer} >
                                        <Icon type='ant-design' name='message1' size={responsiveFontSize(2.5)} color={colors.appColorLightBlue} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.bookAppointmentContainer} onPress={() => navigation.navigate(RouteNames.appointmentChooseServiceScreen)} >
                                        <Text style={[styles.focusedText, styles.bookAppointmentText]} >
                                            Book Appointment
                                        </Text>
                                        <Icon type='ant-design' name='arrowright' size={responsiveFontSize(2.5)} color={colors.appColorWhite} />
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
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
    )
};



//make this component available to the app
export default SalonDetailScreen;
