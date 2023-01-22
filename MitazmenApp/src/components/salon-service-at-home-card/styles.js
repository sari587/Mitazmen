import { StyleSheet } from "react-native"
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import colors from '../../services/contants/colors'
const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(65),
        height: responsiveHeight(15),
        marginHorizontal: responsiveWidth(1),
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.appColorWhite,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        padding: responsiveWidth(2),
        marginBottom: responsiveWidth(4),
    },
    imageContainer: {
        width: responsiveHeight(12),
        height: responsiveHeight(12),
        borderRadius: 20,
    },
    textContainer: {
        justifyContent: 'space-between',
        width: responsiveWidth(35),
        alignItems: 'center',
    },
    titeText: {
        color: colors.appColorDarkBlue,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(1.75),
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: responsiveHeight(1)
    },
    addressText: {
        color: colors.appColorGreyText,
        fontSize: responsiveFontSize(1.5),
    },
});
export default styles