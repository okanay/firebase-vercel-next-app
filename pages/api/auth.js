import {db, auth} from "../../src/firebase";


export default async function handler(req, res) {

    res.status(200).json({auth : auth.currentUser})

}