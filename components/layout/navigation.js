import Link from "next/link";
import {useSelector} from "react-redux";

const Navigation = () => {

    const theme = useSelector(state => state.theme.value)


    return (<div className={'bg-skin-theme-body-50 px-4 py-2'}>
        <div className={'flex flex-row justify-between w-full items-center'}>
            <Link href={'/'} className={'text-skin-theme-400 font-semibold text-xl lgPhone:text-3xl'}>Firebase Auth</Link>
            <div className={'space-x-3 text-xs lgPhone:text-sm'}>
                <Link
                    href={'/signin'}
                    className={'rounded px-4 py-2 bg-skin-theme-body-900 border border-skin-theme-body-50 text-skin-theme-font-900'}>Sign
                    In
                </Link>
                <Link
                    href={'/'}
                    className={'rounded px-4 py-2 bg-skin-theme-body-50 border border-skin-theme-body-900 text-skin-theme-font-50'}>Sign
                    Up
                </Link>
            </div>
        </div>
    </div>)
}

export default Navigation