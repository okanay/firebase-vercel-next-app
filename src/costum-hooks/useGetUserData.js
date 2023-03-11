import {useEffect, useState} from "react";
import {GetFirebaseData} from "../../helpers/fetchs-functions/GetFirebaseData";

export const useGetUserData = async (session) => {

    const [user, setUser] = useState({data: undefined, status: 'error', ok: false})

    useEffect(() => {

        if (session.accessToken !== undefined)
        {
            CustomGetUserFetch(session.accessToken).then(response => {
                setUser({...response})
            }).catch(error => {
                const errorData = {data: undefined, status: 'error', ok: false}
                setUser({...errorData})
            })
        }

    }, [session])

    return user
}
export const CustomGetUserFetch = async (accessToken) => {

    const data = GetFirebaseData("/api/get-user", {
        accessToken,
        collectionName : "users",
        whereQuery: "accessToken"
    }).then(data => {

        if (data.data === undefined)
        {
            throw new Error('No Data Found')
        }

        return {data: data.data, status: 'success', ok: true}

    }).catch(err => {

        return {data: undefined, status: 'error', ok: false}
    })

    return data

}
