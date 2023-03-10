import ProfileLayout from "../../components/layout/profile-pages-layout/profileLayout";
import {getSession, useSession} from "next-auth/react";

import {motion as m} from "framer-motion";
import {animationStore} from "../../framer-motion-animations/store";

const ProfileIndex = () => {

    const {data: session, status} = useSession()


    return (
        <ProfileLayout>
            <m.div variants={animationStore.main} initial='initial' animate='animate' exit={'exit'}>
                <h1 className={'text-3xl'}>Profile Index</h1>
                <div className={'flex flex-col gap-1 mt-2 text-sm font-light bg-skin-theme-100/20 py-2 px-4 rounded'}>
                    {session?.user && (
                       <>
                           <p>createdAt <span>{session.user.name.createdAt}</span></p>
                           <p>creationTime <span>{session.user.name.creationTime}</span></p>
                           <p>email <span>{session.user.name.email}</span></p>
                           <p>emailVerified <span>{session.user.name.emailVerified ? ": true ": ": false"}</span></p>
                           <p>lastLoginAt <span>{session.user.name.lastLoginAt}</span></p>
                           <p>lastSignInTime <span>{session.user.name.lastSignInTime}</span></p>
                           <p>Database Name <span>{session.user.name.name}</span></p>
                           <p className={'truncate flex flex-row gap-2'}>accessToken <span>{session.user.name.accessToken}</span></p>
                           <p className={'truncate flex flex-row gap-2'}>refreshToken <span>{session.user.name.refreshToken}</span></p>
                           <p className={'truncate flex flex-row gap-2'}>tokenExpire <span>{session.user.name.tokenExpire}</span></p></>
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