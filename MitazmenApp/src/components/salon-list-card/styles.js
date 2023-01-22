import { StyleSheet } from "react-native"
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import colors from '../../services/contants/colors'
const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(90),
        height: responsiveHeight(20),
        marginHorizontal: responsiveWidth(1),
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.appColorWhite,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        marginVertical: responsiveHeight(3),
        alignSelf: 'center',
    },
    imageContainer: {
        width: responsiveWidth(35),
        height: responsiveHeight(23),
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginTop: -responsiveHeight(3)
    },
    textContainer: {
        justifyContent: 'space-between',
        width: responsiveWidth(35),
        // alignItems: 'center',
        marginLeft: responsiveWidth(2)
    },
    titeText: {
        color: colors.appColorDarkBlue,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2),
    },
    subtiteText: {
        color: colors.appColorDarkBlue,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(1.5),
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
    bookNowButton: {
        width: responsiveWidth(30),
        height: responsiveHeight(5),
        borderRadius: 10,
        marginVertical: responsiveHeight(1)
    },
});
export default styles