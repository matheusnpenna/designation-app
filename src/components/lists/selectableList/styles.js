import { Dimensions } from 'react-native'
import { colors } from "../../../config"

export default {
    container:{
        backgroundColor: colors.darkBlack,
        height: 400,
        marginTop: 10,
        width: Dimensions.get('window').width
    },
    separator: {
        height: 1,
        width: '85%',
        alignSelf: 'center',
        backgroundColor: colors.grey,
    },
    flatList: {
        paddingHorizontal: 10
    }
};