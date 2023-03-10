import {GetFirebaseAuthFetch} from "../Fetchs-Functions/GetFirebaseAuthFetch";
import {useEffect, useState} from "react";

export const useGetUserWithAccessToken = () => {

    const [response, setResponse] = useState({data: undefined, status: 'fetching', ok: false})
    const [error, setError] = useState({error: false, message: ""})

    useEffect(() => {

        GetFirebaseAuthFetch().then(response => {
            setResponse({data: response.auth, status: 'Success!', ok: true})
        }).catch(err => {
            setResponse({data: undefined, status: 'error', ok: false})
            setError(err)
        })
    }, [])

    return [response, error]
}