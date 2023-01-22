import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import colors from '../../services/contants/colors'
import styles from './styles';
const HeaderBackButton = ({ containerStyle, iconStyle, titleStyle, title, navigation }) => {
    const onBackPress = () => {
        navigation.goBack()
    }
    return (
        <View style={[styles.container, containerStyle]}>
            <TouchableOpacity onPress={onBackPress}>
                <Icon
                    type='font-awesome-5'
                    size={responsiveFontSize(4)}
                    name="arrow-circle-left"
                    color={colors.appColorLightBlue}
                    style={iconStyle}
                />
            </TouchableOpacity>
            <Text style={styles.titleStyle} >
                {title}
            </Text>
            <Text style={styles.titleStyle} >
                {'    '}
            </Text>
        </View>
    );
}
export default HeaderBackButton