import ProfileLayout from "../../components/layout/profile-pages-layout/profileLayout";
import {motion as m} from "framer-motion";
import {animationStore} from "../../framer-motion-animations/store";

const ProfileIndex = () => {

    return (
        <ProfileLayout>
            <m.div variants={animationStore.main} initial='initial' animate='animate' exit={'exit'}>
                <h1 className={'text-3xl'}>Profile Index</h1>
            </m.div>
        </ProfileLayout>
    )
}

export default ProfileIndex