import { StyleSheet } from "react-native"
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import colors from '../../services/contants/colors'
const styles = StyleSheet.create({
    container: {
        height: responsiveHeight(20),
        width: responsiveWidth(100),
        backgroundColor: colors.appColorWhite,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
    },
    focusedCell: {
        height: responsiveHeight(5),
        backgroundColor: colors.appColorPurpule,
        width: responsiveWidth(30),
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    focusedText: {
        color: colors.appColorWhite,
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold'
    },
    unfocusedCell: {
        height: responsiveHeight(5),
        backgroundColor: colors.appColorWhite,
        width: responsiveWidth(30),
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    unfocusedText: {
        color: colors.appColorGreyText,
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold'
    },
});
export default styles