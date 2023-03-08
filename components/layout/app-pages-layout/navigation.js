import Link from "next/link";
import {useSelector} from "react-redux";
import Head from "next/head";

const Navigation = () => {

    const theme = useSelector(state => state.theme.value)


    return (<div className={'bg-skin-theme-body-50 px-4 py-2'}>
        <Head>
            <title>Sign Next Firebase</title>
            <meta name='description' content="Sign In, Sign Us to Next Auth - Firebase Demo"/>
        </Head>
        <div className={'flex flex-row flex-wrap justify-between w-full items-center'}>
            <Link href={'/'} className={'text-skin-theme-400 font-semibold text-lg basePhone:text-xl xlPhone:text-3xl'}>Firebase
                Auth</Link>
            <div className={'flex flex-row gap-3 items-center text-xs basePhone:text-sm'}>
                <Link
                    href={'/signin'}
                    className={'rounded px-4 py-2 bg-skin-theme-body-900 border border-skin-theme-body-50 text-skin-theme-font-900'}>Sign
                    In
                </Link>
                <Link
                    href={'/signup'}
                    className={'rounded px-4 py-2 bg-skin-theme-body-50 border border-skin-theme-body-900 text-skin-theme-font-50'}>Sign
                    Up
                </Link>
                <Link
                    href={'/profile'}
                    className={'hidden sm:block rounded px-4 py-2 bg-skin-theme-400 border border-skin-theme-200 text-skin-theme-font-1000'}>Profile
                </Link>
            </div>
        </div>
    </div>)
}

export default Navigation