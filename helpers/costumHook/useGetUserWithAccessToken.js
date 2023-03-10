import {useEffect, useState} from "react";
import {GetFirebaseData} from "../Fetchs-Functions/GetFirebaseData";

export const useGetUserData = async (session) => {

    const [user, setUser] = useState({data: undefined, status: 'error', ok: false})

    useEffect(() => {

        if (session.accessToken !== undefined)
        {
            CustomGetUserFetch(session).then(response => {
                setUser({...response})
            }).catch(error => {
                console.log(error)
            })
        }

    }, [session])

    return user
}
export const CustomGetUserFetch = async (session) => {

    const data = GetFirebaseData("/api/getUserWithAccessToken", {
        accessToken : session.accessToken,
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
