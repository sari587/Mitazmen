import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import colors from '../../services/contants/colors'
import styles from './styles';
import images from '../../assets/images';
import moment from 'moment'
import { Icon } from 'react-native-elements';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
const ReviewCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.userDetailsContainer} >
                <View style={styles.row} >
                    <Image source={images.userImage} style={styles.userImage} />
                    <View>
                        <Text style={styles.userName} >
                            Rohan Chandio
                        </Text>
                        <Text style={styles.locationText} >
                            {moment().format('MMM DD, YYYY')}
                        </Text>
                    </View>
                </View>
                <View style={styles.row} >
                    <Icon type='entypo' name='star' color={colors.appColorDarkYellow} size={responsiveFontSize(2.5)} />
                    <Icon type='entypo' name='star' color={colors.appColorDarkYellow} size={responsiveFontSize(2.5)} />
                    <Icon type='entypo' name='star' color={colors.appColorDarkYellow} size={responsiveFontSize(2.5)} />
                    <Icon type='entypo' name='star' color={colors.appColorDarkYellow} size={responsiveFontSize(2.5)} />
                    <Icon type='entypo' name='star' color={colors.appColorDarkYellow} size={responsiveFontSize(2.5)} />
                </View>
            </View>
            <Text style={[styles.locationText, styles.detailText]} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non nisi nec massa vestibulum facilisis. Integer sed venenatis urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras cursus libero sed sem dignissim tristique. Nulla lacinia et nulla sed volutpat. Integer magna quam, vestibulum nec lobortis non, tincidunt nec lectus. Phasellus euismod consectetur ornare. Ut a tincidunt metus, eget venenatis nisi.
            </Text>
        </View>
    );
}
export default ReviewCard;
