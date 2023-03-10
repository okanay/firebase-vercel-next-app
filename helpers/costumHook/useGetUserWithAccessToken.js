import {useEffect, useState} from "react";
import {GetUsersWithAccessTokenFetch} from "../Fetchs-Functions/GetUsersWithAccessTokenFetch";
import {useSession} from "next-auth/react";

export const useGetUserWithAccessToken = () => {

    const [response, setResponse] = useState({status : 'fetching', data : undefined})
    const [error, setError] = useState({error : false, message : "No Error!"})
    const {data: session, status} = useSession()

    useEffect(() => {

        if (status === "authenticated")
        {
            if (session?.user?.name?.accessToken)
            {
                GetUsersWithAccessTokenFetch(session.user.name.accessToken).
                then(data =>
                {
                    setResponse({status: 'ok', data: data.data})

                }).catch(err => {

                    setResponse({status: 'error', data: undefined})
                    setError(err)
                })
            }
        }

    }, [session, status])

    return [response, error]
}