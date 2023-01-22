import React, { Component, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, } from 'react-native'
import { Icon } from 'react-native-elements';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import styles from './styles'
import colors from '../../../services/contants/colors';
import BackButton from '../../../components/back-button'
import SalonListCard from '../../../components/salon-list-card';
import FilterModal from '../../../components/filter-modal';
import RouteNames from '../../../services/contants/route-names'
const SalonListScreen = ({ navigation }) => {
    const [showFilterModal, setShowFilterModal] = useState(false)
    const renderItem = ({ item, index }) => {
        return (
            <SalonListCard onPress={() => navigation.navigate(RouteNames.salonDetailScreen)} />
        )
    }
    const onClosePress = () => {
        setShowFilterModal(false)
    }
    return (
        <View style={styles.container}>
            <BackButton navigation={navigation} />
            <View style={styles.mainContainer} >
                <View style={[styles.row, styles.searchMainContainer]} >
                    <TextInput style={styles.searchInputStyle} placeholder="Search for services" placeholderTextColor={colors.appColorGreyText} />
                    <TouchableOpacity style={styles.searchIconContainer} >
                        <Icon type='evilicon' name='search' color={colors.appColorWhite} size={responsiveFontSize(2.5)} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => setShowFilterModal(!showFilterModal)} >
                    <Icon type='octicon' name='filter' color={colors.appColorGreyText} size={responsiveFontSize(2.5)} />
                </TouchableOpacity>
            </View>
            <Text style={styles.headerText} >
                Nearby Salons
            </Text>
            <FlatList
                data={[1, 2, 3, 4]}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
            />
            <FilterModal isVisible={showFilterModal} onApply={onClosePress} onCancel={onClosePress} />
        </View>
    )
}
export default SalonListScreen