import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
class FirebaseApi {

    createAccountOnAuth = (user) => {
        if (!user.name) return;
        if (!user.email) return;
        if (!user.password) return;
        
        return auth()
            .createUserWithEmailAndPassword(user.email, user.password);
    }

    createAccount = (user, callbackSuccess = null, callbackError = null) => {
        const usersRef = firebase
        .firestore()
        .collection('users')
        .doc(user.email);

        firebase
        .firestore()
        .runTransaction(async transaction => {
            this.createAccountOnAuth(user) //Create the user on auth
            .then((user) => {})
            .catch((error) => { 
                return Promise.reject(error);  // Auth not created
            });
            
            const doc = transaction.get(usersRef); // check if the users already exists

            if (!doc.exists) {
                transaction.set(usersRef, user);
            } else {
                return Promise.reject(new Error('Usuário existente!'));
            }

            this.login(user);
            
            return user;
        })
        .then((user) => {
            if (callbackSuccess) {
                callbackSuccess(user);
            }
        })
        .catch(error => {
            if (callbackError) {
                callbackError(error);
            }
        });
    }

    login = (user, successCB = null, errorCB = null) => {
        if (!user.email) return;
        if (!user.password) return;

        auth().signInWithEmailAndPassword(user.email, user.password)
            .then((userCredentials) => {
                if (successCB) {
                    successCB(userCredentials);
                }
            })
            .catch(error => {
                if (errorCB) {
                    errorCB(error);
                }
            })
    }

    checkAuthState = (callback) => {
        return auth()
            .onAuthStateChanged(user => callback(user));
    }

    onAuthStateChange = () => {
        return auth()
            .onAuthStateChanged()
    }

    sendRecuveryPassword = (email, onSuccess = null, onFail = null) => {
        auth().sendPasswordResetEmail(email)
            .then(() => {
                if (onSuccess) {
                    onSuccess();
                }
            })
            .catch(error => {
                if (onFail) {
                    onFail(error);
                }
            })
    }
}

export default new FirebaseApi();