import {useEffect, useState} from "react";
import {signOut, useSession} from "next-auth/react";
import {GetFirebaseData} from "../Fetchs-Functions/GetFirebaseData";

export const useGetUserWithAccessToken = (session, status) => {

    const [response, setResponse] = useState({data: undefined, status: 'fetching', ok: false})
    const [error, setError] = useState({error: false, message: ""})

    useEffect(() => {
        console.log('costumHook Effect')
        if (status === "authenticated") {
            console.log('costumHook 1')
            if (session?.user?.name?.accessToken)
            {
                console.log('costumHook 2')
                GetFirebaseData("/api/getUserWithAccessToken", {
                    accessToken: session.user.name.accessToken,
                    collectionName : "users",
                    whereQuery: "accessToken"
                }).then(data => {
                    console.log('costumHook 3')
                    if (data.data === undefined)
                    {
                        console.log('costumHook 4')
                        throw new Error('No Data Found')
                    }

                    setResponse({data: data.data, status: 'Success!', ok: true})

                }).catch(err => {
                    console.log('costumHook 5')
                    setResponse({data: undefined, status: 'error', ok: false})
                    setError(err)
                    // signOut({callback : "/signin"})
                    // SafeSignOutFirebaseAndNextAuth()
                })
            }
        }
        else if (status === "unauthenticated")
        {
            console.log('costumHook 6')
            setResponse({data: undefined, status: 'unauthenticated', ok: false})
            setError({error: true, message: "User Unauthenticated!"})
        }
        else if (status === "loading")
        {
            console.log('costumHook 7')
            setResponse({data: undefined, status: 'loading', ok: false})
            setError({error: true, message: "Session Data Loading.."})
        }

    }, [session, status])

    console.log('costumHook 8')
    return [response, error]
}