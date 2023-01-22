import React, { useState } from 'react';
import { View, Text, Linking, ScrollView, TouchableOpacity } from 'react-native';
import StepIndicator from 'react-native-step-indicator'
import styles from './styles';
import HeaderBackButton from '../../../../components/header-back-button'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { customStyles, labels } from '../../../../services/contants/appointment-steps';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'
import { Icon } from 'react-native-elements';
import colors from '../../../../services/contants/colors';
import RouteNames from '../../../../services/contants/route-names'
const AppointmentPaymentScreen = ({ navigation }) => {
    const [currentPosition] = useState(3)
    const onPress = () => {
        navigation.navigate(RouteNames.appointmentConfirmationScreen)
    }
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false} >
            <View style={styles.container}>
                <HeaderBackButton
                    navigation={navigation}
                    title="Select Payment Method"
                />
                <View style={styles.stepIndicatorStyle} >
                    <StepIndicator
                        customStyles={customStyles}
                        currentPosition={currentPosition}
                        labels={labels}
                        stepCount={labels.length}
                    />
                </View>
                <View style={styles.optionsContainer} />
                <TouchableOpacity style={styles.option} onPress={onPress} >
                    <View style={styles.row}>
                        <Icon type='fontisto' name='shopping-store' color={colors.appColorLightBlue} size={responsiveFontSize(2.5)} />
                        <Text style={styles.optionText} >
                            Pay at Store
                        </Text>
                    </View>
                    {/* <AntDesign name="right" size={responsiveFontSize(2.5)} /> */}
                </TouchableOpacity>
                <View style={styles.optionsContainer} />
                <Text style={styles.header}>
                    Debit or Credit Card
                </Text>
                <TouchableOpacity style={styles.option} onPress={onPress} >
                    <View style={styles.row}>
                        <Icon type='font-awesome' name='credit-card' color={colors.appColorLightBlue} size={responsiveFontSize(2.5)} />
                        <Text style={styles.optionText} >
                            Add a card
                        </Text>
                    </View>
                    <AntDesign name="right" size={responsiveFontSize(2.5)} />
                </TouchableOpacity>
                <View style={styles.optionsContainer} />
                <Text style={styles.header}>
                    Wallet
                </Text>
                <TouchableOpacity style={styles.option} onPress={onPress}>
                    <View style={styles.row}>
                        <Icon type='font-awesome' name='paypal' color={colors.appColorLightBlue} size={responsiveFontSize(2.5)} />
                        <Text style={styles.optionText} >
                            PayPal
                        </Text>
                    </View>
                    <AntDesign name="right" size={responsiveFontSize(2.5)} />
                </TouchableOpacity>
                <Text style={styles.header}>
                    UPI
                </Text>
                <TouchableOpacity style={styles.option} onPress={onPress} >
                    <View style={styles.row}>
                        <Icon type='font-awesome-5' name='google-pay' color={colors.appColorLightBlue} size={responsiveFontSize(2.5)} />
                        <Text style={styles.optionText} >
                            Google Pay
                        </Text>
                    </View>
                    <AntDesign name="right" size={responsiveFontSize(2.5)} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={onPress} >
                    <View style={styles.row}>
                        <Icon type='fontisto' name='payu' color={colors.appColorLightBlue} size={responsiveFontSize(2.5)} />
                        <Text style={styles.optionText} >
                            Pay via another UPI ID
                        </Text>
                    </View>
                    <AntDesign name="right" size={responsiveFontSize(2.5)} />
                </TouchableOpacity>
                <View style={styles.optionsContainer} />
            </View>
        </ScrollView>
    )
}
export default AppointmentPaymentScreen