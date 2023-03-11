import {useEffect} from "react";
import {reduxSignIn} from "../redux-features/user/userSlice";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";

export const useSetReduxSessionEffect = (session, status) => {

    const router = useRouter()
    const dispatch = useDispatch()
    const reduxSession = useSelector(state => state.user.value)

    useEffect(() => {

        if (status === 'unauthenticated')
        {
            router.push('/signin')
        }
        else
        {
            if (session?.user?.name !== undefined && reduxSession.user === "")
            {
                dispatch(reduxSignIn(session.user.name))
            }
        }
    }, [session])


}