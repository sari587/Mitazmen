import { StyleSheet } from "react-native"
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import colors from '../../services/contants/colors'
const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(85),
        height: responsiveHeight(7),
        backgroundColor: colors.appColorLightBlue,
        borderRadius: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titeText: {
        color: colors.appColorWhite,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2.5),
    },
});
export default styles