import {useRouter} from "next/router";
import ProfileLayout from "../../components/layout/profile-pages-layout/profileLayout";
import {animationStore} from "../../framer-motion-animations/store";
import {motion as m} from "framer-motion";

const ProfilePage = () => {

    const router = useRouter()
    const pageName = router.query.page


    return (<ProfileLayout>
            <m.div variants={animationStore.main} initial='initial' animate='animate' exit={'exit'}>
                <h2 className={'text-lg'}>This page not found = {pageName}</h2>
            </m.div>
        </ProfileLayout>
    )
}

export default ProfilePage