import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import colors from '../../services/contants/colors'
import styles from './styles';
import images from '../../assets/images';
import moment from 'moment'
import { Icon } from 'react-native-elements';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
const DatePickerCard = () => {
    const [selected, setSelected] = useState(false)
    return (
        <TouchableOpacity style={selected ? styles.selectedContainer : styles.unselectedContainer} onPress={() => setSelected(!selected)} >
            <View style={styles.dateContainer}>
                <Text style={styles.dateText} >{moment().format('DD')}</Text>
            </View>
            <Text style={styles.dayText} >{moment().format('ddd')}</Text>
        </TouchableOpacity>
    );
}
export default DatePickerCard