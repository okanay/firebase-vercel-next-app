import {Fragment} from "react";
import InformationText from "../../components/ui/informationText";
import Link from "next/link";
import Head from "next/head";
import {motion as m} from "framer-motion";
import {animationStore} from "../../framer-motion-animations/store";


const SignIn = () => {

    return (<>
        <m.div variants={animationStore.main} initial='initial' animate='animate' exit={'exit'}
               className={'px-4 pt-6 bg-skin-theme-body-50 py-10'}>

            <Head>
                <title>Sign In to Next Auth - Firebase Demo</title>
                <meta name='description' content="Sign In to Next Auth - Firebase Demo"/>
            </Head>

            {/* Information - and Sign In Form */}
            <div
                className={'grid grid-cols-12 grid-flow-col gap-4 bg-skin-theme-body-100/50 laptop:px-20 desktop:px-24 rounded-xl'}>

                {/* Information */}
                <div className={'hidden sm:block col-span-6 px-8 py-16'}>
                    <m.div variants={animationStore.staggerBase}
                           initial="hidden"
                           animate="visible"
                           className={'flex flex-col gap-8 justify-start'}>

                        <InformationText title={"Get connected quickly!"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</InformationText>
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
                                className={'text-2xl font-bold text-skin-theme-font-100'}>Welcome back</m.h2>
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
                            <form>
                                <div className={'flex flex-col gap-5 justify-start'}>
                                    <m.div
                                        variants={animationStore.loadOpacityWithYAngle}
                                    >
                                    <input type="text" placeholder={'Email'}
                                           className={'px-3 w-full h-10 rounded-lg border border-skin-theme-body-300 bg-skin-theme-body-100 focus:outline-none'}/>
                                    </m.div>

                                    <m.div
                                        variants={animationStore.loadOpacityWithYAngle}
                                    >
                                    <input type="password" placeholder={'Password'}
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
                                        className={'rounded-lg w-full py-3 text-lg laptop:text-xl font-semibold bg-gradient-to-tl from-skin-theme-400 to-skin-theme-500 border border-skin-theme-50 text-skin-theme-font-50'}>Sign
                                        in to your account
                                    </m.button>
                                    <m.p
                                        variants={animationStore.loadOpacityWithXAngleShort}
                                        className={'text-xs lgPhone:text-sm text-center'}>Dont have an account yet? <Link
                                        href={'/signup'}
                                        className={'font-bold text-skin-theme-400'}>Sign
                                        up here</Link></m.p>
                                    <Link
                                        href={'/profile'}
                                        className={'font-bold text-skin-theme-400 text-xs lgPhone:text-sm text-center'}>
                                        <m.span variants={animationStore.loadOpacityWithYAngleShort}>
                                            Go To Dummy Profile Page
                                        </m.span>
                                    </Link>
                                </div>
                            </form>
                        </m.div>
                    </div>
                </div>
            </div>
        </m.div>
    </>)
}

export default SignIn