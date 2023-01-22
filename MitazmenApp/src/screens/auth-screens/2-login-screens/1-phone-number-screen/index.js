import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, } from 'react-native'
import CountryPicker from 'react-native-country-picker-modal'
import images from '../../../../assets/images'
import RoundBlueBorderButton from '../../../../components/round-blue-border-button'
import RoundBlueButton from '../../../../components/round-blue-button'
import RouteNames from '../../../../services/contants/route-names'
import styles from './styles'
const PhoneNumberScreen = ({ navigation }) => {
    const [countryCode, setCountryCode] = useState('IN')
    const [country, setCountry] = useState(null)
    const [withCountryNameButton, setWithCountryNameButton] = useState(false)
    const [withFlag, setWithFlag] = useState(true)
    const [withEmoji, setWithEmoji] = useState(true)
    const [withFilter, setWithFilter] = useState(true)
    const [withAlphaFilter, setWithAlphaFilter] = useState(false)
    const [withCallingCode, setWithCallingCode] = useState(true)
    const [showCountryPicker, setShowCountryPicker] = useState(false)
    const [callingCode, setCallingCode] = useState('91')
    const onSelect = (country) => {
        setCallingCode(country.callingCode)
        setCountryCode(country.cca2)
        setCountry(country)
    }
    const onCountrySelectPress = () => {
        setShowCountryPicker(!showCountryPicker)
    }
    const onGetOtpPress = () => {
        navigation.navigate(RouteNames.otpScreen)
    }
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false} >
            <View style={styles.container}>
                <Image source={images.logo} style={styles.logoStyle} />
                <Text style={styles.otpTitleText}>
                    Enter your mobile number to get one time pin
                </Text>
                <View style={styles.otpInputContainer}>
                    <View>
                        <CountryPicker
                            {...{
                                countryCode,
                                withFilter,
                                withFlag,
                                withCountryNameButton,
                                withAlphaFilter,
                                withCallingCode,
                                withEmoji,
                                onSelect,
                            }}
                            onClose={onCountrySelectPress}
                            withFlagButton={false}
                            visible={showCountryPicker}
                        />
                        <TouchableOpacity onPress={onCountrySelectPress} style={styles.countryPickerInputContainer} >
                            <Text style={styles.callingCodeText}>
                                + {callingCode}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style={styles.phoneInputText}
                        placeholder="Mobile Number"
                    />
                </View>
                <RoundBlueButton
                    disabled={false}
                    onPress={onGetOtpPress}
                    title="Get OTP"
                />
                <RoundBlueBorderButton
                    disabled={false}
                    title="Continue with Google"
                    style={styles.continueWithGoogleButton}
                />
            </View>
        </ScrollView>
    )
}
export default PhoneNumberScreen