import ProfileLayout from "../../components/layout/profile-pages-layout/profileLayout";
import {motion as m} from "framer-motion";
import {animationStore} from "../../framer-motion-animations/store";
import {useSession} from "next-auth/react";

const ProfileIndex = () => {

    const {data: session, status} = useSession()

    if (session?.user === undefined) {
        return (<><p>Loading...</p></>)
    }

    const {
        accessToken,
        createdAt,
        creationTime,
        email,
        emailVerified,
        lastLoginAt,
        lastSignInTime,
        name,
        refreshToken,
        tokenExpire
    } = session.user.name

    return (
        <ProfileLayout>
            <m.div variants={animationStore.main} initial='initial' animate='animate' exit={'exit'}>
                <h1 className={'text-3xl'}>Profile Index</h1>
                <div className={'flex flex-col gap-1 mt-2 text-sm font-light bg-skin-theme-100/20 py-2 px-4 rounded'}>
                    <p className={'truncate flex flex-row gap-2'}>accessToken <span>{accessToken}</span></p>
                    <p>createdAt <span>{createdAt}</span></p>
                    <p>creationTime <span>{creationTime}</span></p>
                    <p>email <span>{email}</span></p>
                    <p>emailVerified <span>{emailVerified}</span></p>
                    <p>lastLoginAt <span>{lastLoginAt}</span></p>
                    <p>lastSignInTime <span>{lastSignInTime}</span></p>
                    <p>Database Name <span>{name}</span></p>
                    <p className={'truncate flex flex-row gap-2'}>refreshToken <span>{refreshToken}</span></p>
                    <p className={'truncate flex flex-row gap-2'}>tokenExpire <span>{tokenExpire}</span></p>
                </div>
            </m.div>
        </ProfileLayout>
    )
}

export default ProfileIndex