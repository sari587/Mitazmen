import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import colors from '../../services/contants/colors'
import styles from './styles';
const RoundBlueButton = ({ title, disabled, style, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[styles.container, style, disabled && { backgroundColor: colors.appColorGreyishBlue }]}>
            <Text style={styles.titeText}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
export default RoundBlueButton;
