import {db, auth} from "../../src/firebase";


export default async function handler(req, res) {

    auth.signOut().then(res.status(200).json({ok : true , message : "Sign Out Firebase Complete!"})).catch(error => {res.status(500).status({ok : false ,message : "Sign Out Error!"})})


}