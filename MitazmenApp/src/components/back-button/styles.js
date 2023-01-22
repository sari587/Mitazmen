import { StyleSheet } from "react-native"
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import colors from '../../services/contants/colors'
const styles = StyleSheet.create({
    container: {
        margin: responsiveHeight(3),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    titleStyle: {
        color: colors.appColorGreyText,
        fontSize: responsiveFontSize(2),
        fontWeight: '600',
        marginLeft:responsiveWidth(1.5)
    }
});
export default styles