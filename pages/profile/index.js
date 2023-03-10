import ProfileLayout from "../../components/layout/profile-pages-layout/profileLayout";
import {getSession} from "next-auth/react";

import {motion as m} from "framer-motion";
import {animationStore} from "../../framer-motion-animations/store";
import {CustomGetUserFetch, useGetUserData} from "../../helpers/costumHook/useGetUserWithAccessToken";
import {useState} from "react";

const ProfileIndex = (props) => {

    const { data : session} = props

    const [user, setUser] = useState({data: undefined, status: 'error', ok: false})
    useGetUserData(session).then(response => {
        setUser({...response})
    })

    return (
        <ProfileLayout>
            <m.div variants={animationStore.main} initial='initial' animate='animate' exit={'exit'}>
                <h1 className={'text-3xl'}>Profile Index</h1>
                <div className={'flex flex-col gap-1 mt-2 text-sm font-light bg-skin-theme-100/20 py-2 px-4 rounded max-w-screen-laptop'}>
                    <div className={'mb-4 text-skin-theme-font-100 font-semibold'}>
                        <p>Fetch : <span className={'text-skin-theme-600'}>{user.ok ? "complete" : "..."}</span></p>
                        <p>Fetch status : <span className={'text-skin-theme-600'}>{user.status === "Success!" ? "success" : user.status + ".."}</span></p>
                        <p>Access Token : <span className={'text-skin-theme-600'}>{session.accessToken ? "available" : "not available"}</span></p>
                    </div>

                    {user.ok && (
                        <div className={'space-y-0.5 text-skin-theme-font-100 font-semibold'}>
                            <p className={'truncate flex flex-row gap-2'}>accessToken : <span className={'text-skin-theme-600'}>{user.data.data.accessToken}</span></p>
                            <p className={'truncate flex flex-row gap-2'}>refreshToken :  <span className={'text-skin-theme-600'}>{user.data.data.refreshToken}</span></p>
                            <p className={'truncate flex flex-row gap-2'}>id :  <span className={'text-skin-theme-600'}>{user.data.id}</span></p>
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
    if (session) {

        return {
            props: {
                data : session.user.name,
            },
        };
    }
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        };
}