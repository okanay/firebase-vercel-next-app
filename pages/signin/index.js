import {useRef, useState} from "react";
import Cookies from "js-cookie";

import Link from "next/link";
import Head from "next/head";

import InformationText from "../../components/ui/informationText";

import {motion as m} from "framer-motion";
import {animationStore} from "../../framer-motion-animations/store";
import {signIn, signOut, useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {SignInErrors} from "../../helpers/Errors/SignInErrors";

const SignIn = () => {

    const {data: session, status} = useSession()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({status: false, message: ""})

    const router = useRouter()

    const emailRef = useRef()
    const passwordRef = useRef()
    const handleSignInFormSubmit = async (event) => {

        setLoading(true)
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const rememberMe = true

        const result = await signIn("credentials", {email, password, redirect: false , remember : false});

        await setLoading(false)

        if (result.ok) {

            router.push('/profile')

        } else {
            console.log(result.error)
            setError({status: true, message: SignInErrors(result.error)})
        }

    }

    return (<m.div
        variants={animationStore.main}
        initial='initial'
        animate='animate'
        exit={'exit'}
        className={'px-4 pt-6 bg-skin-theme-body-50 py-10'}>
        <Head>
            <title>Sign In to Next Auth - Firebase Demo</title>
            <meta name='description' content="Sign In to Next Auth - Firebase Demo"/>
        </Head>

        {/* Information - and Sign In Form */}
        <div
            className={'grid grid-cols-12 grid-flow-col gap-4 bg-skin-theme-body-100/50 laptop:px-20 desktop:px-24 rounded-xl relative'}>

            {loading && (
                <div
                    className={'absolute flex flex-col items-center justify-center w-full h-full bg-skin-theme-body-900/10 rounded-xl'}
                    role="status">
                    <svg aria-hidden="true"
                         className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                         viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"/>
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"/>
                    </svg>
                </div>
            )}

            {/* Information */}
            <div className={'hidden sm:block col-span-6 px-8 py-16'}>
                <m.div variants={animationStore.staggerBase}
                       initial="hidden"
                       animate="visible"
                       className={'flex flex-col gap-8 justify-start'}>

                    <InformationText title={"Get connected quickly!"}>Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit.</InformationText>
                    <InformationText title={"Support 2 authentication model!"}>Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Asperiores consequuntur..</InformationText>
                    <InformationText title={"Connecting to cloud server has never been easier!"}>Lorem ipsum
                        dolor
                        sit amet, consectetur adipisicing elit. Asperiores consequuntur..</InformationText>

                </m.div>
            </div>

            {/*Sign In Form*/}
            <div className={'col-span-12 md:col-span-6'}>
                <div className={'h-full w-full laptop:pl-8 px-4 my-8 tablet:my-14'}>
                    <m.div variants={animationStore.staggerShort}
                           initial="hidden"
                           animate="visible"
                           className={'bg-skin-theme-body-50 rounded-lg shadow flex flex-col justify-start py-6 px-8 gap-3 basePhone:gap-4'}>
                        <m.h2
                            variants={animationStore.loadOpacityWithXAngle}
                            className={'text-2xl font-bold text-skin-theme-font-100'}>Welcome back
                        </m.h2>
                        {/* Google and Apple Sign In Buttons*/}
                        <div
                            className={'flex flex-row justify-between text-xs desktop:text-sm font-semibold gap-8 basePhone:gap-4'}>
                            <m.button
                                variants={animationStore.loadOpacityWithXAngle}
                                className={'rounded-lg w-full py-3 bg-skin-theme-body-900 ring-1 ring-skin-theme-body-50 text-skin-theme-font-900'}>Log
                                in with Google
                            </m.button>
                            <m.button
                                variants={animationStore.loadOpacityWithXAngle}
                                className={'rounded-lg w-full py-3 bg-skin-theme-body-50 ring-1 ring-skin-theme-body-600/40 text-skin-theme-font-50'}>Log
                                in with Apple
                            </m.button>
                        </div>
                        {/* Diveded Bottoms - or - Diveded Bottoms*/}
                        <m.div
                            variants={animationStore.loadOpacityWithXAngle}
                            className={'flex flex-row justify-around gap-6 items-center'}>
                            <div
                                className={'border-b-[1.25px] rounded-2xl border-skin-theme-body-300/70 w-full h-1'}></div>
                            <p className={'text-skin-theme-font-400'}>or</p>
                            <div
                                className={'border-b-[1.25px] rounded-2xl border-skin-theme-body-300/70 w-full h-1'}></div>
                        </m.div>
                        {/* Email, Password, Forgot Password , Remember Me, Sign in Button, Sign Us*/}
                        <form onSubmit={handleSignInFormSubmit}>
                            <div className={'flex flex-col gap-5 justify-start'}>
                                <m.div
                                    variants={animationStore.loadOpacityWithYAngle}
                                >
                                    <input type="text" placeholder={'Email'} ref={emailRef}
                                           className={'px-3 w-full h-10 rounded-lg border border-skin-theme-body-300 bg-skin-theme-body-100 focus:outline-none'}/>
                                </m.div>

                                <m.div
                                    variants={animationStore.loadOpacityWithYAngle}
                                >
                                    <input type="password" placeholder={'Password'} ref={passwordRef}
                                           className={'px-3 w-full h-10 rounded-lg border border-skin-theme-body-300 bg-skin-theme-body-100 focus:outline-none'}/>
                                </m.div>
                                <m.div
                                    variants={animationStore.loadOpacityWithYAngle}
                                    className={'flex flex-row justify-between text-xs lgPhone:text-sm text-skin-theme-font-400'}>
                                    <div className={'flex flex-row justify-start gap-2'}>
                                        <input type={'checkbox'}/>
                                        <p>Remember me</p>
                                    </div>
                                    <p className={'text-bold text-skin-theme-400'}>Forgot password?</p>
                                </m.div>
                                <m.button
                                    variants={animationStore.loadOpacityWithYAngle}
                                    className={'rounded-lg w-full py-3 text-lg laptop:text-xl font-semibold bg-gradient-to-tl from-skin-theme-400 to-skin-theme-500 border border-skin-theme-50 text-skin-theme-font-900'}>Sign
                                    in to your account
                                </m.button>
                                {error.status && (<p className={'w-full py-2 text-center text-sm text-skin-theme-font-50 font-semibold bg-skin-theme-body-800/20 rounded'}> {error.message}</p>)}
                                <m.p
                                    variants={animationStore.loadOpacityWithXAngleShort}
                                    className={'text-xs lgPhone:text-sm text-center'}>Dont have an account
                                    yet? <Link
                                        href={'/signup'}
                                        className={'font-bold text-skin-theme-400'}>Sign
                                        up here</Link></m.p>
                            </div>
                        </form>
                    </m.div>
                </div>
            </div>
        </div>
    </m.div>)
}

export default SignIn