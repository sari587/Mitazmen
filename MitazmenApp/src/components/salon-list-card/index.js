import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import colors from '../../services/contants/colors'
import styles from './styles';
import images from '../../assets/images'
import RoundBlueButton from '../../components/round-blue-button'
const SalonListCard = ({ title, image, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image style={styles.imageContainer} source={images.intro1} />
            <View style={styles.textContainer}>
                <Text style={styles.titeText} >
                    Luset {''}
                    <Text style={styles.subtiteText} >
                        Unisex salon
                    </Text>
                </Text>
                <View style={styles.row} >
                    <Icon type='entypo' name='star' color={colors.appColorDarkYellow} size={responsiveFontSize(2)} />
                    <Icon type='entypo' name='star' color={colors.appColorDarkYellow} size={responsiveFontSize(2)} />
                    <Icon type='entypo' name='star' color={colors.appColorDarkYellow} size={responsiveFontSize(2)} />
                    <Icon type='entypo' name='star' color={colors.appColorDarkYellow} size={responsiveFontSize(2)} />
                    <Icon type='entypo' name='star' color={colors.appColorDarkYellow} size={responsiveFontSize(2)} />
                </View>
                <Text style={styles.addressText} >
                    Some place, pune
                    Some place, pune
                    Some place, pune
                </Text>
                <View style={styles.row}>
                    <RoundBlueButton style={styles.bookNowButton} title="Book Now" />
                    <Icon type='entypo' name='location-pin' color={colors.appColorGreyText} size={responsiveFontSize(4)} />
                </View>
            </View>
        </TouchableOpacity>
    );
}
export default SalonListCard;
