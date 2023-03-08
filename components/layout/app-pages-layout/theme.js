import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {changeThemeColorByAction, changeThemeModeByAction} from "../../../src/features/theme/themeSlice";

const Theme = ({children}) => {

    const theme = useSelector(state => state.theme.value)

    const dispatch = useDispatch()
    const [darkModeCookies, setDarkModeCookie] = useCookies(['darkModeTheme']);
    const [colorCookies, setColorCookie] = useCookies(['selectedTheme']);

    useEffect(() => {
        const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const prefersValueClass = prefersDarkMode === true ? "dark" : "light"

        if (colorCookies.selectedTheme !== undefined) {
            dispatch(changeThemeColorByAction(colorCookies.selectedTheme))
        }

        if (darkModeCookies.darkModeTheme !== undefined) {
            dispatch(changeThemeModeByAction(darkModeCookies.darkModeTheme))
        } else {
            dispatch(changeThemeModeByAction(prefersValueClass))

        }
    }, []);

    return <div className={'second-theme third-theme fourth-theme fifth-theme sixth-theme seventh-theme eighth-theme ninth-theme root-theme dark light'}>
        <div className={`${theme.color} ${theme.mode} bg-skin-theme-body-50 text-skin-theme-font-50 h-[100vh]`}>{children}</div>
    </div>
}

export default Theme