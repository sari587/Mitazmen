import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import colors from '../../services/contants/colors'
import styles from './styles';
import images from '../../assets/images';
import moment from 'moment'
import { Icon } from 'react-native-elements';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
const TimerPickerCard = () => {
    const [selected, setSelected] = useState(false)
    return (
        <TouchableOpacity style={selected ? styles.selectedContainer : styles.unselectedContainer} onPress={() => setSelected(!selected)} >
            <Text style={selected?styles.dateText: styles.dayText} >{moment().format('hh:mm A')}</Text>
        </TouchableOpacity>
    );
}
export default TimerPickerCard