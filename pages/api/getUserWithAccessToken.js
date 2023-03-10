import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "../../src/firebase";
export default async function handler(req, res) {

    const {accessToken} = req.body

    if (accessToken !== undefined)
    {
        await getUsersWithAccessToken(accessToken).then((data) => {

            data.forEach(doc => {
                res.status(200).json({data : doc.data(), status : 200})
                return;
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

export const getUsersWithAccessToken = async (accessToken) => {

    const q = query(collection(db, "users"), where("accessToken", "==", accessToken));
    const querySnapshot = await getDocs(q);

    return querySnapshot
}
