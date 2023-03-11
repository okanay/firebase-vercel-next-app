import {useSession} from "next-auth/react";
import {useRouter} from "next/router";


export default function Home({}) {

    const router = useRouter()
    const {data: session, status} = useSession()
    if (status === 'unauthenticated') {
        router.push('/signin')
    }


    return (
        <>

        </>)
}
