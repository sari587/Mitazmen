import { StyleSheet } from "react-native"
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import colors from '../../services/contants/colors'
const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(85),
        height: responsiveHeight(15),
        // backgroundColor: colors.appColorLightBlue,
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        marginVertical: responsiveHeight(1)
    },
    leftContainer: {
        width: responsiveWidth(30),
        height: responsiveHeight(15),
        backgroundColor: colors.appColorLightBlue,
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: 'center',
    },
    rightContainer: {
        width: responsiveWidth(55),
        height: responsiveHeight(15),
        backgroundColor: colors.appColorWhite,
        justifyContent: 'space-evenly',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    dateText: {
        color: colors.appColorWhite,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2.5),
    },
    timeText: {
        color: colors.appColorWhite,
        fontSize: responsiveFontSize(1.5),
    },
    shopNameText: {
        color: colors.appColorDarkBlue,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2),
    },
    barberHeaderText: {
        color: colors.appColorPurpule,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(1.75),
    },
    barberNameText: {
        color: colors.appColorPurpule,
        fontSize: responsiveFontSize(1.75),
        textAlign: 'right',
    },
    barberCategoryText: {
        color: colors.appColorGreyText,
        fontSize: responsiveFontSize(1.75),
        textAlign: 'right',
    },
    cancelText: {
        color: colors.appColorRed,
        fontSize: responsiveFontSize(1.5),
        textAlign: 'right',
    },
    callIconContainer: {
        height: responsiveWidth(6),
        width: responsiveWidth(6),
        borderRadius: 5,
        backgroundColor: colors.appColorWhitishBlue,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: responsiveWidth(2)
    },
    shareIconContainer: {
        height: responsiveWidth(6),
        width: responsiveWidth(6),
        borderRadius: 5,
        backgroundColor: colors.appColorWhite,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
});
export default styles