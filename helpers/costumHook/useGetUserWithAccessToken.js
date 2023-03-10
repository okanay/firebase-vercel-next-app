import {useEffect, useState} from "react";
import {GetFirebaseData} from "../Fetchs-Functions/GetFirebaseData";

export const useGetUserData = async (accessToken) => {

    const [user, setUser] = useState({})

    useEffect(() => {

        if (accessToken !== undefined)
        {
            CustomFetch(accessToken).then(response => {
                setUser({...response})
            })
        }

    }, [accessToken])

    return user
}

const CustomFetch = async (accessToken) => {

    const data = GetFirebaseData("/api/getUserWithAccessToken", {
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
