import React, { Component, useState } from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView, TextInput } from 'react-native'
import styles from './styles'
import images from '../../../../assets/images'
import { Icon } from 'react-native-elements'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import colors from '../../../../services/contants/colors'
import moment from 'moment'
import { FlatList } from 'react-native-gesture-handler'
import ReviewCard from '../../../../components/review-card'
const HomeServiceBarberDetailScreen = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = useState(0)
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
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.coverImage} imageStyle={{ borderRadius: 15 }} source={images.userImage} >
                <TouchableOpacity style={styles.backIconContainer} >
                    <Icon type='feather' name='chevron-left' size={responsiveFontSize(3.5)} color={colors.appColorWhite} />
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.bottomSheetContainer} >
                <View style={styles.dpContainer} >
                    <Image style={styles.displayImage} source={images.userImage} />
                    <Text style={styles.nameText} >
                        Santosh Doghde
                    </Text>
                </View>
                <View style={styles.experienceContainer}>
                    <Text style={styles.experienceText}>
                        8+ years exp
                    </Text>
                    <View style={styles.row}>
                        <Icon type='feather' name='user' color={colors.appColorGreyText} size={responsiveFontSize(2.5)} />
                        <Text style={styles.experienceText}>
                            Age 25
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Icon type='octicon' name='checklist' color={colors.appColorGreyText} size={responsiveFontSize(2.5)} />
                        <Text style={styles.experienceText}>
                            150 Bookings
                        </Text>
                    </View>
                </View>
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
                                        "Great hair doesn't happen by chance, they happen by appointment"
                                    </Text>
                                    <View style={[styles.callCheckMainContainer]} >
                                        <TouchableOpacity style={styles.callButtonContainer} >
                                            <Icon type='feather' name='phone-call' size={responsiveFontSize(2.5)} color={colors.appColorDarkGreen} />
                                            <Text style={styles.callButtonText}>
                                                Call
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <TouchableOpacity style={styles.checkButtonContainer} >
                                                <Icon type='feather' name='clock' size={responsiveFontSize(2.5)} color={colors.appColorDarkYellow} />
                                                <Text style={styles.checkButtonText}>
                                                    Check Availability
                                                </Text>
                                            </TouchableOpacity>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.bottomButtonsMainContainer} >
                                    <TouchableOpacity style={styles.messageButtonContainer} >
                                        <Icon type='ant-design' name='message1' size={responsiveFontSize(2.5)} color={colors.appColorLightBlue} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.bookAppointmentContainer} >
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
}
export default HomeServiceBarberDetailScreen