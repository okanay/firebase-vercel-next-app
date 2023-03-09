import {Fragment, useRef} from "react";
import InformationText from "../../components/ui/informationText";
import Head from "next/head";
import Link from "next/link";
import {motion as m} from "framer-motion";
import {animationStore} from "../../framer-motion-animations/store";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {doc, setDoc} from "firebase/firestore";
import {auth, db} from '../../src/firebase'

const SignUp = () => {

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const handleSignUpForm = async (event) => {
        event.preventDefault()

        const email = emailRef.current.value
        const password = passwordRef.current.value

        fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(response => response.json())
            .then(data => console.log(data.data))
            .catch(error =>
            {
                console.log(error)
            });
    };

    return (<m.div
        variants={animationStore.main} initial='initial'
        animate='animate'
        exit={'exit'}
        className={'px-4 pt-6 bg-skin-theme-body-50 py-10'}>

        {/* Meta Data Information, Headers*/}
        <Head>
            <title>Sign Up To Next Auth - Firebase Demo</title>
            <meta name='description' content="Sign Up to Next Auth - Firebase Demo"/>
        </Head>

        {/* Information - and Sign In Form */}
        <div
            className={'grid grid-cols-12 grid-flow-col gap-4 bg-skin-theme-body-100/50 laptop:px-20 desktop:px-24 rounded-xl'}>
            {/* Information */}
            <div className={'hidden sm:block col-span-6 px-8 py-16'}>
                <m.div variants={animationStore.staggerBase}
                       initial="hidden"
                       animate="visible" className={'flex flex-col gap-8 justify-start'}>
                    <InformationText title={"Get started quickly!"}>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.</InformationText>
                    <InformationText title={"Support 2 authentication model!"}>Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Asperiores consequuntur..</InformationText>
                    <InformationText title={"Connecting to cloud server has never been easier!"}>Lorem ipsum dolor
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
                        <m.h2 variants={animationStore.loadOpacityWithXAngle}
                              className={'text-2xl font-bold text-skin-theme-font-100'}>Create a account
                        </m.h2>
                        {/* Google and Apple Sign In Buttons*/}
                        <div
                            className={'flex flex-row justify-between text-xs desktop:text-sm font-semibold gap-8 smPhone:gap-4'}>
                            <m.button
                                variants={animationStore.loadOpacityWithXAngle}
                                className={'rounded-lg w-full py-3 bg-skin-theme-body-900 ring-1 ring-skin-theme-body-50 text-skin-theme-font-900'}>Sign
                                with Google
                            </m.button>
                            <m.button
                                variants={animationStore.loadOpacityWithXAngle}
                                className={'rounded-lg w-full py-3 bg-skin-theme-body-50 ring-1 ring-skin-theme-body-600/40 text-skin-theme-font-50'}>Sign
                                with Apple
                            </m.button>
                        </div>
                        {/* Diveded Bottoms - or - Diveded Bottoms*/}
                        <m.div
                            variants={animationStore.loadOpacityWithXAngle}
                            className={'flex flex-row justify-around gap-6 items-center'}>
                            <div
                                className={'border-b-[1.25px] rounded-2xl border-skin-theme-body-300/70 w-full h-1 '}></div>
                            <p className={'text-skin-theme-font-400'}>or</p>
                            <div
                                className={'border-b-[1.25px] rounded-2xl border-skin-theme-body-300/70 w-full h-1 '}></div>
                        </m.div>
                        {/* Email, Password, Sign Up Button, Sign In if you have an account*/}
                        <form onSubmit={handleSignUpForm}>
                            <div className={'flex flex-col gap-5 justify-start'}>
                                <m.div variants={animationStore.loadOpacityWithYAngle}>
                                    <input
                                        type="text" placeholder={'Email'} ref={emailRef}
                                        className={'px-3 w-full h-10 rounded-lg border border-skin-theme-body-300 bg-skin-theme-body-100 focus:outline-none'}/>
                                </m.div>
                                <m.div variants={animationStore.loadOpacityWithYAngle}>
                                    <input
                                        type="password" placeholder={'Password'} ref={passwordRef}
                                        className={'px-3 w-full h-10 rounded-lg border border-skin-theme-body-300 bg-skin-theme-body-100 focus:outline-none'}/>
                                </m.div>
                                <m.button
                                    variants={animationStore.loadOpacityWithYAngle}
                                    className={'rounded-lg w-full py-3 text-lg laptop:text-xl font-semibold bg-gradient-to-tl from-skin-theme-400 to-skin-theme-500 border border-skin-theme-50 text-skin-theme-font-50'}>
                                    Create your new account
                                </m.button>
                                <m.p
                                    variants={animationStore.loadOpacityWithXAngleShort}
                                    className={'text-xs lgPhone:text-sm text-center'}>
                                    Do you have account already? <Link href={'/signin'}
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