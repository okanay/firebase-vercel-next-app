import {useSession} from "next-auth/react";
export default function Home({children}) {
    const {data: session, status} = useSession()

    console.log(session?.user)
    return (<div>Index</div>)
}
