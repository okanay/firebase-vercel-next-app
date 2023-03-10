import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import {SignWithEmailAndPasswordAndUpdateLoginData} from "../../../helpers/Fetchs-Functions/SignWithEmailAndPasswordAndUpdateLoginData";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials, req) {

                const response = await SignWithEmailAndPasswordAndUpdateLoginData(credentials.email, credentials.password)

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
