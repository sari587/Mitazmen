import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import colors from '../../services/contants/colors'
import styles from './styles';
import images from '../../assets/images';
import moment from 'moment'
import { Icon } from 'react-native-elements';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
const StaffCard = () => {
    const [selected, setSelected] = useState(false)
    return (
        <TouchableOpacity style={styles.container} onPress={() => setSelected(!selected)} >
            <Image style={styles.staffImage} source={images.userImage} />
            <View style={selected ? styles.nameSelectedContainer : styles.nameUnselectedContainer}>
                <Text style={selected ? styles.nameSelectedText : styles.nameUnselectedText} >ASD</Text>
            </View>
        </TouchableOpacity>
    );
}
export default StaffCard