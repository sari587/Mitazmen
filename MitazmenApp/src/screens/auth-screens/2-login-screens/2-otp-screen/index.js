import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import {
    CodeField,
    Cursor,
} from 'react-native-confirmation-code-field'
import BackButton from '../../../../components/back-button'
import RoundBlueButton from '../../../../components/round-blue-button'
import RouteNames from '../../../../services/contants/route-names'
import styles from './styles'
const OtpScreen = ({ navigation }) => {
    const [CELL_COUNT] = useState(4)
    const [pinCode, setPinCode] = useState('')
    const onChangeText = (text) => {
        setPinCode(text)
    }
    const onLoginPress = () => {
        navigation.navigate(RouteNames.locationScreen)
    }
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false} >
            <View style={styles.container}>
                <BackButton
                    navigation={navigation}
                    title="Login / Signup"
                />
                <Text style={styles.header}>
                    Enter Verification Code
                </Text>
                <Text style={styles.detailText}>
                    We have sent you a 4-digit verification code on
                </Text>
                <Text style={styles.phoneNumberText}>
                    +91 1234567890
                </Text>
                <View style={styles.root}>
                    <CodeField
                        value={pinCode}
                        onChangeText={onChangeText}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                            >
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        )}
                    />
                </View>
                <Text style={styles.timerText} >
                    00:28
                </Text>
                <RoundBlueButton
                    title="LOGIN"
                    onPress={onLoginPress}
                    style={styles.button}
                />
            </View>
        </ScrollView>
    )
}
export default OtpScreen