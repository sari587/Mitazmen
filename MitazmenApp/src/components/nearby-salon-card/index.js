import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import colors from '../../services/contants/colors'
import styles from './styles';
const NearbySalonItem = ({ title, image, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <ImageBackground source={image} style={styles.imageContainer} imageStyle={{ borderRadius: 20 }} >
                <View style={styles.textContainer}>
                    <Text style={styles.titeText} >
                        {title}
                    </Text>
                    <View style={styles.row} >
                        <Icon type='entypo' name='star' color={colors.appColorDarkYellow} size={responsiveFontSize(2.5)} />
                        <Text style={styles.titeText} >
                            {4.2}
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}
export default NearbySalonItem;
