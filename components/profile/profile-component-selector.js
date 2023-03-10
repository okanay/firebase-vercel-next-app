import ColorTheme from "./color-theme";
import {motion as m} from "framer-motion";
import {animationStore} from "../../framer-motion-animations/store";

const ProfileComponentSelector = ({pathname}) => {

    switch (pathname) {
        case "color-theme":
            return (
                <m.div variants={animationStore.main} initial='initial' animate='animate' exit={'exit'}>
                    <ColorTheme/>
                </m.div>)
        default:
            return <></>
    }
}

export default ProfileComponentSelector