import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth, db} from "../../../src/firebase";
import {doc, getDoc} from "firebase/firestore";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials, req) {

                const response = await SignInFetch(credentials.email, credentials.password)

                if (response.email !== undefined)
                {
                    return response
                } else
                {
                    throw {status: 401, message: response.code};
                }
            }
        })
    ],
}
export default NextAuth(authOptions)

export const SignInFetch = async (email, password) => {

    const response = await signInWithEmailAndPassword(auth, email, password).
    then(UserCredentials =>
    {
        const docRef = doc(db, "users", UserCredentials.user.uid);
        return getDoc(docRef).
        then(result =>
        {
            const data = result.data()

            data.lastSignInTime = UserCredentials.user.metadata.lastSignInTime;
            data.lastLoginAt = UserCredentials.user.metadata.lastLoginAt;

            let user = {name: {name: "FireBase", ...data}, email: data.email}
            return user
        });
    }).
    then(data =>
    {
        return data
    }).
    catch(error =>
    {
        return error
    })

    return response
}