import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import {SignWithEmailAndPassword_Custom} from "../../../helpers/firebase-server-functions/SignWithEmailAndPassword_Custom";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials, req) {

                const response = await SignWithEmailAndPassword_Custom(credentials.email, credentials.password)

                if (response.email !== undefined) {
                    return response
                } else {
                    throw {status: 401, message: response.code};
                }
            }
        })
    ],
    secret: process.env.JWT_SECRET
}
export default NextAuth(authOptions)
