import {useEffect, useState} from "react";
import {GetFirebaseData} from "../../helpers/fetchs-functions/GetFirebaseData";

export const useGetUserData = (accessToken) => {

    const [fetchData, setFetchData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        if (accessToken !== undefined)
        {
            setIsLoading(true)
            CustomGetUserFetch(accessToken).then(response => {
                setIsLoading(false)
                setFetchData({...response})
            }).catch(error => {
                setIsLoading(false)
                const errorData = {data: undefined, status: 'error', ok: false}
                setFetchData({...errorData})
            })
        }

    }, [accessToken])

    return [fetchData, isLoading];
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
