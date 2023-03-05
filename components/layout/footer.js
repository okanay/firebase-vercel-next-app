import {useDispatch, useSelector} from "react-redux";
import {changeThemeColorByAction, changeThemeModeByAction} from "../../src/features/theme/themeSlice";

const Footer = () => {

    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme.value)

    console.log(theme)

    return <div className={"bg-skin-theme-body-50 px-4 py-2"}>
        <div className={'flex flex-row justify-between px-4 py-2'}>
            <div className={'space-x-3'}>
            {theme !== undefined && theme.themes.map(item => {
                return (
                    <button
                        key={item.theme + "color-change-theme"}
                        onClick={() => {dispatch(changeThemeColorByAction(item.theme))}}
                        className={`${item.theme} w-4 h-4 rounded-full ${theme.color === item.theme ? "bg-skin-theme-200" : "bg-skin-theme-body-50"} ring-2 ring-skin-theme-600`} />
                )
            })}
            </div>
            <div className={'space-x-3'}>
                {theme !== undefined && theme.modes.map(item => {
                    return (
                        <button
                            key={item.mode + "mode-change-theme"}
                            onClick={() => {dispatch(changeThemeModeByAction(item.mode))}}
                            className={`${item.mode} w-4 h-4 rounded-full ${item.mode !== "light" ? "bg-skin-theme-body-50 ring-2 ring-skin-theme-body-900" : "bg-skin-theme-body-50 ring-2 ring-skin-theme-body-900"}`} />
                    )
                })}
            </div>
        </div>
    </div>
}

export default Footer