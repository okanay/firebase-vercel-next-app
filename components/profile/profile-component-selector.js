import ColorTheme from "./colorTheme";
import {motion as m} from "framer-motion";
import {animationStore} from "../../framer-motion-animations/store";

const ProfileComponentSelector = ({pathname}) => {

    switch (pathname) {
        case "colorTheme":
            return (
                <m.div variants={animationStore.main} initial='initial' animate='animate' exit={'exit'}>
                    <ColorTheme/>
                </m.div>)
        default:
            return <><p>...</p></>
    }
}

export default ProfileComponentSelector