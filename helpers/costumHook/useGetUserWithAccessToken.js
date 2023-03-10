import {useEffect, useState} from "react";
import {signOut, useSession} from "next-auth/react";
import {GetFirebaseData} from "../Fetchs-Functions/GetFirebaseData";

export const useGetUserWithAccessToken = () => {



    const [response, setResponse] = useState({data: undefined, status: 'fetching', ok: false})
    const [error, setError] = useState({error: false, message: ""})
    const {data: session, status} = useSession()

    useEffect(() => {

        if (status === "authenticated") {
            if (session?.user?.name?.accessToken)
            {
                GetFirebaseData("/api/getUserWithAccessToken", {
                    accessToken: session.user.name.accessToken,
                    collectionName : "users",
                    whereQuery: "accessToken"
                }).then(data => {

                    if (data.data === undefined)
                    {
                        throw new Error('No Data Found')
                    }

                    setResponse({data: data.data, status: 'Success!', ok: true})

                }).catch(err => {

                    setResponse({data: undefined, status: 'error', ok: false})
                    setError(err)
                    // signOut({callback : "/signin"})
                    // SafeSignOutFirebaseAndNextAuth()
                })
            }
        }
        else if (status === "unauthenticated")
        {
            setResponse({data: undefined, status: 'unauthenticated', ok: false})
            setError({error: true, message: "User Unauthenticated!"})
        }
        else if (status === "loading")
        {
            setResponse({data: undefined, status: 'loading', ok: false})
            setError({error: true, message: "Session Data Loading.."})
        }

    }, [session, status])

    return [response, error]
}