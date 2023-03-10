import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "../../src/firebase";
export default async function handler(req, res) {

    const {accessToken, collectionName} = req.body

    if (accessToken !== undefined && collectionName !== undefined)
    {
        await GetUserWithAccessToken_SQLQUERY(accessToken, collectionName).then((data) => {

            data.forEach(doc => {
                res.status(200).json({data : doc.data(), status : 200})

            })
        }).catch(error =>
        {
            res.status(500).json({error: error.code || "error found!", status : 500})
        })
    }
    else
    {
        res.status(500).json({error: 'No Data', status : 500})
    }
}

export const GetUserWithAccessToken_SQLQUERY = async (accessToken, collectionName) => {

    const q = query(collection(db, collectionName), where("accessToken", "==", accessToken));
    return await getDocs(q)
}
