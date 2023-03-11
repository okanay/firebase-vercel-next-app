import {useRouter} from "next/router";
import ProfileLayout from "../../components/layout/profile-pages-layout/profileLayout";
import {getSession} from "next-auth/react";
import ProfileComponentSelector from "../../components/profile/profile-component-selector";
import {motion as m} from "framer-motion";
import {animationStore} from "../../framer-motion-animations/store";

const ProfilePage = () => {

    const router = useRouter()
    const pathName = router.query.page


    return <ProfileLayout>
        <m.div variants={animationStore.main} initial='initial' animate='animate' exit={'exit'}>
            <ProfileComponentSelector pathname={pathName}/>
        </m.div>
    </ProfileLayout>

}

export default ProfilePage