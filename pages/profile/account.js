import ProfileLayout from "../../components/layout/profile-pages-layout/profileLayout";
import {motion as m} from "framer-motion";
import {animationStore} from "../../framer-motion-animations/store";

const ProfileAccount = () => {

    return (<ProfileLayout>
            <m.div variants={animationStore.main} initial='initial' animate='animate' exit={'exit'}>
                <div className={'flex flex-col gap-4 mt-1'}>
                    <h5 className={'text-xl group-hover:text-skin-theme-font-100'}>Costumize your Account</h5>
                </div>
            </m.div>
        </ProfileLayout>
    )
}

export default ProfileAccount