import { colors } from "../../config";

export default {
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: colors.darkBlack
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    footer: {
      backgroundColor: colors.blue,
      height: '10%',
      width: '100%'
    },
    addbuttonContaner: {
      height: 60,
      width: 60,
      borderRadius: 30,
      backgroundColor: colors.darkBlue,
      bottom: 30,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    },
    addButtonIcon: {
      height: 30,
      width: 30,
      tintColor: colors.blue
    }
  };
