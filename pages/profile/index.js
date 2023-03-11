import {useRouter} from "next/router";
import {useEffect} from "react";

const ProfileIndexPage = () => {

    const router = useRouter()

    useEffect(() => {
        router.push('/profile/dashboard')
    }, [])

    return (
        <>
        </>)
}

export default ProfileIndexPage