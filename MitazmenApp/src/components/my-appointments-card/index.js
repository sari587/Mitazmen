import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment'
import { Icon } from 'react-native-elements';
import RouteNames from '../../services/contants/route-names'
import colors from '../../services/contants/colors'
import styles from './styles';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
const MyAppointmentsCard = ({ item, navigation }) => {
    return (
        <TouchableOpacity
            // onPress={onPress}
            style={styles.container}>
            <View style={styles.leftContainer} >
                <Text style={styles.dateText} >{moment(item.date).format('MMM DD')}</Text>
                <Text style={styles.timeText} >{moment(item.date).format('hh:mm a')}</Text>
            </View>
            <View style={styles.rightContainer} >
                <Text style={styles.shopNameText} >{item.name}</Text>
                <View style={styles.row}>
                    <Text style={styles.barberHeaderText} >Barber: </Text>
                    <View>
                        <Text style={styles.barberNameText}>{item.barberName}</Text>
                        <Text style={styles.barberCategoryText}>{item.type}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity>
                        <Text style={styles.cancelText} >Cancel</Text>
                    </TouchableOpacity>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.callIconContainer} >
                            <Icon
                                type='feather'
                                name='phone-call'
                                size={responsiveFontSize(2)}
                                color={colors.appColorGreyishBlue} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.shareIconContainer} >
                            <Icon
                                type='simple-line-icon'
                                name='share-alt'
                                size={responsiveFontSize(2)}
                                color={colors.appColorDarkBlue} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
export default MyAppointmentsCard;
