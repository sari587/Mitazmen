import { StyleSheet } from "react-native"
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import colors from '../../services/contants/colors'
const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(85),
        height: responsiveHeight(20),
        backgroundColor: colors.appColorWhite,
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        marginVertical: responsiveHeight(1)
    },
    userDetailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: responsiveWidth(80),
        alignSelf: 'center',
    },
    userImage: {
        height: responsiveWidth(15),
        width: responsiveWidth(15),
        borderRadius: 50,
        marginRight: responsiveWidth(2),
    },
    userName: {
        color: colors.appColorBlack,
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold'
    },
    locationText: {
        color: colors.appColorGreyText,
        fontSize: responsiveFontSize(1.75),
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    detailText: {
        width: responsiveWidth(75),
        alignSelf: 'center',
        height: responsiveHeight(7)
    },
});
export default styles