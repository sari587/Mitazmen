import { StyleSheet } from "react-native"
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "react-native-responsive-dimensions";
import colors from '../../../../services/contants/colors'
const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        backgroundColor: colors.appColorWhite,
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
    detailText: {
        fontSize: responsiveFontSize(2.5),
        color: colors.appColorGreyText,
        marginTop: responsiveHeight(1),
        alignSelf: 'center',
        width: responsiveWidth(80),
        textAlign: 'center',
    },
    phoneNumberText: {
        fontSize: responsiveFontSize(2.5),
        color: colors.appColorDarkBlue,
        fontWeight: '600',
        marginVertical: responsiveHeight(5),
        alignSelf: 'center',
        width: responsiveWidth(80),
        textAlign: 'center',
    },
    nextTextView: {

    },
    root: {
        width: responsiveWidth(80),
        alignSelf: 'center'
    },
    codeFieldRoot: {
        // marginTop: 20
    },
    cell: {
        borderRadius: 15,
        borderColor: colors.appColorLightBlue,
        height: responsiveWidth(15),
        width: responsiveWidth(15),
        borderWidth: 1.5,
        marginRight: 5,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: responsiveFontSize(2),
        color: colors.appColorBlack,
        justifyContent: 'center',
        alignItems: 'center',
    },
    focusCell: {
        borderColor: colors.appColorDarkBlue,
    },
    timerText: {
        color: colors.appColorLightBlue,
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
        marginTop: responsiveHeight(5),
        alignSelf: 'center'
    },
    button: {
        borderRadius: 5,
        marginTop: responsiveHeight(5),
    },
});
export default styles