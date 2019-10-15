import { colors } from '../../../../config'

export default {
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
    },
    title: {
        color: colors.white
    },
    radioButton: {
        borderRadius: 20,
        width: 20,
        height: 20,
        marginRight: 10,
    },
    checked: {
        backgroundColor: colors.green
    },
    unChecked: {
        backgroundColor: colors.grey

    }
};