import { useState} from "react";
import {GetFirebaseData} from "../Fetchs-Functions/GetFirebaseData";

export const GetUserWithAccessToken = async (session) => {

    const data = await GetFirebaseData("/api/getUserWithAccessToken", {
            accessToken: session.accessToken,
            collectionName : "users",
            whereQuery: "accessToken"
        }).then(data => {
            if (data.data === undefined)
            {
                throw new Error('No Data Found')
            }

            const response = {data: data.data, status: 'Success', ok: true}
            return response

        }).catch(err => {

            const response = {data: undefined, status: 'error', ok: false}
            return response
        })

    return data
}