import ProfileLayout from "../../components/layout/profile-pages-layout/profileLayout";
import {getSession, useSession} from "next-auth/react";

import {motion as m} from "framer-motion";
import {animationStore} from "../../framer-motion-animations/store";
import {useGetUserWithAccessToken} from "../../helpers/costumHook/useGetUserWithAccessToken";
import {useEffect} from "react";

const ProfileIndex = () => {


    const {data: session, status} = useSession()
    const [user, error] = useGetUserWithAccessToken(session,status)

    console.log({ message : 'Profile Page status : ', status : status})
    console.log({ message : 'Profile Page session : ', session : session})
    console.log({ message : 'Profile Page session.user : ', session : session.user})
    console.log({ message : 'Profile Page error : ', error : error})
    console.log({ message : 'Profile Page user : ', user : user})


    useEffect(() => {
        console.log('Profile Page Effect : ')
    }, [status,session])

    return (
        <ProfileLayout>
            <m.div variants={animationStore.main} initial='initial' animate='animate' exit={'exit'}>
                <h1 className={'text-3xl'}>Profile Index</h1>
                <div className={'flex flex-col gap-1 mt-2 text-sm font-light bg-skin-theme-100/20 py-2 px-4 rounded max-w-screen-laptop'}>

                    <div className={'mb-4 text-skin-theme-font-100 font-semibold'}>
                        <p>Fetch : <span className={'text-skin-theme-600'}>{user.ok ? "complete" : "try to fetch.."}</span></p>
                        <p>Fetch status : <span className={'text-skin-theme-600'}>{user.status === "Success!" ? "Success" : user.status + ".."}</span></p>
                        <p>Next Auth Status : <span className={'text-skin-theme-600'}>{status}</span></p>
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