import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'
import colors from '../../../services/contants/colors'
const styles = StyleSheet.create({
    scrollViewStyle: {
        flexGrow: 1
    },
    container: {
        flex: 1,
        backgroundColor: colors.appColorWhite,
        paddingBottom: 70
    },
    headerMainContainer: {
        height: responsiveHeight(30),
        width: responsiveWidth(100),
        transform: [{ scaleX: 2 }],
        borderBottomStartRadius: 300,
        borderBottomEndRadius: 300,
        overflow: 'hidden',
    },
    headerRounder: {
        flex: 1,
        transform: [{ scaleX: 0.5 }],
        backgroundColor: colors.appColorWhiteBlue,
        paddingTop: responsiveHeight(3)
    },
    userDetailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: responsiveWidth(90),
        alignSelf: 'center',
    },
    userImage: {
        height: responsiveWidth(15),
        width: responsiveWidth(15),
        borderRadius: 50,
        marginRight: responsiveWidth(2),
    },
    userName: {
        color: colors.appColorWhite,
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold'
    },
    locationText: {
        color: colors.appColorWhite,
        fontSize: responsiveFontSize(1.75),
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    notificationIconContainer: {
        height: responsiveWidth(8),
        width: responsiveWidth(8),
        borderRadius: 1000,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.appColorWhite,
    },
    searchMainContainer: {
        alignSelf: 'center',
        marginTop: responsiveHeight(3)
    },
    searchIconContainer: {
        height: responsiveWidth(10),
        width: responsiveWidth(10),
        borderRadius: 1000,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.appColorDarkBlue,
        zIndex: 20,
        marginLeft: -responsiveWidth(10)
    },
    searchInputStyle: {
        width: responsiveWidth(60),
        backgroundColor: colors.appColorWhite,
        paddingHorizontal: responsiveWidth(5),
        justifyContent: 'center',
        height: responsiveWidth(10),
        color: colors.appColorBlack,
        borderRadius: 50
    },
    headerText: {
        color: colors.appColorDarkBlue,
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
        margin: responsiveHeight(2),
    },
    servicesFlatlistItem: {
        width: responsiveWidth(30),
        height: responsiveWidth(30),
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    serviceTypeImage: {
        width: responsiveWidth(25),
        height: responsiveWidth(25),
        borderWidth: 4,
        borderColor: colors.appColorWhiteBlue,
        borderRadius: 100,
    },
    serviceTypeText: {
        color: colors.appColorDarkBlue,
        fontSize: responsiveFontSize(1.5),
    },
    serviceFlatListContainer: {
        marginTop: -responsiveHeight(5),
    },
    nearbySalonsHeaderContainer: {
        flexDirection: 'row',
        marginLeft: responsiveWidth(1),
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: responsiveWidth(5)
    },
    viewAllText: {
        color: colors.appColorWhiteBlue,
        fontSize: responsiveFontSize(2),
    },
});
export default styles