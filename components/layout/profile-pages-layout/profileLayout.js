import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {motion as m} from "framer-motion";
import {animationStore} from "../../../framer-motion-animations/store";
import useMediaQuery from "../../../src/costum-hooks/useMediaQuery";
import {useSession} from "next-auth/react";
import {useSetReduxSessionEffect} from "../../../src/costum-hooks/useSetReduxSessionEffect";
import {
    changeSideNavigationSelectedTypeOpposite,
    changeSideNavigationTypeToOpened,
} from "../../../src/redux-features/extensionNavigation/extensionNavigationSlicer";
import {useEffect} from "react";

const ProfileLayout = ({children}) => {

    const dispatch = useDispatch();
    const {data: session, status} = useSession()
    const NavAnimationHiddenMediaQuery = useMediaQuery("771px", "hiddenMobil", "hidden")
    const NavAnimationBlockMediaQuery = useMediaQuery("771px", "blockMobil", "block")

    const extensionNavigation = useSelector(state => state.extensionNavigation)
    useSetReduxSessionEffect(session, status)

    return (
        <div className={'flex flex-row justify-start max-w-screen-desktop mx-auto'}>
            <button onClick={() => {
                dispatch(changeSideNavigationSelectedTypeOpposite())
            }}
                    type="button"
                    className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-skin-theme-font-50 rounded-lg absolute tablet:hidden">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd"
                          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <m.div variants={animationStore.sideNavigationBar}
                   animate={extensionNavigation.value.sideNavigationSelectedType.statusType === "hidden" ? `${NavAnimationHiddenMediaQuery}` : `${NavAnimationBlockMediaQuery}`}
                   initial={extensionNavigation.value.sideNavigationSelectedType.statusType === "hidden" ? 'initialHidden' : "initial"}
                   className={`w-64 h-[100vh]`}
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-skin-theme-body-50">
                    <ul
                        className="space-y-2">
                        <li
                        >
                            <Link href="/profile/dashboard"
                                  className="flex items-center w-full p-2 text-base font-normal text-skin-theme-font-50 transition duration-75 rounded-lg group hover:bg-skin-theme-body-100">
                                <svg aria-hidden="true"
                                     className="w-6 h-6 text-skin-theme-400 transition duration-75 group-hover:text-skin-theme-font-50"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                </svg>
                                <span className="ml-3">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <button type="button"
                                    onClick={() => {
                                        dispatch(changeExtensionState(0))
                                    }}
                                    className="flex items-center w-full p-2 text-base font-normal text-skin-theme-font-50 transition duration-75 rounded-lg group hover:bg-skin-theme-body-100"
                                    aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <svg aria-hidden="true"
                                     className="w-6 h-6 text-skin-theme-400 transition duration-75 group-hover:text-skin-theme-font-50"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                                </svg>
                                <span className="flex-1 ml-3 text-left whitespace-nowrap">Settings</span>
                                <svg className="w-6 h-6 touch-none" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clipRule="evenodd"></path>
                                </svg>
                            </button>
                            <ul id="dropdown-example"
                                className={`${extensionNavigation.value.extensionNavigationBars[0].value} py-2 space-y-2`}>
                                <li>
                                    <Link href="/profile/account"
                                          className="flex items-center w-full p-2 pl-11 text-base font-normal text-skin-theme-font-50 transition duration-75 rounded-lg group hover:bg-skin-theme-body-100">Accounts</Link>
                                </li>
                                <li>
                                    <Link href="/profile/security"
                                          className="flex items-center w-full p-2 pl-11 text-base font-normal text-skin-theme-font-50 transition duration-75 rounded-lg group hover:bg-skin-theme-body-100">Security</Link>
                                </li>
                                <li>
                                    <Link href="/profile/notifications"
                                          className="flex items-center w-full p-2 pl-11 text-base font-normal text-skin-theme-font-50 transition duration-75 rounded-lg group hover:bg-skin-theme-body-100">Notifications</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button type="button"
                                    onClick={() => {
                                        dispatch(changeExtensionState(1))
                                    }}
                                    className="flex items-center w-full p-2 text-base font-normal text-skin-theme-font-50 transition duration-75 rounded-lg group hover:bg-skin-theme-body-100"
                                    aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <svg aria-hidden="true"
                                     className="w-6 h-6 text-skin-theme-400 transition duration-75 group-hover:text-skin-theme-font-50"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                          clipRule="evenodd"></path>
                                </svg>
                                <span className="flex-1 ml-3 text-left whitespace-nowrap"
                                >Privacy</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clipRule="evenodd"></path>
                                </svg>
                            </button>
                            <ul id="dropdown-example"
                                className={`${extensionNavigation.value.extensionNavigationBars[1].value} py-2 space-y-2`}>
                                <li>
                                    <Link href="/profile/colorTheme"
                                          className="flex items-center w-full p-2 pl-11 text-base font-normal text-skin-theme-font-50 transition duration-75 rounded-lg group hover:bg-skin-theme-body-100">Color
                                        Theme</Link>
                                </li>
                                <li>
                                    <Link href="/profile/languages"
                                          className="flex items-center w-full p-2 pl-11 text-base font-normal text-skin-theme-font-50 transition duration-75 rounded-lg group hover:bg-skin-theme-body-100">Languages</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </m.div>
            <div onClick={() => {
                dispatch(changeSideNavigationTypeToOpened())
            }} className={'truncate w-full py-4 mt-8 tablet:mt-0 px-5 h-[100vh]'}>
                {children}
            </div>
        </div>
    )
}

export default ProfileLayout

