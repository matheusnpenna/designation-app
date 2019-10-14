import { Dimensions } from 'react-native'
import { colors } from "../../../config"

export default {
    container:{
        backgroundColor: colors.darkBlack,
        height: 500,
        marginTop: 5,
        width: Dimensions.get('window').width
    },
    separator: {
        height: 1,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: colors.grey,
    }
};