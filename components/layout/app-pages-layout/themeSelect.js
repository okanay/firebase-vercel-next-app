import {useDispatch, useSelector} from "react-redux";
import {changeThemeColorByAction, changeThemeModeByAction} from "../../../src/features/theme/themeSlice";
import Head from "next/head";

const ThemeSelect = () => {

    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme.value)

    return <div className={"bg-skin-theme-body-50"}>
        <Head>
            <title>Theme Selector</title>
            <meta name='description' content="Theme Selector, For Next JS Firebase Example."/>
        </Head>
        <div className={'flex flex-row justify-between'}>
            <div className={'pl-0.5'}>
                {theme !== undefined && theme.themes.map(item => {
                    return (<button
                        key={item.theme + "color-change-theme"}
                        onClick={() => {
                            dispatch(changeThemeColorByAction(item.theme))
                        }}
                        className={`mr-3 ${item.theme} ${theme.color !== item.theme ? "w-4 h-4" : "w-[1.1rem] h-[1.1rem]"} rounded-full ${theme.color === item.theme ? "bg-skin-theme-400 ring-skin-theme-body-800" : "bg-skin-theme-300 ring-skin-theme-body-900"} ring-2 `}/>)
                })}
            </div>
            <div className={''}>
                {theme !== undefined && theme.modes.map(item => {
                    return (<button
                        key={item.mode + "mode-change-theme"}
                        onClick={() => {
                            dispatch(changeThemeModeByAction(item.mode))
                        }}
                        className={`ml-3 ${item.mode} rounded-full ring ring-skin-theme-body-900 bg-skin-theme-body-50 ${theme.mode !== item.mode ? "w-4 h-4" : "w-[1.1rem] h-[1.1rem]"}`}/>)
                })}
            </div>
        </div>
    </div>
}

export default ThemeSelect