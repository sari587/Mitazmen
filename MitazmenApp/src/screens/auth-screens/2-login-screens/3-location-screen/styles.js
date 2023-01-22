import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "react-native-responsive-dimensions";
import colors from '../../../../services/contants/colors'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.appColorWhite,
    },
    detailText: {
        fontSize: responsiveFontSize(2.5),
        color: colors.appColorGreyText,
        marginTop: responsiveHeight(10),
        alignSelf: 'center',
        width: responsiveWidth(80),
        textAlign: 'center',
    },
    header: {
        fontSize: responsiveFontSize(3.5),
        color: colors.appColorDarkBlue,
        fontWeight: '600',
        marginTop: responsiveHeight(5),
        alignSelf: 'center',
        width: responsiveWidth(80),
        textAlign: 'center',
    },
    logoStyle: {
        width: responsiveWidth(80),
        height: responsiveHeight(20),
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    locationButtonContainer: {
        width: responsiveWidth(80),
        height: responsiveHeight(7),
        backgroundColor: colors.appColorLightBlue,
        borderRadius: 5,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: responsiveHeight(2)
    },
    titeText: {
        color: colors.appColorWhite,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2.5),
        marginLeft: responsiveWidth(1)
    },
    someOtherLocationButtonContainer: {
        width: responsiveWidth(80),
        height: responsiveHeight(7),
        borderColor: colors.appColorLightBlue,
        borderRadius: 5,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: responsiveHeight(2),
        borderWidth: 2
    },
    someOtherTiteText: {
        color: colors.appColorDarkBlue,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2.5),
        marginLeft: responsiveWidth(1)
    },
});
export default styles