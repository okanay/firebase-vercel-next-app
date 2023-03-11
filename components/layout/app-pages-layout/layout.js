import Navigation from "./navigation";
import Theme from "./theme";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {Loading} from "./loading";
const Layout = ({children}) => {

    const LoadingRouter = () => {
        const router = useRouter()
        const path = router.pathname
        const [loading, setLoading] = useState(false)

        useEffect(() => {

            const handleStart = (url) => (url !== router.pathname) && setLoading(true)
            const handleComplete = (url) => (url === router.pathname) && setTimeout(() => {setLoading(false)}, 500)

            router.events.on('routeChangeStart', handleStart)
            router.events.on('routeChangeComplete', handleComplete)
            router.events.on('routeChangeError', handleComplete)

            return () => {

                router.events.off('routeChangeStart', handleStart)
                router.events.off('routeChangeComplete', handleComplete)
                router.events.off('routeChangeError', handleComplete)

            }

        }, [])

        return loading && <Loading/>
    }

    return (

        <Theme>
            <div className={'max-w-screen-desktop mx-auto'}>
                <Navigation/>
                <LoadingRouter/>
                {children}
            </div>
        </Theme>
    )
}

export default Layout

