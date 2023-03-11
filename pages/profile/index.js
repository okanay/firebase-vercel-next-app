import ProfileLayout from "../../components/layout/profile-pages-layout/profileLayout";
import {getSession} from "next-auth/react";

import {motion as m} from "framer-motion";
import {animationStore} from "../../framer-motion-animations/store";
import {useGetUserData} from "../../src/costum-hooks/useGetUserData";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const ProfileIndex = (props) => {

    const reduxSession = useSelector(state => state.user.value)
    const [data, isLoading] = useGetUserData(reduxSession.user.accessToken)

    return (
        <ProfileLayout>
            {isLoading ? <div className={'w-full h-full flex flex-col justify-start gap-4 py-2 px-4'}>

                <div className={'w-full h-12 bg-skin-theme-body-100 animate-pulse'}/>
                <div className={'w-full h-24 bg-skin-theme-body-100 animate-pulse'}/>

            </div> : (
            <m.div variants={animationStore.main} initial='initial' animate='animate' exit={'exit'}>
                <h1 className={'text-3xl'}>Profile Index</h1>
                <div className={'flex flex-col gap-1 mt-2 text-sm font-light bg-skin-theme-100/20 py-2 px-4 rounded max-w-screen-laptop'}>
                    <div className={'mb-4 text-skin-theme-font-100 font-semibold'}>
                        <p>Fetch : <span className={'text-skin-theme-600'}>{data.ok || data.status === "error" ? "complete" : "fetching"}</span></p>
                        <p>Fetch status : <span className={'text-skin-theme-600'}>{data.status === "Success!" ? "success" : data.status}</span></p>
                        <p>Redux Session : <span className={'text-skin-theme-600'}>{reduxSession.user.accessToken ? "available" : "not available"}</span></p>
                    </div>

                    {data.ok && (
                        <div className={'space-y-0.5 text-skin-theme-font-100 font-semibold'}>
                            <p className={'truncate flex flex-row gap-2'}>accessToken : <span className={'text-skin-theme-600'}>{data.data.data.accessToken}</span></p>
                            <p className={'truncate flex flex-row gap-2'}>refreshToken :  <span className={'text-skin-theme-600'}>{data.data.data.refreshToken}</span></p>
                            <p className={'truncate flex flex-row gap-2'}>id :  <span className={'text-skin-theme-600'}>{data.data.id}</span></p>
                        </div>
                    )}
                </div>
            </m.div>
            )}
        </ProfileLayout>
    )
}

export default ProfileIndex