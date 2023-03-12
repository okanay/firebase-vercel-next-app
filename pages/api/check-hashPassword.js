import {GetUserWithAccessToken_SQLQUERY} from "./get-user";
import bcrypt from "bcrypt";

export default async function handler(req, res) {

    const {accessToken, password, uid} = req.body

    if (accessToken !== undefined && password !== undefined && uid !== undefined) {

        GetUserWithAccessToken_SQLQUERY(accessToken, "users").then(response => {
            if (response.docs.length === 0) {
                res.status(401).json({match: false, message: "User not found!"})
            } else {
                response.forEach(doc => {

                    const data = doc.data()
                    bcrypt.compare(password, data.hashPassword, function (err, result) {

                        if (result) {
                            res.status(200).json({match: true, message: "Password match!"})
                        } else {
                            res.status(401).json({match: false, message: "Password not match!"})
                        }
                    });

                })
            }
        }).catch(err => {
            res.status(401).json({match: false, message: "Server connection lost!"})
        })
    }
}


// <p>Hello,</p>
// <p>Follow this link to reset your %APP_NAME% password for your %EMAIL% account.</p>
//
// <p><a href='%LINK%'>RESET YOUR PASSWORD</a></p>
// <p>%LINK%</p>
// <p>If you didn’t ask to reset your password, you can ignore this email.</p>
// <p>Thanks,</p>
// <p>Your %APP_NAME% team</p>