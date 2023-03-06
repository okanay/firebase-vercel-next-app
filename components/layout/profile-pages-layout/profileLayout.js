import Link from "next/link";

const ProfileLayout = ({children}) => {

    return (
        <div
            className={'grid grid-cols-12 grid-flow-col space-x-4 border-t border-b border-r border-skin-theme-body-400/20 text-skin-theme-font-50'}>
            <div className={'hidden tablet:block col-span-3 border-r border-l border-skin-theme-body-400/20 bg-skin-theme-body-100/20 p-8'}>
                <div className={'flex flex-col w-full gap-8 items-start'}>

                    {/* Return Container*/}
                    <Link href={'/profile'} className={'group w-fit'}>
                        <div
                            className={'flex flex-row gap-3 items-center w-full bg-skin-theme-body-100/40 w-fit px-4 py-2 rounded group-hover:bg-skin-theme-body-100/80 font-semibold'}>
                            <h5 className={'text-sm group-hover:text-skin-theme-font-100'}>{`<`}</h5>
                            <h5 className={'text-2xl group-hover:text-skin-theme-font-100'}>Return</h5>
                        </div>
                    </Link>

                    {/* Settings Container*/}
                    <div className={'flex flex-col items-start w-full'}>
                        <h4 className={'text-xl text-skin-theme-400 mb-1'}>Settings</h4>
                        <Link className={'group w-fit'} href={'/profile/account'}>
                            <h5
                                className={'text-sm rounded px-1.5 py-2 hover:bg-skin-theme-body-200/80 hover:text-skin-theme-font-200'}>
                                Accounts
                            </h5>
                        </Link>
                        <Link className={'group w-fit'} href={'/profile/security'}>
                            <h5
                                className={'text-sm rounded px-1.5 py-2 hover:bg-skin-theme-body-200/80 hover:text-skin-theme-font-200'}>
                                Security
                            </h5>
                        </Link>
                        <Link className={'group w-fit'} href={'/profile/notifications'}>
                            <h5
                                className={'text-sm rounded px-1.5 py-2 hover:bg-skin-theme-body-200/80 hover:text-skin-theme-font-200'}>
                                Notifications
                            </h5>
                        </Link>
                        <Link className={'group w-fit'} href={'/profile/information'}>
                            <h5
                                className={'text-sm rounded px-1.5 py-2 hover:bg-skin-theme-body-200/80 hover:text-skin-theme-font-200'}>
                                Account Information
                            </h5>
                        </Link>
                    </div>

                    {/* Preferences Container */}
                    <div className={'flex flex-col items-start w-full'}>
                        <h4 className={'text-xl text-skin-theme-400 mb-1'}>Preferences</h4>
                        <Link className={'group w-fit'} href={'/profile/color-theme'}>
                            <h5
                                className={'text-sm rounded px-1.5 py-2 hover:bg-skin-theme-body-200/80 hover:text-skin-theme-font-200'}>
                                Color Theme
                            </h5>
                        </Link>
                        <Link className={'group w-fit'} href={'/profile/languages'}>
                            <h5
                                className={'text-sm rounded px-1.5 py-2 hover:bg-skin-theme-body-200/80 hover:text-skin-theme-font-200'}>
                                Languages
                            </h5>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={'col-span-12 tablet::col-span-9 p-8'}>
                {children}
            </div>
        </div>
    )
}

export default ProfileLayout
