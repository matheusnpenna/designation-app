import { colors } from '../../config';

export default {
    largeButtonContainer: {
        backgroundColor: colors.darkGrey,
        width: '100%',
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        color: colors.white
    },
    closeContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        right: 10,
        width: 35,
        height: 35
    },
    closeImg: {
        tintColor: colors.darkBlack,
        height: 35,
        width: 35
    }
};