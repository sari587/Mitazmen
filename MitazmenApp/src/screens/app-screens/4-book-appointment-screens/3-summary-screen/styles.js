import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'
import colors from '../../../../services/contants/colors'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.appColorWhite,
    },
    stepIndicatorStyle: {
        width: responsiveWidth(90),
        alignSelf: 'center',
    },
    titleStyle: {
        color: colors.appColorDarkBlue,
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
        marginLeft: responsiveWidth(5),
        marginTop: responsiveHeight(2)
    },
    itemHeaderStyle: {
        color: colors.appColorDarkBlue,
        fontSize: responsiveFontSize(1.75),
        fontWeight: '600',
        marginLeft: responsiveWidth(2),
    },
    itemDetailStyle: {
        color: colors.appColorGreyText,
        fontSize: responsiveFontSize(1.5),
        fontWeight: '600',
        marginLeft: responsiveWidth(2),
    },
    bottomSheetContainer: {
        backgroundColor: colors.appColorWhitishBlue,
        width: responsiveWidth(95),
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center',
        // paddingVertical: responsiveHeight(2),
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    focusedText: {
        color: colors.appColorWhite,
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold'
    },

    bookAppointmentContainer: {
        backgroundColor: colors.appColorLightBlue,
        height: responsiveWidth(10),
        width: responsiveWidth(35),
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    bookAppointmentText: {
        marginRight: responsiveWidth(5),
    },
    servicesSelectedContainer: {
        backgroundColor: colors.appColorPurpule,
        width: responsiveWidth(100),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: responsiveWidth(5),
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        height: responsiveHeight(8),
        position: 'absolute',
        bottom: 0,
    },
    detailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: responsiveWidth(3),
        backgroundColor: colors.appColorWhite,
        width: responsiveWidth(90),
        borderRadius: 15,
        marginTop: responsiveHeight(2),
    },
    textInput: {
        width: responsiveWidth(90),
        alignSelf: 'center',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        backgroundColor: colors.appColorWhite,
        height: responsiveHeight(10),
        lineHeight: responsiveHeight(2),
        paddingHorizontal: responsiveWidth(3),
        fontSize: responsiveFontSize(1.75),
        color: colors.appColorBlack,
        borderRadius: 5,
        textAlignVertical:'center'
    },
});
export default styles