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
    bottomSheetContainer: {
        backgroundColor: colors.appColorWhitishBlue,
        height: responsiveHeight(76),
        width: responsiveWidth(100),
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        position: 'absolute',
        bottom: 0,
    },
    dpContainer: {
        width: responsiveWidth(35),
        alignSelf: 'center',
        marginTop: -responsiveHeight(12),
        height: responsiveWidth(42),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: colors.appColorWhite,
        zIndex: 100,
    },
    displayImage: {
        width: responsiveWidth(28),
        height: responsiveWidth(28),
        borderRadius: 15,
    },
    nameText: {
        color: colors.appColorDarkBlue,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2),
        marginTop: responsiveHeight(1),
    },
    experienceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: responsiveWidth(80),
        alignSelf: 'center'
    },
    experienceText: {
        color: colors.appColorGreyText,
        fontSize: responsiveFontSize(1.75),
        fontWeight: "600"
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    focusedCell: {
        height: responsiveHeight(5),
        backgroundColor: colors.appColorPurpule,
        width: responsiveWidth(30),
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    focusedText: {
        color: colors.appColorWhite,
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold'
    },
    unfocusedCell: {
        height: responsiveHeight(5),
        backgroundColor: colors.appColorWhitishBlue,
        width: responsiveWidth(30),
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    unfocusedText: {
        color: colors.appColorGreyText,
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold'
    },
    tabBarContainer: {
        marginTop: responsiveHeight(2),
        width: responsiveWidth(95),
        alignSelf: 'center'
    },
    aboutMainContainer: {
        height: responsiveHeight(68),
        justifyContent: 'space-between',
    },
    messageButtonContainer: {
        backgroundColor: colors.appColorWhitishBlue,
        height: responsiveWidth(12),
        width: responsiveWidth(12),
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: responsiveWidth(1)
    },
    bottomButtonsMainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: responsiveWidth(85),
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
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
    timeInfoMainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: responsiveWidth(85),
        alignSelf: 'center',
        marginTop: responsiveHeight(1)
    },
    timeHeaderText: {
        color: colors.appColorGreyText,
        fontSize: responsiveFontSize(2),
        fontWeight: '600',
    },
    timeDetailText: {
        color: colors.appColorBlack,
        fontSize: responsiveFontSize(1.5),
    },
    subtitleMotoText: {
        width: responsiveWidth(90),
        textAlign: 'center',
        color: colors.appColorGreyText,
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: responsiveHeight(2)
    },
    callCheckMainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: responsiveWidth(85),
        alignSelf: 'center',
        marginTop: responsiveHeight(1),
        width: responsiveWidth(75),
        marginBottom: responsiveHeight(1)
    },
    callButtonContainer: {
        backgroundColor: colors.appColorLightGreen,
        height: responsiveWidth(12),
        width: responsiveWidth(35),
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    callButtonText: {
        color: colors.appColorDarkGreen,
        fontSize: responsiveFontSize(2),
        fontWeight: '700',
        marginLeft: responsiveWidth(2)
    },
    checkButtonContainer: {
        backgroundColor: colors.appColorLightYellow,
        height: responsiveWidth(12),
        width: responsiveWidth(35),
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    checkButtonText: {
        color: colors.appColorDarkYellow,
        fontSize: responsiveFontSize(2),
        fontWeight: '700',
        marginLeft: responsiveWidth(2),
        textAlign: 'center',
    },
    reviewInput: {
        height: responsiveHeight(6),
        width: responsiveWidth(70),
        textAlignVertical: 'center',
        color: colors.appColorBlack,
        backgroundColor: colors.appColorWhite,
        borderWidth: 1,
        borderColor: colors.appColorGreyText,
        borderRadius: 10,
        paddingHorizontal: responsiveWidth(5)
    },
    sendButtonContainer: {
        backgroundColor: colors.appColorLightBlue,
        height: responsiveWidth(12),
        width: responsiveWidth(12),
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: responsiveWidth(1)
    },
    reviewInputMainContainer: {
        width: responsiveWidth(85)
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
        bottom: -10,
    },
    staffListItem: {
        width: responsiveWidth(15),
        height: responsiveWidth(15),
        borderRadius: 100,
        borderWidth: 1,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        margin: responsiveWidth(5)
    },
    staffTitleText: {
        color: colors.appColorDarkBlue,
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
        marginLeft: responsiveWidth(5),
        marginTop: responsiveHeight(2)
    }
});
export default styles