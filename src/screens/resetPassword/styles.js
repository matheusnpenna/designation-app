import { colors, globalStyles } from '../../config';

export default {
    container: {
      flex: 1,
      ...globalStyles.centering,
      backgroundColor: colors.blue,
    },
    input: {
      height: 45,
      width: '70%',
      marginBottom: 8,
      borderColor: colors.transparent,
      borderWidth: 1,
      backgroundColor: colors.white,
      textAlign: 'center',
      color: colors.grey,
      fontSize: 12,
    },
    label: {
      marginBottom: 8,
      color: colors.white,
      fontSize: 16,
    },
    signInButton: {
      ...globalStyles.centering,
      height: 30,
      borderRadius: 20,
      width: '50%',
      backgroundColor: colors.grey,
      marginBottom: 5
    },
    signUpButton: {

    },
    signInLabel: {
      color: colors.white,
    },
    signUpLabel: {
      marginBottom: 10
    },
    errorLabel: {
      color: colors.red,
      width: '50%',
      textAlign: 'center'
    }
  };
