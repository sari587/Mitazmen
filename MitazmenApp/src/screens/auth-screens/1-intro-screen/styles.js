import { StyleSheet } from "react-native"
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions"
import colors from '../../../services/contants/colors'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    sliderContainer: {
        height: responsiveHeight(75),
        width: responsiveWidth(100),
        alignSelf: 'center'
    },
    sliderImageContainer: {
        height: responsiveHeight(75),
        width: responsiveWidth(100),
        // resizeMode: 'center',
    },
    bottomSheetContainer: {
        height: responsiveHeight(30),
        width: responsiveWidth(100),
        position: 'absolute',
        bottom: 0,
        elevation: 100,
        zIndex: 100,
        backgroundColor: colors.appColorWhite,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        justifyContent: 'space-evenly',
    },
    titleText: {
        color: colors.appColorDarkBlue,
        fontSize: responsiveFontSize(2.5),
        textAlign: 'center',
        alignSelf: 'center',
        width: responsiveWidth(80),
        fontWeight: 'bold'
    },
    detailsText: {
        color: colors.appColorGreyText,
        fontSize: responsiveFontSize(2),
        textAlign: 'center',
        alignSelf: 'center',
        width: responsiveWidth(80),
    },
    skipButtonContainer: {
        // width: responsiveWidth(5),
        alignSelf: 'center'
    },
    skipText: {
        color: colors.appColorDarkBlue,
        fontSize: responsiveFontSize(2.5),
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'bold'
    },
});
export default styles