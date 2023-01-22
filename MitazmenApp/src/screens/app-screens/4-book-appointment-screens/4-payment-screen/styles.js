import { StyleSheet, Dimensions } from 'react-native'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'
import colors from '../../../../services/contants/colors';
const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        height: responsiveHeight(100),
        width: responsiveWidth(100)
    },
    container: {
        flex: 1,
        backgroundColor: colors.appColorWhite,
        paddingVertical: 15,
    },
    headerContainer: {
        position: 'absolute',
        top: 30,
        left: 0,
        right: 0
    },
    header: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2.5),
        paddingLeft:responsiveWidth(5)
        // paddingTop: 15,
        // alignSelf: 'center',
        // textAlign: 'center'
    },
    optionsContainer: {
        backgroundColor: '#F6F6F6',
        width: responsiveWidth(90),
        alignSelf: 'center',
        paddingVertical: responsiveWidth(1),
        marginTop: 20,
        borderRadius: 15
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: responsiveWidth(80),
        alignItems: 'center',
        margin: 10,
        alignSelf:'center'
    },
    optionText: {
        fontSize: responsiveFontSize(2),
        marginLeft: responsiveWidth(2)
    },
    stepIndicatorStyle: {
        width: responsiveWidth(90),
        alignSelf: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default styles