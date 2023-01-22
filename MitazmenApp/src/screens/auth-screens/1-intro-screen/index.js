import React, { Component, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions"
import images from '../../../assets/images'
import RouteNames from '../../../services/contants/route-names'
import styles from './styles'

const AppIntroScreen = ({ navigation }) => {
    const [sliderItems] = useState([
        {
            title: "Book An Appointment",
            text: "Book hasle-free appointments & save your time",
            imageSource: images.intro1,
        },
        {
            title: "Get Your Groom Stylist at home",
            text: "Tired of going to the salon? Facelook provides services at home, You can avail the beauty services at home by bringing the parlour at home.",
            imageSource: images.intro2,
        },
    ])
    const [sliderSelectedIndex, setSliderSelectedIndex] = useState(0)
    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.sliderContainer}>
                <Image source={item.imageSource} style={styles.sliderImageContainer} />
            </View>
        );
    }
    const onSnapToItem = (selectedIndex) => {
        setSliderSelectedIndex(selectedIndex)
    }
    const onSkipPress = () => {
        navigation.navigate(RouteNames.phoneNumberScreen)
    }
    return (
        <View style={styles.container}>
            <Carousel
                data={sliderItems}
                renderItem={renderItem}
                sliderWidth={responsiveWidth(100)}
                itemWidth={responsiveWidth(100)}
                onSnapToItem={onSnapToItem}
            />
            <View style={styles.bottomSheetContainer} >
                <Text style={styles.titleText}>
                    {sliderItems[sliderSelectedIndex].title}
                </Text>
                <Text style={styles.detailsText} >
                    {sliderItems[sliderSelectedIndex].text}
                </Text>
                <TouchableOpacity style={styles.skipButtonContainer} onPress={onSkipPress} >
                    <Text style={styles.skipText}>
                        Skip
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default AppIntroScreen
