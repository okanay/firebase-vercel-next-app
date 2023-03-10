import {useEffect, useState} from "react";
import {signOut, useSession} from "next-auth/react";
import {GetFirebaseData} from "../Fetchs-Functions/GetFirebaseData";

export const useGetUserWithAccessToken = (session, status) => {

    const [response, setResponse] = useState({data: undefined, status: 'fetching', ok: false})
    const [error, setError] = useState({error: false, message: ""})

    console.log({ message : 'Custom Hook session : ', session : session})


    useEffect(() => {
        console.log('CustomHook : Effect Start')
        if (status === "authenticated") {
            console.log('CustomHook : if 1')
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
            else{
                console.log('CustomHook : if 1 : else 1')
                return
            }
        }
        else if (status === "unauthenticated")
        {
            console.log('CustomHook : else if 1')
            setResponse({data: undefined, status: 'unauthenticated', ok: false})
            setError({error: true, message: "User Unauthenticated!"})
        }
        else if (status === "loading")
        {
            console.log('CustomHook : else if 2')
            setResponse({data: undefined, status: 'loading', ok: false})
            setError({error: true, message: "Session Data Loading.."})
        }

    }, [session, status])

    console.log({ message : 'Custom Hook status : ', status : status})
    console.log({ message : 'Custom Hook session : ', session : session})
    console.log({ message : 'Custom Hook session.user : ', session : session.user})
    console.log('Return Custom Hook : ')
    return [response, error]
}