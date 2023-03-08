const easing = [0.6, -0.05, 0.01, 0.99];
export const animationStore = {
    main: {
        exit: {
            opacity: 0,
            transition: {delay: 0, duration: 0.1}
        },
        initial: {
            opacity: 0,
            transition: {}
        },
        animate: {
            opacity: 1,
            transition: {delay: 0.01},
        }
    },
    sideNavigationBar: {
        initial: {
            opacity: 1,
            z : 0,
            position: "static",
            transition: {delay: 0, duration: 0.25, ease: "linear"}
        },
        open: {
            x: 0,
            transition: {delay: 0, duration: 0.25, ease: "linear"}
        },
        close: {
            x: -250,
            z : -10,
            position: "absolute",
            transition: {delay: 0, duration: 0.2, ease: "linear"}
        },
        closePriority: {
            x: 0,
            z : 0,
            position: "static",
            transition: {delay: 0, duration: 0, ease: "linear"}
        }
    },
    staggerBase: {
        visible: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.08
            }
        },
        hidden: {}
    },
    staggerShort: {
        visible: {
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.04
            }
        },
        hidden: {}
    },
    loadOpacityWithYAngle: {
        visible: {opacity: 1, y: 0, transition : {duration : 0.3}},
        hidden: {opacity: 0, y: 20}
    },
    loadOpacityWithYAngleShort: {
        visible: {opacity: 1, y: 0, transition : {duration : 0.3}},
        hidden: {opacity: 0, y: 10}
    },
    loadOpacityWithXAngle: {
        visible: {opacity: 1, x: 0, transition : {duration : 0.3}},
        hidden: {opacity: 0, x: -20}
    },
    loadOpacityWithXAngleShort: {
        visible: {opacity: 1, x: 0, transition : {duration : 0.3    }},
        hidden: {opacity: 0, x: -10}
    },
}
