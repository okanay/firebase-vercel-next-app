import {signInWithEmailAndPassword} from "firebase/auth";
import {auth, db} from "../../src/firebase";
import {doc, getDoc, updateDoc} from "firebase/firestore";

export const SignWithEmailAndPasswordAndUpdateLoginData = async (email , password) => {

    let userCredentials = undefined
    let token = undefined

    const sign = await signInWithEmailAndPassword(auth, email, password).
    then(response =>
    {
        userCredentials = response.user
        return userCredentials.stsTokenManager

    }).then(stsTokenManager =>
    {
        const updatedData = {
            accessToken: stsTokenManager.accessToken,
            refreshToken: stsTokenManager.refreshToken,
            tokenExpire: stsTokenManager.expirationTime,
            lastSignInTime: userCredentials.metadata.lastSignInTime,
            lastLoginAt: userCredentials.metadata.lastLoginAt,
        }
        updateDoc(doc(db, "users", userCredentials.uid), updatedData)

    }).then(() =>
    {
        const docRef = doc(db, "users", userCredentials.uid);
        return getDoc(docRef)

    }).then(userData =>
    {
        const data = userData.data()
        return {name: {name: "FireBase", ...data}, email: data.email}

    }).
    then(user => {return user}).
    catch(error => {return error})

    return sign
}