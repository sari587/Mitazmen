import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'
import colors from '../../../services/contants/colors'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.appColorWhitishBlue,
    },
    searchMainContainer: {
        alignSelf: 'center',
    },
    searchIconContainer: {
        height: responsiveWidth(10),
        width: responsiveWidth(10),
        borderRadius: 1000,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.appColorDarkBlue,
        zIndex: 20,
        marginLeft: -responsiveWidth(10)
    },
    searchInputStyle: {
        width: responsiveWidth(75),
        backgroundColor: colors.appColorWhite,
        paddingHorizontal: responsiveWidth(5),
        justifyContent: 'center',
        height: responsiveWidth(10),
        color: colors.appColorBlack,
        borderRadius: 50
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: responsiveWidth(85),
        alignSelf: 'center',
    },
    headerText: {
        color: colors.appColorDarkBlue,
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        margin: responsiveHeight(2),
        marginLeft: responsiveWidth(5)
    },
});
export default styles