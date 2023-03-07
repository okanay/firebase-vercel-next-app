import {Fragment} from "react";
import InformationText from "../../components/ui/informationText";
import Head from "next/head";
import Link from "next/link";

const SignUp = () => {

    return (<Fragment>
        <div className={'px-4 pt-6 bg-skin-theme-body-50 py-10'}>

            <Head>
                <title>Sign Up To Next Auth - Firebase Demo</title>
                <meta name='description' content="Sign Up to Next Auth - Firebase Demo" />
            </Head>

            {/* Information - and Sign In Form */}
            <div className={'grid grid-cols-12 grid-flow-col gap-4 bg-skin-theme-body-100 laptop:px-20 desktop:px-24 rounded-xl'}>

                {/* Information */}
                <div className={'hidden tablet:block col-span-6 px-8 py-16'}>
                    <div className={'flex flex-col gap-8 justify-start'}>
                        <InformationText title={"Get started quickly!"}>Integrate with developer-friendly APIs or choose
                            low-code.</InformationText>
                        <InformationText title={"Support 2 authentication model!"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur..</InformationText>
                        <InformationText title={"Connecting to cloud server has never been easier!"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur..</InformationText>
                    </div>
                </div>

                {/*Sign In Form*/}
                <div className={'col-span-12 md:col-span-6'}>
                    <div className={'h-full w-full laptop:pl-8 px-4 my-8 tablet:my-14'}>
                        <div className={'bg-skin-theme-body-50 rounded-lg shadow flex flex-col justify-start py-6 px-8 gap-5'}>
                            <h2 className={'text-2xl font-bold text-skin-theme-font-100'}>Create a account</h2>
                            {/* Google and Apple Sign In Buttons*/}
                            <div
                                className={'flex flex-row justify-between text-[0.7rem] basePhone:text-xs tablet:sm font-semibold gap-4'}>
                                <button
                                    className={'rounded-lg w-full py-3 bg-skin-theme-body-900 ring-1 ring-skin-theme-body-50 text-skin-theme-font-900'}>Sign with Google
                                </button>
                                <button
                                    className={'rounded-lg w-full py-3 bg-skin-theme-body-50 ring-1 ring-skin-theme-body-600/40 text-skin-theme-font-50'}>Sign with Apple
                                </button>
                            </div>
                            {/* Diveded Bottoms - or - Diveded Bottoms*/}
                            <div className={'flex flex-row justify-around gap-6 extensionNavigationBars-center'}>
                                <div
                                    className={'border-b-[1.25px] rounded-2xl border-skin-theme-body-300/70 w-full h-1'}></div>
                                <p className={'text-skin-theme-font-400'}>or</p>
                                <div
                                    className={'border-b-[1.25px] rounded-2xl border-skin-theme-body-300/70 w-full h-1'}></div>
                            </div>
                            {/* Email, Password, Forgot Password , Remember Me, Sign in Button, Sign Us*/}
                            <form>
                                <div className={'flex flex-col gap-5 justify-start'}>
                                    <input type="text" placeholder={'Email'}
                                           className={'px-3 w-full h-10 rounded-lg border border-skin-theme-body-300 bg-skin-theme-body-100 focus:outline-none'}/>
                                    <input type="password" placeholder={'Password'}
                                           className={'px-3 w-full h-10 rounded-lg border border-skin-theme-body-300 bg-skin-theme-body-100 focus:outline-none'}/>


                                    <button
                                        className={'rounded-lg w-full py-3 bg-skin-theme-400 ring-1 ring-skin-theme-600/40 text-skin-theme-font-900 text-lg font-semibold'}>
                                        Create your new account
                                    </button>
                                    <p className={'text-xs lgPhone:text-sm text-center'}>
                                        Do you have account already? <Link href={'/signin'} className={'font-bold text-skin-theme-400'}>Sign in here</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>)
}

export default SignUp