import {doc, setDoc} from "firebase/firestore";
import {auth, db} from "../../src/firebase/firebase";
import {createUserWithEmailAndPassword} from "firebase/auth";
export default async function handler(req, res) {

    const {email, password } = req.body
    let user = undefined

    if (email !== undefined && password !== undefined)
    {
        createUserWithEmailAndPassword(auth, email, password).
        then(response => {return response.user}).
        then(data =>
        {
            user = data
            return user.stsTokenManager
        }).
        then(stsTokenManager =>
        {
            const { uid , email, emailVerified } = user
            const { creationTime, lastSignInTime, createdAt, lastLoginAt} = user.metadata
            const { refreshToken, accessToken, expirationTime } = stsTokenManager
            const data = {
                email,
                emailVerified,
                creationTime,
                lastSignInTime,
                createdAt,
                lastLoginAt,
                accessToken,
                refreshToken,
                tokenExpire : expirationTime,
            }

            setDoc(doc(db, "users", uid), data).
            then(() =>
            {
                res.status(200).json({data : data, status : 200})
            })
        }).
        catch(error =>
        {
            res.status(500).json({error: error.code, status : 500})
        })
    }
    else
    {
        res.status(500).json({error: 'No Data', status : 500})
    }
}