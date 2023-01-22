import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import colors from '../../services/contants/colors'
import styles from './styles';
const SalonServiceAtHomeCard = ({ title, image, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image style={styles.imageContainer} source={image} />
            <View style={styles.textContainer}>
                <Text style={styles.titeText} >
                    {title}
                </Text>
                <View style={styles.row} >
                    <Icon type='entypo' name='star' color={colors.appColorDarkYellow} size={responsiveFontSize(2.5)} />
                    <Icon type='entypo' name='star' color={colors.appColorDarkYellow} size={responsiveFontSize(2.5)} />
                    <Icon type='entypo' name='star' color={colors.appColorDarkYellow} size={responsiveFontSize(2.5)} />
                    <Icon type='entypo' name='star' color={colors.appColorDarkYellow} size={responsiveFontSize(2.5)} />
                    <Icon type='entypo' name='star' color={colors.appColorDarkYellow} size={responsiveFontSize(2.5)} />
                </View>
                <Text style={styles.addressText} >
                    Some place, pune
                </Text>
                <View style={styles.row} >
                    <Icon type='entypo' name='location-pin' color={colors.appColorGreyText} size={responsiveFontSize(2)} />
                    <Text style={styles.addressText} >
                        5 KM Away
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
export default SalonServiceAtHomeCard;
