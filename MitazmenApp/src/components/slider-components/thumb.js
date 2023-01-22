import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../services/contants/colors';

const THUMB_RADIUS_LOW = 12;
const THUMB_RADIUS_HIGH = 16;

const Thumb = ({ name }) => {
    return <View style={name === 'high' ? styles.rootHigh : styles.rootLow} />;
};

const styles = StyleSheet.create({
    rootLow: {
        width: THUMB_RADIUS_LOW * 2,
        height: THUMB_RADIUS_LOW * 2,
        borderRadius: THUMB_RADIUS_LOW,
        borderWidth: 2,
        borderColor: colors.appColorLightBlue,
        backgroundColor: colors.appColorWhite,
    },
    rootHigh: {
        width: THUMB_RADIUS_HIGH * 2,
        height: THUMB_RADIUS_HIGH * 2,
        borderRadius: THUMB_RADIUS_HIGH,
        borderWidth: 2,
        borderColor: colors.appColorLightBlue,
        backgroundColor: colors.appColorWhite,
    },
});

export default memo(Thumb);