export const animationStore = {
    main: {
        exit: {
            opacity: 0,
            transition: {delay: 0.05, duration : 0.2}
        },
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {delay: 0.25},
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
    }
}
