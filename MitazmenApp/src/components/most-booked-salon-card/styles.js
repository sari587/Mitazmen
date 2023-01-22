import { StyleSheet } from "react-native"
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import colors from '../../services/contants/colors'
const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(40),
        height: responsiveHeight(18),
        marginHorizontal: responsiveWidth(1),
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: colors.appColorWhite,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        padding: responsiveWidth(2),
        marginBottom: responsiveWidth(5),
    },
    imageContainer: {
        width: responsiveWidth(35),
        height: responsiveHeight(12),
        borderRadius: 15,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: responsiveHeight(1)
    },
    titeText: {
        color: colors.appColorDarkBlue,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(1.75),
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    addressText: {
        color: colors.appColorGreyText,
        fontSize: responsiveFontSize(1.5),
    },
});
export default styles