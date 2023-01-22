import { StyleSheet } from "react-native"
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import colors from '../../services/contants/colors'
const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(45),
        height: responsiveHeight(30),
        marginHorizontal: responsiveWidth(1),
        borderRadius: 20,
    },
    imageContainer: {
        width: responsiveWidth(45),
        height: responsiveHeight(30),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: responsiveWidth(5),
        width: responsiveWidth(45),
        height: responsiveHeight(5),
        alignItems: 'center',
        backgroundColor: colors.appColorTransparentWhite,
    },
    titeText: {
        color: colors.appColorWhite,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(1.75),
        marginLeft: responsiveWidth(1)
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
export default styles