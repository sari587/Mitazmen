import { StyleSheet } from "react-native"
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import colors from '../../services/contants/colors'
const styles = StyleSheet.create({
    selectedContainer: {
        width: responsiveWidth(10),
        height: responsiveHeight(10),
        backgroundColor: colors.appColorLightBlue,
        borderRadius: 10,
        // alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        // elevation: 10,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.5,
        // shadowRadius: 2,
        // marginVertical: responsiveHeight(1),
        marginHorizontal: responsiveWidth(5),
        paddingVertical: responsiveHeight(1)
        // flexDirection: 'row',
        // paddingHorizontal: responsiveWidth(5),
    },
    unselectedContainer: {
        width: responsiveWidth(10),
        height: responsiveHeight(10),
        backgroundColor: colors.appColorWhitishBlue,
        borderRadius: 10,
        // alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        // elevation: 10,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.5,
        // shadowRadius: 2,
        // marginVertical: responsiveHeight(1),
        marginHorizontal: responsiveWidth(5),
        paddingVertical: responsiveHeight(1)
        // flexDirection: 'row',
        // paddingHorizontal: responsiveWidth(5),
    },
    dateContainer: {
        width: responsiveWidth(6),
        borderRadius: 100,
        height: responsiveWidth(6),
        backgroundColor: colors.appColorWhite,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateText: {
        color: colors.appColorBlack,
        fontSize: responsiveFontSize(1.5),
    },
    dayText: {
        color: '#5a6876',
        fontSize: responsiveFontSize(1.5),
        fontWeight: '700'
    },
});
export default styles