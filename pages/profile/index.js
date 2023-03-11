import ProfileLayout from "../../components/layout/profile-pages-layout/profileLayout";
import {motion as m} from "framer-motion";
import {animationStore} from "../../framer-motion-animations/store";
import {useGetUserData} from "../../src/costum-hooks/useGetUserData";
import { useSelector} from "react-redux";

import {useErrorSignOutEffect} from "../../src/costum-hooks/useErrorSignOutEffect";

const ProfileIndex = () => {

    const reduxSession = useSelector(state => state.user.value)
    const [fetchData, isLoading] = useGetUserData(reduxSession.user.accessToken)
    useErrorSignOutEffect(isLoading,fetchData)


    return (
        <ProfileLayout>
            {isLoading ? <div className={'w-full h-full flex flex-col justify-start gap-4 py-2 px-4'}>

                <div className={'w-full h-12 bg-skin-theme-body-100 animate-pulse'}/>
                <div className={'w-full h-24 bg-skin-theme-body-100 animate-pulse'}/>

            </div> : (
                <m.div variants={animationStore.main} initial='initial' animate='animate' exit={'exit'}>
                    <h1 className={'text-3xl'}>Profile Index</h1>
                    <div
                        className={'flex flex-col gap-1 mt-2 text-sm font-light bg-skin-theme-100/20 py-2 px-4 rounded'}>
                        <div className={'mb-4 text-skin-theme-font-100 font-semibold'}>
                            <p>Fetch status : <span
                                className={'text-skin-theme-600'}>{fetchData?.status === "Success!" ? "success" : fetchData.status}</span>
                            </p>
                            <p>Redux Session : <span
                                className={'text-skin-theme-600'}>{reduxSession?.user.accessToken ? "available" : "not available"}</span>
                            </p>
                            <p>Firestore Access : <span
                                className={'text-skin-theme-600'}>{fetchData?.ok ? "accepted" : "denied"}</span></p>
                        </div>

                        {fetchData.ok && (
                            <div className={'space-y-0.5 text-skin-theme-font-100 font-semibold'}>
                                <p className={'truncate flex flex-row gap-2'}>accessToken : <span
                                    className={'text-skin-theme-600'}>{fetchData.data.data.accessToken ? "useable" : "not useable"}</span>
                                </p>
                                <p className={'truncate flex flex-row gap-2'}>refreshToken : <span
                                    className={'text-skin-theme-600'}>{fetchData.data.data.refreshToken ? "useable" : "not useable"}</span>
                                </p>
                                <p className={'truncate flex flex-row gap-2'}>id : <span
                                    className={'text-skin-theme-600'}>{fetchData.data.id}</span></p>
                            </div>
                        )}
                    </div>
                </m.div>
            )}
        </ProfileLayout>
    )
}

export default ProfileIndex