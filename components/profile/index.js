import {motion as m} from "framer-motion";
import {animationStore} from "../../framer-motion-animations/store";
import {useGetUserData} from "../../src/costum-hooks/useGetUserData";
import {useSelector} from "react-redux";

import {useErrorSignOutEffect} from "../../src/costum-hooks/useErrorSignOutEffect";

const ProfileIndex = () => {

    const reduxSession = useSelector(state => state.user.value)
    const [fetchData, isLoading] = useGetUserData(reduxSession.user.accessToken)
    useErrorSignOutEffect(isLoading, fetchData)

    return <>{isLoading === true ? <div className={'h-full flex flex-col justify-start gap-4 py-2 px-4'}>

        <div className={'w-full h-12 bg-skin-theme-body-100 animate-pulse'}/>
        <div className={'w-full h-24 bg-skin-theme-body-100 animate-pulse'}/>

    </div> : (
        <m.div variants={animationStore.main} initial='initial' animate='animate' exit={'exit'} className={''}>
            <h1 className={'text-3xl'}>Profile Index</h1>
            <div
                className={'flex flex-col gap-1 text-sm font-light bg-skin-theme-100/20 px-4 rounded'}>
                <div className={'mt-4 text-skin-theme-font-100 font-semibold'}>
                    <p>Fetch status : <span
                        className={'text-skin-theme-600'}>{fetchData?.status === "Success!" ? "success" : fetchData.status}</span>
                    </p>
                    <p>Redux Session : <span
                        className={'text-skin-theme-600'}>{reduxSession?.user.accessToken ? "available" : "not available"}</span>
                    </p>
                    <p>Firestore Access : <span
                        className={'text-skin-theme-600'}>{fetchData?.ok ? "accepted" : "denied"}</span></p>
                </div>
            </div>

            {fetchData.ok && (
                <div className={'text-skin-theme-font-100 font-semibold mt-4 flex flex-col gap-1 text-sm font-light bg-skin-theme-100/20 px-4 rounded p-4'}>
                    <p className={'truncate flex flex-row gap-2'}>accessToken : <span
                        className={'text-skin-theme-600'}>{fetchData.data.data.accessToken ? "useable" : "not useable"}</span>
                    </p>
                    <p className={'truncate flex flex-row gap-2'}>refreshToken : <span
                        className={'text-skin-theme-600'}>{fetchData.data.data.refreshToken ? "useable" : "not useable"}</span>
                    </p>
                    <div class="flex flex-row gap-2 justify-start items-start w-full">
                        <p className={''}>hash password</p>
                        <div className={'whitespace-pre-wrap overflow-x-auto pb-2'}>
                            <span className={'text-skin-theme-600'}>{fetchData.data.data.hashPassword}</span>
                        </div>
                    </div>
                </div>

            )}
        </m.div>
    )
    }
    </>
}

export default ProfileIndex

