import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import colors from '../../../../services/contants/colors'
const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1
    },
    container: {
        flex: 1,
        backgroundColor: colors.appColorWhite,
    },
    logoStyle: {
        width: responsiveWidth(80),
        height: responsiveHeight(20),
        alignSelf: 'center',
        marginTop: responsiveHeight(10),
        resizeMode: 'contain'
    },
    otpTitleText: {
        color: colors.appColorGreyText,
        fontSize: responsiveFontSize(2),
        width: responsiveWidth(80),
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: responsiveHeight(5)
    },
    otpInputContainer: {
        width: responsiveWidth(85),
        height: responsiveHeight(10),
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    countryPickerInputContainer: {
        width: responsiveWidth(20),
        height: responsiveHeight(6),
        elevation: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        backgroundColor: colors.appColorWhite,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    callingCodeText: {
        color: colors.appColorGreyText,
        fontSize: responsiveFontSize(2),
        fontWeight: '700',
    },
    phoneInputText: {
        color: colors.appColorGreyText,
        fontSize: responsiveFontSize(2),
        width: responsiveWidth(60),
        height: responsiveHeight(6),
        textAlignVertical: 'center',
        paddingHorizontal: 10,
        backgroundColor: colors.appColorWhite,
        elevation: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        borderRadius: 5,
    },
    continueWithGoogleButton: {
        marginTop: responsiveHeight(2)
    },
});
export default styles