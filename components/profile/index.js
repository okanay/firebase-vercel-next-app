import {motion as m} from "framer-motion";
import {animationStore} from "../../framer-motion-animations/store";
import {useGetUserData} from "../../src/costum-hooks/useGetUserData";
import {useSelector} from "react-redux";

import {useErrorSignOutEffect} from "../../src/costum-hooks/useErrorSignOutEffect";
import {PasswordControl} from "./profile-functions/password-control";

const ProfileIndex = () => {

    const reduxSession = useSelector(state => state.user.value)
    const [fetchData, isLoading] = useGetUserData(reduxSession.user.accessToken)
    useErrorSignOutEffect(isLoading, fetchData)

    return <>
        <h1 className={'text-3xl mb-2'}>Dashboard</h1>
        {isLoading === true ? <div className={'h-full flex flex-col justify-start gap-4 py-2 px-4'}>

            <div className={'w-full h-16 bg-skin-theme-body-100 animate-pulse'}/>

            <div className={'w-full h-32 bg-skin-theme-body-100 animate-pulse'}/>

        </div> : (
            <m.div variants={animationStore.main} initial='initial' animate='animate' exit={'exit'} className={''}>
                <div
                    className={'flex flex-row gap-4 items-center inline-flex text-sm font-light '}>
                    <div className={'my-4 text-skin-theme-font-100 font-semibold  py-4 px-8 bg-skin-theme-body-100/50 rounded'}>
                        <p>Fetch status : <span
                            className={'text-skin-theme-600'}>{fetchData?.status === "Success!" ? "success" : fetchData.status}</span>
                        </p>
                        <p>Redux Session : <span
                            className={'text-skin-theme-600'}>{reduxSession?.user.accessToken ? "available" : "not available"}</span>
                        </p>
                        <p>Firestore Access : <span
                            className={'text-skin-theme-600'}>{fetchData?.ok ? "accepted" : "denied"}</span></p>
                    </div>

                    {fetchData?.data?.data?.hashPassword && (
                        <PasswordControl fetchData={fetchData}/>
                    )}
                </div>
            </m.div>
        )
        }
    </>
}

export default ProfileIndex

