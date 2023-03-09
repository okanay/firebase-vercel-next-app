import ProfileLayout from "../../components/layout/profile-pages-layout/profileLayout";
import ThemeSelect from "../../components/layout/app-pages-layout/themeSelect";
import {motion as m} from "framer-motion";
import {animationStore} from "../../framer-motion-animations/store";
import {getSession} from "next-auth/react";

const ProfilePreferenceColorTheme = () => {

    return (
        <ProfileLayout>
            <m.div variants={animationStore.main} initial='initial' animate='animate' exit={'exit'}>
        <div className={'flex flex-col gap-4 mt-1'}>
            <h5 className={'text-xl group-hover:text-skin-theme-font-100'}>Customize your color themes.</h5>
            <ThemeSelect></ThemeSelect>
        </div>
        </m.div>
        </ProfileLayout>
    )
}

export default ProfilePreferenceColorTheme

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
