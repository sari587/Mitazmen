import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import colors from '../../services/contants/colors'
import styles from './styles';
import images from '../../assets/images';
import moment from 'moment'
import { Icon } from 'react-native-elements';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
const ServiceCard = () => {
    const [selected, setSelected] = useState(false)
    return (
        <TouchableOpacity style={styles.container} onPress={()=> setSelected(!selected)} >
            <View style={styles.userDetailsContainer} >
                <View style={styles.row} >
                    <Image source={selected ? images.selectedImage : images.unselectedImage} style={styles.userImage} />
                </View>
                <View>
                    <Text style={styles.userName} >
                        Hair Cut
                    </Text>
                    <Text style={styles.locationText} >
                        40 min
                    </Text>
                </View>
            </View>
            <Text style={styles.userName} >
                INR 400
            </Text>
        </TouchableOpacity>
    );
}
export default ServiceCard