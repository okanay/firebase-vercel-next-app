import {useRef, useState} from "react";
import InformationText from "../../components/ui/informationText";
import Head from "next/head";
import Link from "next/link";
import {motion as m} from "framer-motion";
import {animationStore} from "../../framer-motion-animations/store";
import {SignUpErrors} from "../../helpers/errors-codes/SignUpErrors";
import {useRouter} from "next/router";
import {SignUpHead} from "../../src/head-components/sign-up-head";
const SignUp = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({status : false , message : ""})
    const router = useRouter()

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const handleSignUpForm = async (event) => {
        setLoading(true)
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const response = await fetch('/api/sign-up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        }).
        then(response =>
        {
            return response.json()
        }).
        then(data =>
        {
            return data
        }).
        catch(error =>
        {
            return error
        });

        setLoading(false)

        if (response.status !== 200) {
            const responseError = {status : true, message : SignUpErrors(response.error)}
            setError({...responseError})
        }
        else if (response.status === 200 ) {
            localStorage.setItem('authentication', JSON.stringify(response.data))
            router.push('/signin')
        }
    };

    return (<m.div
        variants={animationStore.main} initial='initial'
        animate='animate'
        exit={'exit'}
        className={'px-4 pt-6 bg-skin-theme-body-50 py-10'}>

        {/* >>>> src >>>> head-components >>>> sign-up-head*/}
        <SignUpHead/>
        {/* Information - and Sign In Form */}
        <div className={'grid grid-cols-12 grid-flow-col max-w-screen-laptop mx-auto items-center laptop:items-start w-full'}>

            {/* Information */}
            <div className={'hidden sm:block col-span-6 px-12 laptop:px-0 py-16'}>
                <m.div variants={animationStore.staggerBase}
                       initial="hidden"
                       animate="visible"
                       className={'flex flex-col gap-8 justify-start'}>

                    <InformationText title={"Get started quickly!"}>Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit.</InformationText>
                    <InformationText title={"Support 2 authentication model!"}>Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Asperiores consequuntur..</InformationText>
                    <InformationText title={"Connecting to cloud server has never been easier!"}>Lorem ipsum
                        dolor
                        sit amet, consectetur adipisicing elit. Asperiores consequuntur..</InformationText>

                </m.div>
            </div>

            {/*Sign In Form*/}
            <div className={'col-span-12 md:col-span-6 p-4 tablet:ml-12 tablet:my-12 tablet:max-w-screen'}>
                <div className={'w-full flex flex-col items-center justify-center'}>
                    <m.div variants={animationStore.staggerShort}
                           initial="hidden"
                           animate="visible"
                           className={'bg-skin-theme-body-50 rounded-lg shadow flex flex-col justify-start py-6 px-8 gap-3 basePhone:gap-4 max-w-screen-xlPhone w-full'}>
                        <m.h2
                            variants={animationStore.loadOpacityWithXAngle}
                            className={'text-2xl font-bold text-skin-theme-font-100'}>Create a account
                        </m.h2>
                        {/* Google and Apple Sign In Buttons*/}
                        <div
                            className={'flex flex-row justify-between text-xs font-semibold gap-8 basePhone:gap-4'}>
                            <m.button
                                variants={animationStore.loadOpacityWithXAngle}
                                className={'rounded-lg w-full py-3 bg-skin-theme-body-900 ring-1 ring-skin-theme-body-50 text-skin-theme-font-900'}>Sign with Google
                            </m.button>
                            <m.button
                                variants={animationStore.loadOpacityWithXAngle}
                                className={'rounded-lg w-full py-3 bg-skin-theme-body-50 ring-1 ring-skin-theme-body-600/40 text-skin-theme-font-50'}>Sign with Apple
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
                        <form onSubmit={handleSignUpForm}>
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
                                <m.button
                                    variants={animationStore.loadOpacityWithYAngle}
                                    className={'rounded-lg w-full py-3 text-lg font-semibold bg-gradient-to-tl from-skin-theme-400 to-skin-theme-500 border border-skin-theme-50 text-skin-theme-font-900'}>Create a new Account
                                </m.button>
                                {error.status && (<p className={'w-full py-2 text-center text-sm text-skin-theme-font-50 font-semibold bg-skin-theme-body-800/20 rounded'}> {error.message}</p>)}
                                <m.p
                                    variants={animationStore.loadOpacityWithXAngleShort}
                                    className={'text-xs text-center'}>Do you have account already? <Link
                                        href={'/signin'}
                                        className={'font-bold text-skin-theme-400'}>Sign
                                        in here</Link></m.p>
                            </div>
                        </form>
                    </m.div>
                </div>
            </div>
        </div>
    </m.div>)
}

export default SignUp

