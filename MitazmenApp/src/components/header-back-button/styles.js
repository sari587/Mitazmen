import { StyleSheet } from "react-native"
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import colors from '../../services/contants/colors'
const styles = StyleSheet.create({
    container: {
        margin: responsiveHeight(3),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleStyle: {
        color: colors.appColorDarkBlue,
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        marginLeft: responsiveWidth(1.5)
    }
});
export default styles