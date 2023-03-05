import {Fragment} from "react";
import InformationText from "../../components/ui/informationText";
import Link from "next/link";

const SignIn = () => {

    return (<Fragment>
        <div className={'px-4 pt-6 bg-skin-theme-body-50 py-10'}>

            {/* Information - and Sign In Form */}
            <div className={'grid grid-cols-12 grid-flow-col gap-4 bg-skin-theme-body-100 laptop:px-20 desktop:px-24 rounded-xl'}>

                {/* Information */}
                <div className={'hidden tablet:block col-span-6 px-8 py-16'}>
                    <div className={'flex flex-col gap-8 justify-start'}>
                        <InformationText title={"Get started quickly"}>Integrate with developer-friendly APIs or choose
                            low-code.</InformationText>
                        <InformationText title={"Support any business model"}>Host code that you dont want to share with
                            the world in private.</InformationText>
                        <InformationText title={"Join millions of businesses"}>Flowbite is trusted by ambitious startups
                            and enterprises of every size.</InformationText>
                    </div>
                </div>

                {/*Sign In Form*/}
                <div className={'col-span-12 md:col-span-6'}>
                    <div className={'h-full w-full laptop:pl-8 px-4 my-14'}>
                        <div
                            className={'bg-skin-theme-body-50 rounded-lg shadow flex flex-col justify-start py-6 px-8 gap-5'}>
                            <h2 className={'text-2xl font-bold text-skin-theme-font-100'}>Welcome back</h2>
                            {/* Google and Apple Sign In Buttons*/}
                            <div
                                className={'flex flex-row justify-between text-[0.7rem] basePhone:text-xs tablet:sm font-semibold gap-4'}>
                                <button
                                    className={'rounded-lg w-full py-3 bg-skin-theme-body-900 ring-1 ring-skin-theme-body-50 text-skin-theme-font-900'}>Log
                                    in with Google
                                </button>
                                <button
                                    className={'rounded-lg w-full py-3 bg-skin-theme-body-50 ring-1 ring-skin-theme-body-600/40 text-skin-theme-font-50'}>Log
                                    in with Apple
                                </button>
                            </div>
                            {/* Diveded Bottoms - or - Diveded Bottoms*/}
                            <div className={'flex flex-row justify-around gap-6 items-center'}>
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
                                           className={'px-4 w-full h-10 rounded-lg border border-skin-theme-body-300 bg-skin-theme-body-100 focus:outline-none'}/>
                                    <input type="password" placeholder={'Password'}
                                           className={'px-4 w-full h-10 rounded-lg border border-skin-theme-body-300 bg-skin-theme-body-100 focus:outline-none'}/>

                                    <div className={'flex flex-row justify-between text-sm text-skin-theme-font-400'}>
                                        <div className={'flex flex-row justify-start gap-2'}>
                                            <input type={'checkbox'}/>
                                            <p>Remember me</p>
                                        </div>
                                        <p className={'text-bold text-skin-theme-400'}>Forgot password?</p>
                                    </div>
                                    <button
                                        className={'rounded-lg w-full py-3 bg-skin-theme-400 ring-1 ring-skin-theme-600/40 text-skin-theme-font-900 text-lg font-semibold'}>Sign
                                        in to your account
                                    </button>
                                    <p className={'text-sm'}>Dont have an account yet? <Link href={'/'}
                                                                                             className={'font-bold text-skin-theme-400'}>Sign
                                        up here</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>)
}

export default SignIn