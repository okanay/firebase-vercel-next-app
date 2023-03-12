import {useRef, useState} from "react";
import {CheckHashPasswordFetch} from "../../../helpers/fetchs-functions/checkHashPasswordFetch";
import {db, auth} from "../../../src/firebase/firebase";
import {sendPasswordResetEmail, confirmPasswordReset} from "firebase/auth";


export const PasswordControl = ({fetchData}) => {

    const [fetchResult, setFetchResult] = useState({
        fetchStart: false,
        fetchStatus: false,
        match: false,
        message: "Fetch not start!"
    })
    const passwordRef = useRef()
    const emailRef = useRef()

    const formForgetPasswordHandleSubmit = async (event) => {
        event.preventDefault()
        const email = emailRef.current.value
        const fetchSend = {...fetchResult}
        fetchSend.fetchStart = true
        fetchSend.fetchStatus = false
        setFetchResult(fetchSend)

        sendPasswordResetEmail(auth, email).then(res => {
            fetchSend.match = true
            fetchSend.message = "Check your email address!"
            fetchSend.fetchStart = false
            fetchSend.fetchStatus = true
            setFetchResult({...fetchSend})
        }).catch(error => {
            fetchSend.match = false
            fetchSend.message = error.code
            fetchSend.fetchStart = false
            fetchSend.fetchStatus = true
            setFetchResult({...fetchSend})
        })
    }

    return (<div className={'flex flex-row flex-wrap justify-start items-start gap-6 text-base cursor-pointer'}>

        <form className={'flex flex-col justify-start items-start gap-3'} onSubmit={formForgetPasswordHandleSubmit}>
            <input type="text" placeholder={"Enter your email address"} ref={emailRef}
                   className={'px-2 w-full h-10 rounded border border-skin-theme-body-300 bg-skin-theme-body-100 focus:outline-none placeholder:text-xs'}/>
            <button
                className={'rounded w-full py-3 font-semibold bg-gradient-to-tl from-skin-theme-400 to-skin-theme-500 border border-skin-theme-50 text-skin-theme-font-900'}>Reset
                Password!
            </button>
        </form>

        {fetchResult.fetchStart === true ? (
            <div className={'flex flex-col gap-2 py-4 px-8 bg-skin-theme-body-100/50 rounded'}>
                <div
                    className={'w-24 h-4 bg-gradient-to-r from-skin-theme-body-200 to-skin-theme-body-300/80 animate-pulse rounded'}/>
                <div
                    className={'w-52 h-4 bg-gradient-to-r from-skin-theme-body-200 to-skin-theme-body-300/80 animate-pulse rounded'}/>
            </div>
        ) : ""}

        {fetchResult.fetchStatus === true ? (
            <div className={'font-semibold text-sm py-4 px-8 bg-skin-theme-body-100/50 rounded'}>
                <p>result : <span
                    className={`${fetchResult.match ? "text-emerald-400" : "text-red-400"}`}>{fetchResult.match ? "true" : "false"}</span>
                </p>
                <p>message : <span
                    className={`${fetchResult.match ? "text-emerald-400" : "text-red-400"}`}>{fetchResult.message}</span>
                </p>
            </div>
        ) : ""}


    </div>)
}

