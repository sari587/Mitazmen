import { StyleSheet } from "react-native"
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import colors from '../../services/contants/colors'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.appColorWhitishBlue,
        height: responsiveHeight(100),
        width: responsiveWidth(100),
        position: 'absolute',
        bottom: -20,
        left: -20,
        justifyContent: 'flex-start',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: responsiveWidth(80),
        alignSelf: 'center',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        padding: responsiveHeight(2),
    },
    titeText: {
        color: colors.appColorDarkBlue,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2.5),
    },
    clearAllText: {
        color: colors.appColorLightBlue,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2.5),
    },
    leftMainView: {
        width: responsiveWidth(50),
        height: responsiveHeight(93),
        backgroundColor: colors.appColorWhitishBlue,
    },
    rightMainView: {
        width: responsiveWidth(50),
        height: responsiveHeight(93),
        backgroundColor: colors.appColorWhite,
        paddingHorizontal: responsiveWidth(2)
    },
    selectedContainer: {
        backgroundColor: colors.appColorWhite,
        width: responsiveWidth(50),
        height: responsiveHeight(10),
        justifyContent: 'center',
        paddingLeft: responsiveWidth(2),
    },
    unselectedContainer: {
        backgroundColor: colors.appColorWhitishBlue,
        width: responsiveWidth(50),
        height: responsiveHeight(10),
        justifyContent: 'center',
        paddingLeft: responsiveWidth(2),
    },
    unSelectedText: {
        color: colors.appColorDarkBlue,
        fontSize: responsiveFontSize(2.5),
    },
    rowMain: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    slider: {
        marginVertical: responsiveHeight(2),
        width: responsiveWidth(45),
        alignSelf: 'center',
        zIndex: 100,
    },
    priceSelectHeader: {
        color: colors.appColorDarkBlue,
        fontSize: responsiveFontSize(2),
        marginTop: responsiveHeight(2),
    },
    closeButtonContainer: {
        width: responsiveWidth(50),
        borderRightWidth: 1,
        borderRightColor: colors.appColorDarkBlue,
        alignItems: 'center',
        justifyContent: 'center',
        height: responsiveHeight(8),
        position: 'absolute',
        bottom: 5,
    },
    applyButtonContainer: {
        width: responsiveWidth(50),
        borderLeftWidth: 1,
        borderLeftColor: colors.appColorDarkBlue,
        alignItems: 'center',
        justifyContent: 'center',
        height: responsiveHeight(8),
        position: 'absolute',
        bottom: 5,
    },
});
export default styles