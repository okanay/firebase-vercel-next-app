import {getSession} from "next-auth/react";

export default async function authMiddleware(req, res, next) {
    const session = await getSession({ req });

    if (!session)
    {
        res.status(402).json({message : false});
    }
    else
    {
        res.status(200).json({message : true});
    }
}