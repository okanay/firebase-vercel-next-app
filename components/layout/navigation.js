import Link from "next/link";

const Navigation = () => {

    return (<div className={'bg-skin-theme-body-50 px-4 pt-4 pb-2'}>
        <div className={'flex flex-row justify-between w-full items-center'}>
            <Link href={'/'} className={'text-skin-theme-400 font-semibold text-xl lgPhone:text-3xl'}>Firebase Auth</Link>
            <div className={'space-x-3 text-xs lgPhone:text-sm'}>
                <Link
                    href={'/signin'}
                    className={'rounded px-4 py-2 bg-skin-theme-body-50 border border-skin-theme-300 text-skin-theme-font-50'}>Sign
                    In
                </Link>
                <Link
                    href={'/'}
                    className={'rounded px-4 py-2 bg-skin-theme-400 border border-skin-theme-50 text-skin-theme-font-900'}>Sign
                    Up
                </Link>
            </div>
        </div>
    </div>)
}

export default Navigation