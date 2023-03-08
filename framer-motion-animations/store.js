
const easing = [0.6, -0.05, 0.01, 0.99];
export const animationStore = {
    main: {
        exit: {
            opacity: 0,
            transition: {delay: 0.01, duration : 0.1}
        },
        initial: {
            opacity: 0,
            transition : {}
        },
        animate: {
            opacity: 1,
            transition: {delay: 0.05},
        }
    },
    sideNavigationBar : {
        initial: {
            opacity: 1,
        },
        open : {
            x: 0,
            transition: {delay : 0, duration : 0.2, ease: "easeInOut"}
        },
        close : {
            x: -300,
            transition: {delay : 0, duration : 0.2, ease: "easeInOut"}
        },
        closePriority : {
            x: 0,
            transition: {delay : 0, duration : 0, ease: "easeInOut"}
        }
    },
    staggerBase : {
        visible: {
            transition: {
                staggerChildren: 0.15,
                delayChildren : 0.1
            }
        },
        hidden: {}
    },
    staggerShort : {
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren : 0.05
            }
        },
        hidden: {}
    },
    loadOpacityWithYAngle : {
        visible: {opacity: 1, y: 0},
        hidden: {opacity: 0, y: 100}
    },
    loadOpacityWithYAngleShort : {
        visible: {opacity: 1, y: 0},
        hidden: {opacity: 0, y: 50}
    },
    loadOpacityWithXAngle : {
        visible: {opacity: 1, x: 0},
        hidden: {opacity: 0, x: -50}
    },
    loadOpacityWithXAngleShort : {
        visible: {opacity: 1, x: 0},
        hidden: {opacity: 0, x: -20}
    },
}
