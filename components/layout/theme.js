import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

const Theme = ({children}) => {

    const theme = useSelector(state => state.theme.value)

    return <div color={'second-theme third-theme fourth-theme fifth-theme sixth-theme root-theme dark light'}>
        <div className={`${theme.color} ${theme.mode} bg-skin-theme-body-50 text-skin-theme-font-50`}>{children}</div>
    </div>
}

export default Theme