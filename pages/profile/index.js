import ProfileLayout from "../../components/layout/profile-pages-layout/profileLayout";
import {getSession} from "next-auth/react";

import {motion as m} from "framer-motion";
import {animationStore} from "../../framer-motion-animations/store";
import {useGetUserWithAccessToken} from "../../helpers/costumHook/useGetUserWithAccessToken";

const ProfileIndex = () => {

    const [user, error] = useGetUserWithAccessToken("users")

    return (
        <ProfileLayout>
            <m.div variants={animationStore.main} initial='initial' animate='animate' exit={'exit'}>
                <h1 className={'text-3xl'}>Profile Index</h1>
                <div className={'flex flex-col gap-1 mt-2 text-sm font-light bg-skin-theme-100/20 py-2 px-4 rounded'}>

                    <div className={'mb-4'}>
                        <p>accessTokenFetchOk : {user.ok ? "true" : "false"}</p>
                        <p>accessTokenFetchStatus : {user.status ? "true" : "false"}</p>

                    </div>

                    {user.ok && (
                           <div className={'space-y-0.5 text-skin-theme-font-400 font-semibold'}>
                               <p className={'truncate flex flex-row gap-2'}>accessToken <span>{user.data.accessToken}</span></p>
                               <p className={'truncate flex flex-row gap-2'}>refreshToken <span>{user.data.refreshToken}</span></p>
                               <p className={'truncate flex flex-row gap-2'}>tokenExpire <span>{user.data.tokenExpire}</span></p>
                           </div>
                    )}
                </div>
            </m.div>
        </ProfileLayout>
    )
}

export default ProfileIndex


export async function getServerSideProps(context) {

    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        };
    }

    return {
        props: {
            session: true,
        },
    };
}