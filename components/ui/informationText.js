import {motion as m} from "framer-motion";
import {animationStore} from "../../framer-motion-animations/store";

const itemVariants = {
    visible: {
        opacity: 1,
        y: 0
    },
    hidden: {
        opacity: 0,
        y: 50
    }
};
const InformationText = ({title, children}) => {

    return (
        <m.div variants={animationStore.loadOpacityWithYAngle} className={'flex flex-col justify-start gap-1 extensionNavigationBars-start'}>
            <div className={'flex flex-row justify-start gap-2 extensionNavigationBars-start'}>
                <svg
                    className="mt-1 w-5 h-5 text-skin-theme-400"
                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"></path>
                </svg>
                <h2 className={'font-bold text-xl text-skin-theme-font-100'}>{title}</h2>
            </div>
            <h3 className={'mr-8 text-skin-theme-font-300 text-base font-light'}>{children}</h3>
        </m.div>
    )
}

export default InformationText