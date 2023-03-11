import {useEffect} from "react";
import {reduxSignOut} from "../redux-features/user/userSlice";
import {useDispatch} from "react-redux";

export const useErrorSignOutEffect = (isLoading, fetchData) => {

    const dispatch = useDispatch()

    useEffect(() => {

        if (isLoading !== undefined) {
            if (isLoading === false) {
                if(fetchData.status === "error" && !fetchData.ok)
                {
                    dispatch(reduxSignOut())
                }
            }
        }


    }, [fetchData, isLoading])

}