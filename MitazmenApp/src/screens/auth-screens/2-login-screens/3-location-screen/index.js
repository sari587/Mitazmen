//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import BackButton from '../../../../components/back-button';
import images from '../../../../assets/images';
import styles from './styles';
import { Icon } from 'react-native-elements';
import colors from '../../../../services/contants/colors';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import RouteNames from '../../../../services/contants/route-names'
// create a component
const SelectLocationScreen = ({ navigation }) => {
    const onButtonPress = () => {
        navigation.navigate(RouteNames.app)
    }
    return (
        <View style={styles.container}>
            <BackButton navigation={navigation} />
            <Text style={styles.detailText}>
                Hi Rohan, nice to meet you
            </Text>
            <Text style={styles.header}>
                See Services Around
            </Text>
            <Image source={images.locationLogo} style={styles.logoStyle} />
            <TouchableOpacity
                onPress={onButtonPress}
                style={styles.locationButtonContainer}>
                <Icon type="material" name='my-location' color={colors.appColorWhite} size={responsiveFontSize(3)} />
                <Text style={styles.titeText}>
                    Your Current Location
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onButtonPress}
                style={styles.someOtherLocationButtonContainer}>
                <Icon type="evilicon" name='search' color={colors.appColorDarkBlue} size={responsiveFontSize(3)} />
                <Text style={styles.someOtherTiteText}>
                    Some Other Location
                </Text>
            </TouchableOpacity>
        </View>
    );
};



//make this component available to the app
export default SelectLocationScreen;
