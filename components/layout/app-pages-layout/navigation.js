import Link from "next/link";
import Head from "next/head";
import {useSession} from "next-auth/react";
import {SafeSignOutFirebaseAndNextAuth} from "../../../helpers/Fetchs-Functions/SafeSignOutFirebaseAndNextAuth";

const Navigation = () => {

    const {data: session, status} = useSession()
    return (<div className={'bg-skin-theme-body-50 px-4 py-2'}>
        <Head>
            <title>Sign Next Firebase</title>
            <meta name='description' content="Sign In, Sign Us to Next Auth - Firebase Demo"/>
        </Head>
        <div className={'flex flex-row flex-wrap justify-between w-full items-center'}>
            <Link href={'/'} className={'text-skin-theme-400 font-semibold text-lg basePhone:text-xl xlPhone:text-3xl'}>Firebase
                Auth</Link>
            {
                !session?.user ? (
                    <div className={'flex flex-row gap-3 items-center text-xs basePhone:text-sm font-semibold'}>
                        <Link href={'/signin'}
                              className={'rounded px-4 py-2 bg-skin-theme-body-900 border border-skin-theme-body-50 text-skin-theme-font-900'}>Sign
                            In</Link>
                        <Link href={'/signup'}
                              className={'rounded px-4 py-2 bg-skin-theme-body-50 border border-skin-theme-body-900 text-skin-theme-font-50'}>Sign
                            Up</Link>
                    </div>
                ) : (
                    <div className={'flex flex-row gap-3 items-center text-xs basePhone:text-sm font-semibold'}>
                        <button onClick={() => {SafeSignOutFirebaseAndNextAuth()}}
                                className={'rounded px-4 py-2 bg-skin-theme-body-900 border border-skin-theme-body-50 text-skin-theme-font-900'}>Sign
                            Out
                        </button>
                        <Link href={'/profile'}
                              className={'rounded px-4 py-2 bg-gradient-to-tl from-skin-theme-400 to-skin-theme-500 border border-skin-theme-50 text-skin-theme-50'}>Profile
                        </Link>
                    </div>
                )
            }
        </div>
    </div>)
}

export default Navigation