//import liraries
import React, { Component, useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native';
import styles from './styles';
import images from '../../../assets/images'
import { Icon } from 'react-native-elements';
import colors from '../../../services/contants/colors';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import NearbySalonItem from '../../../components/nearby-salon-card';
import SalonServiceAtHomeCard from '../../../components/salon-service-at-home-card';
import MostBookedSalonCard from '../../../components/most-booked-salon-card';
import RouteNames from '../../../services/contants/route-names'
const HomeScreen = ({ navigation }) => {
    const [servicesList, setServicesList] = useState([
        {
            title: 'Haircut',
            image: images.userImage,
            route: '',
        },
        {
            title: 'Massage',
            image: images.userImage,
            route: '',
        },
        {
            title: 'Beard Shave',
            image: images.userImage,
            route: '',
        },
        {
            title: `Men's Haircut`,
            image: images.userImage,
            route: '',
        },
        {
            title: `Men's Haircut`,
            image: images.userImage,
            route: '',
        },
    ])
    const renderServiceListItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.servicesFlatlistItem} >
                <Image style={styles.serviceTypeImage} source={item.image} />
                <Text style={styles.serviceTypeText} >
                    {item.title}
                </Text>
            </TouchableOpacity>
        )
    }
    const renderNearbySalonsItem = ({ item, index }) => {
        return (
            <NearbySalonItem title={item.title} image={item.image} />
        )
    }
    const renderSalonServiceAtHomeItem = ({ item, index }) => {
        return (
            <SalonServiceAtHomeCard title={item.title} image={item.image} onPress={() => navigation.navigate(RouteNames.homeServiceBarberDetailScreen)} />
        )
    }
    const renderMostBookedSalonsItem = ({ item, index }) => {
        return (
            <MostBookedSalonCard title={item.title} image={item.image} />
        )
    }
    const onViewAllPress = () => {
        navigation.navigate(RouteNames.salonListScreen)
    }
    return (
        <ScrollView contentContainerStyle={styles.scrollViewStyle} showsVerticalScrollIndicator={false} >
            <View style={styles.container}>
                <View style={styles.headerMainContainer} >
                    <View style={styles.headerRounder} >
                        <View style={styles.userDetailsContainer} >
                            <View style={styles.row} >
                                <Image source={images.userImage} style={styles.userImage} />
                                <View>
                                    <Text style={styles.userName} >
                                        Rohan Chandio
                                    </Text>
                                    <Text style={styles.locationText} >
                                        Apna Ghar, Pune
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.notificationIconContainer} >
                                <Icon type='ionicon' name='md-notifications' color={colors.appColorWhiteBlue} size={responsiveFontSize(2.5)} />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.row, styles.searchMainContainer]} >
                            <TextInput style={styles.searchInputStyle} placeholder="Search for services" placeholderTextColor={colors.appColorGreyText} />
                            <TouchableOpacity style={styles.searchIconContainer} >
                                <Icon type='evilicon' name='search' color={colors.appColorWhite} size={responsiveFontSize(2.5)} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.headerText} >
                            Services
                        </Text>

                    </View>

                </View>
                <View>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.serviceFlatListContainer}
                        data={servicesList}
                        renderItem={renderServiceListItem}
                    />
                </View>
                <View>
                    <View style={styles.nearbySalonsHeaderContainer} >
                        <Text style={styles.headerText}>
                            Nearby Salons
                        </Text>
                        <TouchableOpacity onPress={onViewAllPress}>
                            <Text style={styles.viewAllText}>
                                View All
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={servicesList}
                        renderItem={renderNearbySalonsItem}
                    />
                </View>
                <View>
                    <View style={styles.nearbySalonsHeaderContainer} >
                        <Text style={styles.headerText}>
                            Salon Services at home
                        </Text>
                        <TouchableOpacity onPress={onViewAllPress}>
                            <Text style={styles.viewAllText}>
                                View All
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={servicesList}
                        renderItem={renderSalonServiceAtHomeItem}
                    />
                </View>
                {/* <View>
                    <View style={styles.nearbySalonsHeaderContainer} >
                        <Text style={styles.headerText}>
                            Combo Offers
                        </Text>
                    </View>
                </View> */}
                <View>
                    <View style={styles.nearbySalonsHeaderContainer} >
                        <Text style={styles.headerText}>
                            Most Booked Salons
                        </Text>
                        <TouchableOpacity onPress={onViewAllPress}>
                            <Text style={styles.viewAllText}>
                                View All
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={servicesList}
                        renderItem={renderMostBookedSalonsItem}
                    />
                </View>
            </View>
        </ScrollView>
    );
};



//make this component available to the app
export default HomeScreen;
